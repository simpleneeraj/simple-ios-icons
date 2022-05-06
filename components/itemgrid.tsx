import React from "react";
import Link from "next/link";
import css from "css/Home.module.scss";
import { CardProps } from "typings/pages";

interface ItemGridProps {
  title: React.ReactNode[] | React.ReactNode;
  description: string;
  array: CardProps[];
}
// Welcome to
//Get started by select anyone
const ItemGrid = (props: ItemGridProps) => {
  return (
    <React.Fragment>
      <main className={css.main}>
        <h1 className={css.title}>
          Welcome to <a>{props.title}</a>
        </h1>
        <p className={css.description}>{props.description}</p>
        <div className={css.grid}>
          {props.array.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};
export default ItemGrid;

const Card = (props: CardProps) => {
  return (
    <Link href={props.path}>
      <a className={css.card}>
        <h2>{props.heading} &rarr;</h2>
        <p>{props.description}</p>
      </a>
    </Link>
  );
};
