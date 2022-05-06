import React from "react";
import { GetServerSideProps } from "next";
import { IconsProps } from "typings/pages";
import SearchBar from "components/searchbar";
import readDirectory from "tools/utils/readdir";
import UISpinnerView from "components/UISpinnerView";
import dynamic from "next/dynamic";

const IconGrid = dynamic(() => import("app/iconGrid"), {
  loading: () => <UISpinnerView />,
});

const Category = ({ icons }: IconsProps) => {
  return (
    <React.Fragment>
      <SearchBar />
      <IconGrid icons={icons} />
    </React.Fragment>
  );
};
export default Category;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const icons = await readDirectory(`awesome/${params?.category}`);
  return {
    props: {
      icons: await Promise.all(icons),
    },
  };
};
