import * as React from "react";
import { UIListViewProps } from "typings/ui";
import useUIListView from "hooks/useUIListView";

const UIListView = (props: UIListViewProps) => {
  const { viewRef, isObserve, nonVisibleStyle } = useUIListView(props);
  return (
    <div ref={viewRef} {...props}>
      {isObserve ? props.children : <span style={nonVisibleStyle} {...props} />}
    </div>
  );
};

export default UIListView;
