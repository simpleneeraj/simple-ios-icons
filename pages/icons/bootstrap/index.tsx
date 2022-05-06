import React from "react";
import IconGrid from "app/iconGrid";
import { IconsProps } from "typings/pages";
import SearchBar from "components/searchbar";
import readDirectory from "tools/utils/readdir";

const Bootstrap = ({ icons }: IconsProps) => {
  return (
    <React.Fragment>
      <SearchBar />
      <IconGrid icons={icons} />
    </React.Fragment>
  );
};
export default Bootstrap;

export const getServerSideProps = async () => {
  const icons = await readDirectory("bootstrap");
  return {
    props: {
      icons: await Promise.all(icons),
    },
  };
};
