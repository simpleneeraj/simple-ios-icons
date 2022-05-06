import React from "react";
import { IconsProps } from "typings/pages";
import SearchBar from "components/searchbar";
import readDirectory from "tools/utils/readdir";
import { GetServerSideProps } from "next";
import UISpinnerView from "components/UISpinnerView";
import dynamic from "next/dynamic";

const IconGrid = dynamic(() => import("app/iconGrid"), {
  loading: () => <UISpinnerView />,
});

const Ionic = ({ icons }: IconsProps) => {
  return (
    <React.Fragment>
      <SearchBar />
      <IconGrid icons={icons} />
      {/* <UISpinnerView /> */}
    </React.Fragment>
  );
};
export default Ionic;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const icons = await readDirectory(`ionic/${params?.category}`);
  return {
    props: {
      icons: await Promise.all(icons),
    },
  };
};
