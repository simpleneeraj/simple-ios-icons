import * as React from "react";
import Icon from "components/Icon";
import { IconStateType } from "typings";
import css from "css/Grid.module.scss";
import useSearch from "store/hooks/usesearch";
/**
 * Icons Grid Component
 */

interface IconGridProps {
  icons?: IconStateType[];
}

const IconGrid = ({ icons }: IconGridProps) => {
  const { searchValue } = useSearch();
  const filterArray = icons?.filter((d) => d.name.includes(searchValue));
  return (
    <React.Fragment>
      <div className={css.Grid}>
        <div className={css.Icons}>
          {filterArray?.map((data: IconStateType, i: number) => (
            <Icon key={i} data={data} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default IconGrid;
