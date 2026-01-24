import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "../contexts/ThemeContext";

const ParticlesBackground = () => {
    const { theme } = useTheme();

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // console.log(container);
    }, []);

    const particleColor = theme === 'dark' ? "#ffffff" : "#000000";
    const linkColor = theme === 'dark' ? "#ffffff" : "#000000";

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className="absolute inset-0 z-0"
            options={{
                fullScreen: { enable: false }, // We manage positioning manually to keep it behind content
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#FF33F6", "#33FFF6"],
                    },
                    links: {
                        enable: false, // Disable connected lines
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 3, // Increased speed as requested
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40, // Fewer particles for a cleaner look
                    },
                    opacity: {
                        value: 0.3,
                        anim: {
                            enable: true, // Twinkling effect
                            speed: 0.5,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 4, max: 8 }, // Increased size for visibility
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;
