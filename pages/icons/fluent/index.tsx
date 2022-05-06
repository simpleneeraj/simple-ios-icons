import UISpinnerView from "components/UISpinnerView";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Fragment } from "react";
const ItemGrid = dynamic(() => import("components/itemgrid"), {
  loading: () => <UISpinnerView />,
});
const Fluent: NextPage = () => {
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

export default Fluent;

const navigationArray = [
  {
    path: "/icons/fluent/filled",
    heading: "Filled",
    description: "Set of font fluent Filled icons",
  },
  {
    path: "/icons/fluent/regular",
    heading: "Regular",
    description: "Set of font fluent Regular icons",
  },
];
