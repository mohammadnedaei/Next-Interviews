"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface AnimatedGradientBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 30 + Math.random() * 60,
        length: height * 2.5,
        angle: angle,
        speed: 0.6 + Math.random() * 3,
        opacity: 0.12 + Math.random() * 0.16,
        hue: 190 + Math.random() * 40,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.1,
    };
}
export function BeamsBackground({
                                    className,
                                    intensity = "strong",
                                    children
                                }: AnimatedGradientBackgroundProps) {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    const [isMobile, setIsMobile] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const lastFrameTime = useRef<number>(0);
    const frameInterval = useRef<number>(1000 / 30); // Start with 30fps

    const MINIMUM_BEAMS = isMobile ? 12 : 20;

    const opacityMap = useMemo(() => ({
        subtle: 0.7,
        medium: 0.85,
        strong: 1,
    }), []);

    useEffect(() => {
        // Detect mobile initially
        const checkMobile = () =>
            window.matchMedia("(max-width: 768px)").matches ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        setIsMobile(checkMobile());

        const handleResize = () => {
            setIsMobile(checkMobile());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Adjust settings based on device
        const dpr = isMobile ? 1 : window.devicePixelRatio || 1;
        const targetFPS = isMobile ? 30 : 60;
        frameInterval.current = 1000 / targetFPS;

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            const totalBeams = isMobile ? MINIMUM_BEAMS : MINIMUM_BEAMS * 1.5;
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        const resizeObserver = new ResizeObserver(updateCanvasSize);
        resizeObserver.observe(canvas);

        function resetBeam(beam: Beam, index: number, totalBeams: number) {
            if (!canvas) return beam;

            const column = index % 3;
            const spacing = canvas.width / 3;

            beam.y = canvas.height + 100;
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.5;
            beam.width = 100 + Math.random() * 100;
            beam.speed = 0.5 + Math.random() * 3;
            beam.hue = 190 + (index * 70) / totalBeams;
            beam.opacity = 0.2 + Math.random() * 0.1;
            return beam;
        }
        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const pulsingOpacity = beam.opacity *
                (0.8 + Math.sin(beam.pulse) * 0.2) *
                opacityMap[intensity];

            // Simplified gradient with fewer stops
            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
            gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
            gradient.addColorStop(0.4, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
            gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate(timestamp: number) {
            if (!canvas || !ctx) return;

            // Throttle frame rate
            const delta = timestamp - lastFrameTime.current;
            if (delta < frameInterval.current) {
                animationFrameRef.current = requestAnimationFrame(animate);
                return;
            }
            lastFrameTime.current = timestamp;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Reduced blur effect
            ctx.filter = isMobile ? "blur(20px)" : "blur(35px)";

            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed * (isMobile ? 0.8 : 1);
                beam.pulse += beam.pulseSpeed;

                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, beamsRef.current.length);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        // Handle visibility changes
        const handleVisibilityChange = () => {
            if (document.hidden) {
                cancelAnimationFrame(animationFrameRef.current);
            } else {
                animationFrameRef.current = requestAnimationFrame(animate);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            resizeObserver.disconnect();
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, [intensity, isMobile, opacityMap]);

    return (
        <div className={cn(
            `relative min-h-screen w-full overflow-hidden ${isDark ? "bg-neutral-800" : "bg-neutral-50"}`,
            className
        )}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ filter: "blur(15px)" }}
            />

            <motion.div
                className="absolute inset-0 bg-neutral-950/5"
                animate={{
                    opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: "blur(50px)",
                }}
            />

            <div className="relative z-10 flex h-screen w-full items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
                    {children}
                </div>
            </div>        </div>
    );
}
