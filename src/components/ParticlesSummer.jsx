import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

function ParticlesSummer() {
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
            max: 2,
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
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693178568/Portfolio/Summer/png.monster-107_y1gycc.png",
                particles: {
                  size: {
                    value: { min: 10, max: 14 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693178815/Portfolio/Summer/1417859_wasqjx.png",
                particles: {
                  size: {
                    value: { min: 10, max: 14 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1693193783/Portfolio/Summer/Red_Hibiscus_PNG_Clip_Art_tkoqhh.png",
                particles: {
                  size: {
                    value: { min: 10, max: 14 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1694111574/Portfolio/Summer/138-1384634_hibiscus-flower-tropical-summer-cut-out-hawaiian-hibiscus_qshkva.png",
                particles: {
                  size: {
                    value: { min: 10, max: 14 },
                  },
                },
              },
              {
                src: "https://res.cloudinary.com/doqgufzuq/image/upload/v1694111599/Portfolio/Summer/29-292499_hd-most-beautiful-flower-tri-coloured-hibiscus_ry0ppw.png",
                particles: {
                  size: {
                    value: { min: 10, max: 14 },
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

export default ParticlesSummer;
