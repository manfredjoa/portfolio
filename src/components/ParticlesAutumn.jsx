import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

function ParticlesAutumn() {
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
                src: "https://png2.cleanpng.com/sh/8fe99edf4188be2f095f4f8e31e3ef8f/L0KzQYi4UcI5N2k9UJGAYUHnRoTrgcFmamdmS5CEM0W3QYmBWcE2OWI9T6cANEa0QoaBTwBvbz==/5a1d63da1eb6a3.9354188915118755461258.png",
                particles: {
                  size: {
                    value: { min: 8, max: 14 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/e44b0c85e8b794d5fc8c8daa16917b9d/L0KzQYi4UcI5N5UAfJGAYUHnRoTtgcRnaWhmTZC5MUazSIm9WcE2OWI9T6cAN0i2Qoe6TwBvbz==/5a1d63fa4fa7a5.0160886915118755783263.png",
                particles: {
                  size: {
                    value: { min: 8, max: 14 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/3caa101636288e194b7af55ef17afce5/L0KzQYi4UcI5N2k5fZGAYUHmdrWCWcIybpQ4TZCCN0m3SIG7WME2OWI9TKs8Nkm0Q4q5TwBvbz==/5a1cfd9921fc35.7794804815118493691392.png",
                particles: {
                  size: {
                    value: { min: 8, max: 14 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/cc615212ca6d799488deeba1f29e44bd/L0KzQYm3UsA1N6psiZH0aYP2gLBuTfF2fKZyhp91ZXHpPbT2jP9zNZdmhN42YYX3hb71Tfxmaadqi599cnHxg8HokvVvfF51htk2NXG6R7S6VMU0apM6UKY3NES3SIW5V8IyPWI8T6sDMkG2QoW7Vr5xdpg=/kisspng-autumn-leaf-color-fall-autumn-leaves-transparent-png-5a77c3453bb584.4448427215177982132446.png",
                particles: {
                  size: {
                    value: { min: 8, max: 14 },
                  },
                },
              },
              {
                src: "https://png2.cleanpng.com/sh/52bc2890e01e7de9a8f791704b896691/L0KzQYm3U8MyN5N2fZH0aYP2gLBuTfF2fKZyhp91ZXHpPbT2jP9zNapqhN54dz3mfLr3TfFzfF5yeeJ1ZT3vdbLtTcVia2E1SNcBNEezQbaATsE5OGk6UKgAMUW1Qoa6UsU5OmMASKs3cH7q/kisspng-autumn-leaf-color-yellow-clip-art-maple-leaf-5ac000e64701e7.1808586515225325822909.png",
                particles: {
                  size: {
                    value: { min: 8, max: 14 },
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

export default ParticlesAutumn;
