// @next/next/no-img-element

import * as Icon from "tools/icons/icons";
import { IconsTypes } from "typings";
import css from "css/Toast.module.scss";

interface SectionType {
  sectionName: string;
  buttons: { name: string; Handler: () => void }[];
  src: string;
}

const Section = ({ sectionName, buttons, src }: SectionType) => {
  return (
    <div className={css._section}>
      <div className={css._sectionHeader}>
        <h6>
          <img src={src} alt={src} />
          {sectionName}
        </h6>
      </div>
      <div className={css._BtnGroup}>
        {buttons.map((d: any, i: number) => {
          return (
            <button onClick={d.Handler} key={i}>
              <i>{builder(d.name)}</i>
              {d.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Section;

const builder = (text: IconsTypes) => {
  let arr = ["DOWNLOAD", "PNG", "JPG", "WEBP"];
  let finder = arr.find((str) => str.includes(text));
  switch (text) {
    case "TYPES":
      return <Icon.ShapesOutline size={14} />;
    case "COPY":
      return <Icon.CopyOutline size={14} />;
    case "ZIP":
      return <Icon.ArchiveOutline size={14} />;
    case finder:
      return <Icon.ArrowDownOutline size={14} />;
    default:
      return null;
  }
};
