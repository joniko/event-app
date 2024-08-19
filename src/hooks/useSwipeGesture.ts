"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function useSwipeGesture() {
  const router = useRouter();
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchEnd.current = null;
      touchStart.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e: TouchEvent) => {
      touchEnd.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
      if (!touchStart.current || !touchEnd.current) return;
      const distance = touchStart.current - touchEnd.current;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;
      if (isRightSwipe) {
        router.back();
      }
    };

    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [router]);

  return null; // O puedes retornar algún valor si lo necesitas
}
