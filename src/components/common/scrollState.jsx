import { useEffect} from "react";

export default function ScrollState(props) {
  const { handleScroll } = props;

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 5;
      handleScroll(scrollCheck);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll]);

  return null;
}


