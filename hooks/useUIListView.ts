import * as React from 'react';
import { UIListViewProps } from 'typings/ui';
/**************************
Basic Hook for UIListView
@returns
```js
return { viewRef, isObserve, style } as const;
```
***************************/

const useUIListView = (props: UIListViewProps) => {
    const { height = 300, offset = 10, root = null, duration = 100 } = props;
    // * #_Check is server-side or not
    const ssr = typeof window === 'undefined';
    let isTimeOut = {
        timeout: 600,
    };
    // * #_Some Transition when component render
    let styleBefore = {
        opacity: '0',
        transition: `opacity ${duration}ms ease-in`,
    };
    // * #_Some Transition when component render
    let styleAfter = {
        opacity: '1',
        transition: `opacity ${duration}ms ease-in`,
    };
    const [isObserve, setIsObserve] = React.useState<boolean>(ssr);
    const currentHeight = React.useRef<number>(height);
    // * #_Intersection ref
    const viewRef = React.useRef<HTMLDivElement>(null);
    // * #_Inter section Observer Callback
    const observerCallback: IntersectionObserverCallback = (entries) => {
        let check = typeof window !== undefined && window.requestIdleCallback;
        // * #_where _i is a boolen value for isIntersecting or not
        let _i = entries[0].isIntersecting;
        // * #_Checking requestIdleCallback
        check
            ? window.requestIdleCallback(() => setIsObserve(_i), isTimeOut)
            : setIsObserve(_i);
    };

    // * #_Set visibility with intersection observer
    React.useEffect(() => {
        if (viewRef.current) {
            let options: IntersectionObserverInit = {
                root,
                rootMargin: `${offset}px 0px ${offset}px 0px`,
            };
            const observer = new IntersectionObserver(observerCallback, options);
            observer.observe(viewRef.current);
            return () =>
                viewRef.current ? observer.unobserve(viewRef.current) : undefined;
        }
        return () => { };
    }, [viewRef]);

    // * #_Set true height for placeholder element after render.
    React.useEffect(() => {
        let isMount = true;
        if (isMount) {
            if (viewRef.current !== null) {
                viewRef.current.style.opacity = styleBefore.opacity;
                viewRef.current.style.transition = styleBefore.transition;
            }
            if (viewRef.current && isObserve) {
                viewRef.current.style.opacity = styleAfter.opacity;
                viewRef.current.style.transition = styleAfter.transition;
                currentHeight.current = viewRef.current.offsetHeight;
            }
        }
        return () => {
            isMount = false;
        };
    }, [isObserve, viewRef]);

    // * #_Basic Style For non visible HTMLDivElement
    const nonVisibleStyle: React.CSSProperties = {
        height: currentHeight.current,
    };

    return { viewRef, isObserve, nonVisibleStyle };
};



export default useUIListView;