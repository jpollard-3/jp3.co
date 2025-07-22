import { useState, useEffect } from "react";

export default function UserWindow(props) {
  const { handleResize } = props;
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    handleResize(screenSize.dynamicWidth);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize, handleResize]);
  return null;
}

