// @next/next/no-img-element
import * as React from "react";
// HOOKS
import useToast from "hooks/useToast";
import useIcons from "hooks/useIcons";
import useClick from "hooks/useClick";
// #_STYLE
import css from "css/Toast.module.scss";
import Section from "./section";
import useAction from "hooks/useAction";
import { IconStateType } from "typings";

const Toast = () => {
  const { data } = useIcons();
  const { ToastHandler, isToast } = useToast();
  const ref = useClick(() => ToastHandler(false));
  return (
    <React.Fragment>
      {isToast && (
        <div className={css.Toast}>
          <div className={css.Container}>
            <div ref={ref} className={css._Inner}>
              <div className={css._Icon}>
                <img src={data.iconPath} loading="lazy" alt={data.name} />
                <h4>{data.name}</h4>
              </div>
              <div className={css._details}>
                <ButtonTSX iconData={data} />
                <ButtonJSX iconData={data} />
                <ButtonSVG iconData={data} />
                <ButtonPNG iconData={data} />
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Toast;

interface ButtonProps {
  iconData: IconStateType;
}

const ButtonTSX = ({ iconData }: ButtonProps) => {
  const { CopyInterface, CopyTypescript, DownloadTsx } = useAction(iconData);
  return (
    <Section
      src="/icons/typescript.svg"
      sectionName="TYPESCRIPT"
      buttons={[
        {
          name: "TYPES",
          Handler: () => CopyInterface(),
        },
        {
          name: "COPY",
          Handler: () => CopyTypescript(),
        },
        {
          name: "DOWNLOAD",
          Handler: () => DownloadTsx(),
        },
      ]}
    />
  );
};
const ButtonJSX = ({ iconData }: ButtonProps) => {
  const { CopyJavascript, DownloadJsx } = useAction(iconData);

  return (
    <Section
      src="/icons/javascript.svg"
      sectionName="JAVASCRIPT"
      buttons={[
        {
          name: "COPY",
          Handler: () => CopyJavascript(),
        },
        {
          name: "DOWNLOAD",
          Handler: () => DownloadJsx(),
        },
      ]}
    />
  );
};
const ButtonSVG = ({ iconData }: ButtonProps) => {
  const { CopySvg, DownloadSvg } = useAction(iconData);

  return (
    <Section
      src="/icons/svg.svg"
      sectionName="SVG"
      buttons={[
        {
          name: "COPY",
          Handler: () => CopySvg(),
        },
        {
          name: "DOWNLOAD",
          Handler: () => DownloadSvg(),
        },
      ]}
    />
  );
};
const ButtonPNG = ({ iconData }: ButtonProps) => {
  const { DownloadImage, DownloadZip } = useAction(iconData);
  return (
    <Section
      src="/icons/image.svg"
      sectionName="IMAGE"
      buttons={[
        {
          name: "PNG",
          Handler: () =>
            DownloadImage({ format: "png", color: colors[0], pixelRatio: 2 }),
        },
        {
          name: "JPG",
          Handler: () =>
            DownloadImage({ format: "jpeg", color: colors[3], pixelRatio: 2 }),
        },
        {
          name: "WEBP",
          Handler: () =>
            DownloadImage({ format: "webp", color: colors[5], pixelRatio: 2 }),
        },
        // {
        //   name: "ZIP",
        //   Handler: () =>
        //     DownloadZip({ format: "webp", color: colors[5], pixelRatio: 2 }),
        // },
      ]}
    />
  );
};
const colors = [
  "#FF6900",
  "#FCB900",
  "#7BDCB5",
  "#00D084",
  "#8ED1FC",
  "#0693E3",
  "#ABB8C3",
  "#EB144C",
  "#F78DA7",
  "#9900EF",
];
