import { NextPage } from "next";
import { Fragment } from "react";
import ItemGrid from "components/itemgrid";

const Emoji: NextPage = () => {
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

export default Emoji;

const navigationArray = [
  {
    path: "/icons/emoji/twitter",
    heading: "Twitter",
    description: "Set of ios fill icons",
  },
  {
    path: "/icons/emoji/facebook",
    heading: "Facebook",
    description: "Set of ios outline icons",
  },
];
