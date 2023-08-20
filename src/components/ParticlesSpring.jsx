import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

function ParticlesSpring() {
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: "#fecdd3",
        },
      },
      particles: {
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out",
          },
          size: true,
          speed: {
            min: 0.3,
            max: 1,
          },
        },
        number: {
          value: 100,
          density: {
            enable: true,
            area: 800,
          },
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: "bottom",
          move: true,
          animation: {
            enable: true,
            speed: 5,
          },
        },
        shape: {
          type: "image",
          options: {
            image: [
              {
                src: "https://png2.cleanpng.com/sh/2ae373668bbf9d84c514b3c090c99c6c/L0KzQoG3UsI2N6huepH9cnHxg8HokvVvfF51feZqbD3pfLFAhgIueJpzg595bHHxhH7vifJqe5R6i58AZUW4crPpgfQ5a5QAS5CBOEW7SIGAUcE2QGM7T6gEMkK7SIm1kP5o/transparent-petal-flower-pink-plant-hibiscus-5e55bbbad8cc93.685880711582676922888.png",
                particles: {
                  size: {
                    value: { min: 8, max: 12 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/9b5973a69d13d8a980ccc26cb759061b/L0KzQYi4UcI4N5M9UJGAYUHmRYe7VcBiQJNrSpC7MUezSYm7VsE2OWI9SKgAM0OzRIS5TwBvbz==/5a1c56450a8bf2.2170984615118065330432.png",
                particles: {
                  size: {
                    value: { min: 8, max: 12 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/8bc2e438dba7413933edc31d6f0bfc01/L0KzQYi4UcI4N5RmTZGAYUHmR4K8WcI5bWM6T5CDMkW2RoW7VsE2OWI9SaU9NkW0Roi8TwBvbz==/5a1c715928e257.8253644615118134651675.png",
                particles: {
                  size: {
                    value: { min: 8, max: 12 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/b490a11264b1e01c50f80abba239dd12/L0KzQYm3U8AyN6lAj5H0aYP2gLBuTgNxeppzf59vbHB6dcO0kPVia5kyeZ9BZXP3f8O0kPVia5kyiN5AbT24cYqBUMBjQGg1e6c7ND61QYO4Wcg5PGI6SasEMUGzSYe7VsE6NqFzf3==/kisspng-spring-flower-peach-a-vector-peach-plum-5a9800b870c524.2121988415199110964619.png",
                particles: {
                  size: {
                    value: { min: 8, max: 12 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/71eb5af3d3cf5ee0c29ad3120059e7e6/L0KzQoG3UsI2N6FAiZH9cnHxg8HokvVvfF51feZqbD3zebByTfZtd6hqip95bHHxhH7vhgJjaZRqhAd8LYDvcbB7TcVmPWZneaIANUO4Q4GATskxQWY2SKg9MUW7QoeAVsQ5PWQ5SaU3cH7q/transparent-petal-pink-flower-plant-herbaceous-plant-5e55ba05535307.9095106415826764853413.png",
                particles: {
                  size: {
                    value: { min: 8, max: 12 },
                  },
                },
              },
            ],
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
}

export default ParticlesSpring;
