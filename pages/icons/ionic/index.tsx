import UISpinnerView from "components/UISpinnerView";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Fragment } from "react";
const ItemGrid = dynamic(() => import("components/itemgrid"), {
  loading: () => <UISpinnerView />,
});
const Ionic: NextPage = () => {
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

export default Ionic;

const navigationArray = [
  {
    path: "/icons/ionic/solid",
    heading: "Solid",
    description: "Set of ios fill icons",
  },
  {
    path: "/icons/ionic/outline",
    heading: "Outline",
    description: "Set of ios outline icons",
  },
  {
    path: "/icons/ionic/sharp",
    heading: "Sharp",
    description: "Set of ios outline icons",
  },
];
