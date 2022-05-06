import UISpinnerView from "components/UISpinnerView";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Fragment } from "react";
const ItemGrid = dynamic(() => import("components/itemgrid"), {
  loading: () => <UISpinnerView />,
});
const IOS: NextPage = () => {
  return (
    <Fragment>
      <ItemGrid
        title={"icons"}
        description={"Get started by select anyone"}
        array={navigationArray}
      />
    </Fragment>
  );
};

export default IOS;

const navigationArray = [
  {
    path: "/icons/ios/fill",
    heading: "Fill",
    description: "Set of ios fill icons",
  },
  {
    path: "/icons/ios/outline",
    heading: "Outline",
    description: "Set of ios outline icons",
  },
];
