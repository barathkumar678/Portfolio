import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const move = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.08, ease: 'power2.out' });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' });
    };

    const over = (e) => {
      const t = e.target;
      if (t.closest('a') || t.closest('button') || t.classList.contains('magnetic')) {
        setIsHover(true);
      } else {
        setIsHover(false);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: -4, left: -4,
          width: 8, height: 8,
          backgroundColor: 'var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: isHover ? -24 : -18,
          left: isHover ? -24 : -18,
          width: isHover ? 48 : 36,
          height: isHover ? 48 : 36,
          border: '1.5px solid var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.3s, height 0.3s, top 0.3s, left 0.3s, background-color 0.3s',
          backgroundColor: isHover ? 'rgba(167, 139, 250, 0.08)' : 'transparent',
        }}
      />
    </>
  );
}
