import React, { useEffect, useState, ComponentPropsWithRef } from "react";

interface FadeTypes extends ComponentPropsWithRef<"div"> {
  delay?: number;
  visible?: boolean;
  duration?: number;
  positionY?: number;
  positionX?: number;
  onComplete?: () => void;
}

const Fade: React.FC<FadeTypes> = (props) => {
  const {
    delay,
    children,
    positionX = 0,
    positionY = 0,
    visible = true,
    duration = 400,
    onComplete,
    ...rest
  } = props;

  // Use State

  const [maxVisible, setmaxVisible] = useState(0);
  useEffect(() => {
    let count = React.Children.count(children);
    if (!visible) {
      count = 0;
    }
    if (count == maxVisible) {
      const timeOut = setTimeout(() => {
        if (onComplete) onComplete();
      }, duration);
      return () => clearTimeout(timeOut);
    }
    const increment = count > maxVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setmaxVisible(maxVisible + increment);
    }, delay);
    return () => clearTimeout(timeout);
  }, [children]);

  // Style For Fade Effect

  const style = {
    transition: `opacity ${duration}ms , transform ${duration}ms`,
    transform: maxVisible ? "none" : `translate(${positionX}px,${positionY}px)`,
    opacity: maxVisible ? 1 : 0,
  };
  //
  return (
    <div style={style} {...rest}>
      {children}
    </div>
  );
};

export default Fade;
