import React from "react";
import IconGrid from "app/iconGrid";
import { IconsProps } from "typings/pages";
import SearchBar from "components/searchbar";
import readDirectory from "tools/utils/readdir";
import { GetServerSideProps } from "next";

const Ionic = ({ icons }: IconsProps) => {
  return (
    <React.Fragment>
      <SearchBar />
      <IconGrid icons={icons} />
    </React.Fragment>
  );
};
export default Ionic;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const icons = await readDirectory(`emoji/${params?.category}`);
  return {
    props: {
      icons: await Promise.all(icons),
    },
  };
};
