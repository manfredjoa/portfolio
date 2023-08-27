import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

function ParticlesSpring() {
  const options = useMemo(() => {
    return {
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
          value: 150,
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
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693176429/Portfolio/Spring/39-396062_blue-flowers-png-tumblr-blue-aesthetic-flower-png_r9ybbd.png",
                particles: {
                  size: {
                    value: { min: 10, max: 16 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693176482/Portfolio/Spring/purepng.com-blossom-flowerflower-pink-blossom-flower-961524680272u0zbu_cat5sk.png",
                particles: {
                  size: {
                    value: { min: 10, max: 16 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693176808/Portfolio/Spring/get-cherry-blossom-png-pictures-20_q0noqr.png",
                particles: {
                  size: {
                    value: { min: 10, max: 16 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693177065/Portfolio/Spring/Flower-PNG-File_we9oyv.png",
                particles: {
                  size: {
                    value: { min: 10, max: 16 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693177492/Portfolio/Spring/Sunflower_PNG_Image_xp7t1g.png",
                particles: {
                  size: {
                    value: { min: 10, max: 16 },
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
