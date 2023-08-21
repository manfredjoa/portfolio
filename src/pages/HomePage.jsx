import Home from "../components/Home";
import { useState, useEffect } from "react";

function HomePage() {
  const [showWinterParticles, setShowWinterParticles] = useState(false);
  const [showSpringParticles, setShowSpringParticles] = useState(false);
  const [showSummerParticles, setShowSummerParticles] = useState(false);
  const [showAutumnParticles, setShowAutumnParticles] = useState(false);

  useEffect(() => {
    showWinter();
  }, []);

  const showWinter = () => {
    noShow();
    setShowWinterParticles(true);
  };

  const showSpring = () => {
    noShow();
    setShowSpringParticles(true);
  };

  const showSummer = () => {
    noShow();
    setShowSummerParticles(true);
  };

  const showAutumn = () => {
    noShow();
    setShowAutumnParticles(true);
  };

  const noShow = () => {
    setShowWinterParticles(false);
    setShowSpringParticles(false);
    setShowSummerParticles(false);
    setShowAutumnParticles(false);
  };

  return (
    <div>
      {(showWinterParticles && (
        <div
          className="h-screen w-screen absolute"
          style={{
            // backgroundImage:
            //   "url(https://www.transparenttextures.com/patterns/fresh-snow.png)",
            //   backgroundColor: "rgb(8, 47, 73)",
            backgroundImage:
              "url(https://www.vacationsbyrail.com/media/39419706/northern-lights-flying-over-the-glacier-lagoon-in-iceland.jpg)",
            backgroundSize: "cover",
          }}
        ></div>
      )) ||
        (showSpringParticles && (
          <div
            className="h-screen w-screen absolute"
            style={{
              // backgroundImage:
              //   "url(https://www.transparenttextures.com/patterns/wild-flowers.png)",
              // backgroundColor: "rgb(216, 180, 254)",
              backgroundImage:
                "url(https://www.1800flowers.com/blog/wp-content/uploads/2022/03/flowers-blue-sky-facts-about-spring.jpg)",
              backgroundSize: "cover",
            }}
          ></div>
        )) ||
        (showSummerParticles && (
          <div
            className="h-screen w-screen absolute"
            style={{
              // backgroundImage:
              //   "url(https://www.transparenttextures.com/patterns/arches.png)",
              //   backgroundColor: "rgb(250, 204, 21)",
              backgroundImage:
                "url(https://fh-sites.imgix.net/sites/3125/2022/02/09195123/AdobeStock_240520006-scaled.jpeg)",
              backgroundSize: "cover",
            }}
          ></div>
        )) ||
        (showAutumnParticles && (
          <div
            className="h-screen w-screen absolute"
            style={{
              // backgroundImage:
              //   "url(https://www.transparenttextures.com/patterns/shley-tree-2.png)",
              //   backgroundColor: "rgb(255, 255, 255)",
              backgroundImage:
                "url(https://images6.alphacoders.com/338/338596.jpg)",
              backgroundSize: "cover",
            }}
          ></div>
        ))}

      <Home
        showWinterParticles={showWinterParticles}
        showSpringParticles={showSpringParticles}
        showSummerParticles={showSummerParticles}
        showAutumnParticles={showAutumnParticles}
        showWinter={showWinter}
        showSpring={showSpring}
        showSummer={showSummer}
        showAutumn={showAutumn}
      />
    </div>
  );
}

export default HomePage;
