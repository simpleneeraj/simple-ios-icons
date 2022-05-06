import * as React from "react"

type RNode = React.ReactNode | React.ReactNode[]
type WithRef<E> = React.ComponentPropsWithRef<E>


interface UIAnimViewProps {
    delay?: number;
    animateX?: number;
    animateY?: number;
    visible?: boolean;
    duration?: number;
    children?: RNode;
    onComplete?: () => void;
}

interface UIListViewProps extends WithRef<'div'> {
    height?: number;
    offset?: number;
    duration?: number;
    children?: RNode;
    root?: Element | Document | null | undefined;
}

interface IconsDataTypes {
    name?: string;
    iconPath?: string;
}