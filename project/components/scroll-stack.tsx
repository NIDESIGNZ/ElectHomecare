'use client';

import {
  type CSSProperties,
  type ReactNode,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react';

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
}

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

interface CardTransform {
  translateY: number;
  scale: number;
  rotation: number;
  blur: number;
}

export function ScrollStackItem({ children, itemClassName = '' }: ScrollStackItemProps) {
  return <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>;
}

export default function ScrollStack({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
}: ScrollStackProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, CardTransform>());
  const frameRef = useRef<number | null>(null);
  const stackCompletedRef = useRef(false);

  const parsePosition = useCallback((value: string, height: number) => {
    return value.includes('%') ? (parseFloat(value) / 100) * height : parseFloat(value);
  }, []);

  const getOffset = useCallback((element: HTMLElement) => {
    let offset = 0;
    let current: HTMLElement | null = element;

    while (current) {
      offset += current.offsetTop;
      current = current.offsetParent instanceof HTMLElement ? current.offsetParent : null;
    }

    return offset;
  }, []);

  const updateCards = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePosition(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePosition(scaleEndPosition, containerHeight);
    const endElement = scrollerRef.current?.querySelector('.scroll-stack-end');
    const endElementTop = endElement instanceof HTMLElement ? getOffset(endElement) : 0;
    const pinEnd = endElementTop - containerHeight / 2;
    let topCardIndex = 0;

    cardsRef.current.forEach((card, index) => {
      const cardTop = getOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * index;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const progress = Math.min(1, Math.max(0, (scrollTop - triggerStart) / (triggerEnd - triggerStart)));

      if (scrollTop >= triggerStart) topCardIndex = index;

      const targetScale = baseScale + index * itemScale;
      const scale = 1 - progress * (1 - targetScale);
      const rotation = rotationAmount * index * progress;
      const pinStart = triggerStart;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      const translateY = isPinned
        ? scrollTop - cardTop + stackPositionPx + itemStackDistance * index
        : scrollTop > pinEnd
          ? pinEnd - cardTop + stackPositionPx + itemStackDistance * index
          : 0;
      const blur = blurAmount && index < topCardIndex ? (topCardIndex - index) * blurAmount : 0;
      const nextTransform: CardTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };
      const previousTransform = lastTransformsRef.current.get(index);
      const changed = !previousTransform || Object.keys(nextTransform).some((key) => {
        const transformKey = key as keyof CardTransform;
        return Math.abs(previousTransform[transformKey] - nextTransform[transformKey]) > 0.01;
      });

      if (changed) {
        card.style.transform = `translate3d(0, ${nextTransform.translateY}px, 0) scale(${nextTransform.scale}) rotate(${nextTransform.rotation}deg)`;
        card.style.filter = nextTransform.blur ? `blur(${nextTransform.blur}px)` : '';
        lastTransformsRef.current.set(index, nextTransform);
      }
    });

    const lastCard = cardsRef.current[cardsRef.current.length - 1];
    if (lastCard) {
      const lastStart = getOffset(lastCard) - stackPositionPx - itemStackDistance * (cardsRef.current.length - 1);
      const isComplete = scrollTop >= lastStart && scrollTop <= pinEnd;
      if (isComplete && !stackCompletedRef.current) {
        stackCompletedRef.current = true;
        onStackComplete?.();
      } else if (!isComplete) {
        stackCompletedRef.current = false;
      }
    }
  }, [baseScale, blurAmount, getOffset, itemScale, itemStackDistance, onStackComplete, parsePosition, rotationAmount, scaleEndPosition, stackPosition]);

  const handleScroll = useCallback(() => {
    if (frameRef.current !== null) return;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      updateCards();
    });
  }, [updateCards]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    cardsRef.current = Array.from(scroller.querySelectorAll<HTMLElement>('.scroll-stack-card'));
    cardsRef.current.forEach((card, index) => {
      if (index < cardsRef.current.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
    });

    updateCards();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cardsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [handleScroll, itemDistance, updateCards]);

  const style = { '--scroll-stack-card-scale': baseScale } as CSSProperties;

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef} style={style}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
}
