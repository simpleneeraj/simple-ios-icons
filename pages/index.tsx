import { NextPage } from "next";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import UISpinnerView from "components/UISpinnerView";

const ItemGrid = dynamic(() => import("components/itemgrid"), {
  loading: () => <UISpinnerView />,
});

const Home: NextPage = () => {
  return (
    <Fragment>
      <ItemGrid
        title={"∞ icons"}
        description={"Get started by select anyone"}
        array={navigationArray}
      />
    </Fragment>
  );
};

export default Home;

interface CardProps {
  path: string;
  heading: string;
  description: string;
  recursive?: CardProps[];
}

export const navigationArray: CardProps[] = [
  {
    path: "/icons/awesome",
    heading: "Font Awesome 5",
    description: "Set of font awesome icons ",
  },
  {
    path: "/icons/awesome",
    heading: "Font Awesome 6",
    description: "Set of font awesome icons ",
  },
  {
    path: "/icons/bootstrap",
    heading: "Bootstrap",
    description: "Set of bootstrap icons ",
  },
  {
    path: "/icons/fluent",
    heading: "Microsoft Fluent",
    description: "Set of bootstrap icons ",
  },
  {
    path: "/icons/ionic",
    heading: "Ionic Framework",
    description: "Set of bootstrap icons ",
  },
  {
    path: "/icons/ios",
    heading: "IOS Glyph",
    description: "Set of bootstrap icons ",
  },
  // {
  //   path: "/icons/emoji",
  //   heading: "Emoji ",
  //   description: "Set of emoji icons ",
  // },
];
