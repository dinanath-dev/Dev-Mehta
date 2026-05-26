/* ============================================
 * Asmit-style floating tech icons (local SVGs)
 * Config matched to portfolio-asmit-alok.vercel.app tsparticles
 * ============================================ */

import { useEffect, useRef } from 'react';
import { particleImages } from '@/constants/particleImages';

interface Floater {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
  opacityMin: number;
  opacitySpeed: number;
  imageIndex: number;
}

/** Asmit uses value: 15, limit: 20 */
const PARTICLE_COUNT = 18;
const MOVE_SPEED = 2;
const ROTATE_SPEED = 5;
const SIZE = 22;

export function TechParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let cancelled = false;
    const floaters: Floater[] = [];
    const images: HTMLImageElement[] = new Array(particleImages.length);
    let loadedCount = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initFloaters = () => {
      floaters.length = 0;
      const w = window.innerWidth;
      const h = window.innerHeight;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        floaters.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * MOVE_SPEED * 0.35,
          vy: (Math.random() - 0.5) * MOVE_SPEED * 0.35,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * ROTATE_SPEED,
          size: SIZE + Math.random() * 8,
          opacity: 0.5 + Math.random() * 0.5,
          opacityMin: 0.2,
          opacitySpeed: 0.01 + Math.random() * 0.01,
          imageIndex: Math.floor(Math.random() * particleImages.length),
        });
      }
    };

    const loadImages = () => {
      particleImages.forEach((item, i) => {
        const img = new Image();
        img.onload = () => {
          images[i] = img;
          loadedCount++;
          if (loadedCount === particleImages.length && !cancelled) {
            initFloaters();
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === particleImages.length && !cancelled) {
            initFloaters();
          }
        };
        img.src = item.src;
      });
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      if (loadedCount === 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      floaters.forEach((f) => {
        f.x += f.vx;
        f.y += f.vy;
        f.rotation += f.rotationSpeed;

        f.opacity += f.opacitySpeed;
        if (f.opacity >= 1 || f.opacity <= f.opacityMin) {
          f.opacitySpeed *= -1;
        }

        if (f.x < -f.size) f.x = w + f.size;
        if (f.x > w + f.size) f.x = -f.size;
        if (f.y < -f.size) f.y = h + f.size;
        if (f.y > h + f.size) f.y = -f.size;

        const img = images[f.imageIndex % particleImages.length];
        if (!img?.complete) return;

        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.rotate((f.rotation * Math.PI) / 180);
        ctx.globalAlpha = f.opacity;
        const half = f.size / 2;
        ctx.drawImage(img, -half, -half, f.size, f.size);
        ctx.restore();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    loadImages();
    draw();

    const onResize = () => {
      resize();
      initFloaters();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
