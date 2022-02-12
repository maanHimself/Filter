import Cubes from "../components/Cubes";
import styles from "../styles/Home.module.css";
import FilterMobile from "../components/FilterMobile";
import FilterDesktop from "../components/FilterDesktop";

import { useState, useEffect } from "react";

import { debounce } from "lodash";

function useWindowSize() {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    //debounce will make the function run only once when the resize is done
    const handleWindowResizeThrottle = debounce(
      function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      },
      400,
      { leading: false, trailing: true }
    );

    window.addEventListener("resize", handleWindowResizeThrottle, {
      passive: true,
    });
    return () => {
      window.removeEventListener("resize", handleWindowResizeThrottle);
    };
  }, []);

  return dimensions;
}

function Phys(props) {
  const breakpoint = 769;
  const { width, height } = useWindowSize();

  // useEffect(() => {
  //   width = setWidth(Window.innerWidth);
  //   window.addEventListener("resize", () => setWidth(window.innerWidth));
  //   return () => window.removeEventListener("resize", handleWindowResize);
  // }, []);

  return width < breakpoint ? <FilterMobile /> : <FilterDesktop />;
}

export default Phys;
