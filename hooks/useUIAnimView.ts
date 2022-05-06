import * as React from "react"
import type { UIAnimViewProps } from "typings/ui";

/**************************
Custom Hooks For This Functanality
***************************/
const useUIAnimView = (props: UIAnimViewProps) => {
    const {
        delay,
        children,
        animateX = 0,
        animateY = 0,
        visible = true,
        duration = 400,
        onComplete,
    } = props;

    // Use State
    const [maxVisible, setmaxVisible] = React.useState(0);
    React.useEffect(() => {
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
    const animations = {
        transition: `opacity ${duration}ms , transform ${duration}ms`,
        transform: maxVisible ? 'none' : `translate(${animateX}px,${animateY}px)`,
        opacity: maxVisible ? 1 : 0,
    };

    return animations;
};



export default useUIAnimView;