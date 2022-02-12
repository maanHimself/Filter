import Cubes from "../components/Cubes";
import styles from "../styles/Home.module.css";
import FilterMobile from "../components/FilterMobile";
import FilterDesktop from "../components/FilterDesktop";

import { useState, useEffect } from "react";

function Phys(props) {
  const breakpoint = 769;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    width = setWidth(Window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <FilterMobile /> : <FilterDesktop />;
}

export default Phys;
