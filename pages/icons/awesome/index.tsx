import UISpinnerView from "components/UISpinnerView";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Fragment } from "react";
const ItemGrid = dynamic(() => import("components/itemgrid"), {
  loading: () => <UISpinnerView />,
});
const Awesome: NextPage = () => {
  return (
    <Fragment>
      <ItemGrid
        title={"icons"}
        description={"Get started by select anyone"}
        array={arrayData}
      />
    </Fragment>
  );
};

export default Awesome;

const arrayData = [
  {
    path: "/icons/awesome/brands",
    heading: "Brands",
    description: "Set of font awesome Brands icons",
  },
  {
    path: "/icons/awesome/duotone",
    heading: "Duotone",
    description: "Set of font awesome Duotone icons",
  },
  {
    path: "/icons/awesome/light",
    heading: "Light",
    description: "Set of font awesome Light icons",
  },
  {
    path: "/icons/awesome/regular",
    heading: "Regular",
    description: "Set of font awesome Regular icons",
  },
  {
    path: "/icons/awesome/solid",
    heading: "Solid",
    description: "Set of font awesome Solid icons",
  },
];
