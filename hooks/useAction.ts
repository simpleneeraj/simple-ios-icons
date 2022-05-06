import * as React from "react";
import purify from "tools/utils/purify";
import * as Mime from "tools/utils/mimeTypes"
import blobMaker from "tools/utils/blobMaker";
import createCanvas from "tools/utils/createCanvas";
import toCapitalize from "tools/utils/toCapitalize";
import download from "tools/plugins/download";
import setAttributes from "tools/utils/setAttributes";
import wraperStrings from "tools/utils/wraperStrings";
import { setValue, readValue } from "tools/utils/clipboard";
import { DownloadOptions, IconStateType } from "typings";



const useAction = (iconData: IconStateType) => {
  const { name, iconPath } = iconData;
  const uppercase = toCapitalize(name)
  /**
   * Handler Svg
   */
  const CopySvg = React.useCallback(async () => {
    try {
      const { svg } = await purify(iconPath, { encoding: "javascript" });
      setValue(svg.outerHTML);
    } catch (e) {
      console.log(e);
    }
  }, []);
  const DownloadSvg = React.useCallback(async () => {
    try {
      const blob = await blobMaker([iconPath], { type: Mime.typeSvg });
      download(blob, `${name}.svg`);

    } catch (e) {
      console.log(e);
    }
  }, []);

  /**
   * Handler Javascript
   */

  const CopyJsx = React.useCallback(async () => {
    try {
      const { svg } = await purify(iconPath, { encoding: "javascript" });
      let wraper = wraperStrings(uppercase, svg.innerHTML, "named-export");
      setValue(wraper.jsxString);
    } catch (e) {
      console.log(e);
    }
  }, []);
  const DownloadJsx = React.useCallback(async () => {
    try {
      const { svg } = await purify(iconPath, { encoding: "javascript" });
      let wraper = wraperStrings(uppercase, svg.innerHTML, "default-export");
      const blob = await blobMaker([wraper.jsxString], {
        type: Mime.typeJsx,
      });
      download(blob, `${name}.jsx`);
    } catch (e) {
      console.log(e);
    }
  }, []);


  /**
   * Handler Typescript Interface
   */
  const CopyInterface = React.useCallback(async () => {
    try {
      let wraper = wraperStrings();
      setValue(wraper.interfaceString);
    } catch (e) {
      console.log(e);
    }
  }, []);




  /**
  * Handler Typescript
  */
  const CopyTsx = React.useCallback(async () => {
    try {
      const { svg } = await purify(iconPath, { encoding: "javascript" });
      let wraper = wraperStrings(uppercase, svg.innerHTML, "named-export");
      setValue(wraper.tsxString);
    } catch (e) {
      console.log(e);
    }
  }, []);
  const DownloadTsx = React.useCallback(async () => {
    try {
      const { svg } = await purify(iconPath, { encoding: "javascript" });
      let wraper = wraperStrings(uppercase, svg.innerHTML, "default-export");
      const blob = await blobMaker([wraper.tsxFileString], {
        type: Mime.typeTsx,
      });
      download(blob, `${uppercase}.tsx`);
    } catch (e) {
      console.log(e);
    }
  }, []);

  /**
   * Handler For PNG
   */

  const DownloadImage = React.useCallback(async (options: DownloadOptions) => {
    const { format, color, pixelRatio } = options;
    try {
      const { svg } = await purify(iconPath, {
        encoding: "html",
        strokeColor: "#F78DA7",
      });
      setAdditionalAttributes(svg, {
        color: color,
        format: format,
        pixelRatio: pixelRatio
      });
      let imageSrc = `${Mime.dataImage}${encodeURIComponent(svg.outerHTML)}`;
      const canvas = await createCanvas(imageSrc, pixelRatio);
      console.log(svg);
      canvas.toBlob((blob: BlobPart | null) => {
        download(blob, `${uppercase}.${format}`);
      }, `image/${format}`);
    } catch (e) {
      console.log(e);
    }
  }, []);


  /**************************
  DownloadZip with All Format
  ***************************/

  const DownloadZip = React.useCallback(async (options: DownloadOptions) => {
    const { pixelRatio } = options;
    try {
      const { svg } = await purify(iconPath, { encoding: "html" });
      let imageSrc = `${Mime.dataImage}${encodeURIComponent(svg.outerHTML)}`;
      const canvas = await createCanvas(imageSrc, pixelRatio);
      let zips = await readyForZIP(iconPath, canvas);
      console.log(zips);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    CopyInterface,
    CopyJavascript: CopyJsx,
    CopyTypescript: CopyTsx,
    CopySvg,
    DownloadSvg,
    DownloadJsx,
    DownloadTsx,
    DownloadImage,
    DownloadZip,
  };
};

export default useAction;

const setAdditionalAttributes = (
  element: HTMLElement,
  options: DownloadOptions
) => {
  let { color } = options;
  let attributes = Array.from(new Set(element.attributes));
  for (let att of attributes) {
    const attName = att.nodeName;
    const attValue = att.nodeValue;
    let defaultAtt = {
      fill: color,
      height: "100%",
      width: "100%",
    };
    if (typeof color === 'undefined') return
    switch (attName) {
      case "fill":
        element.setAttribute("fill", color);
        break;
      case "stroke":
        element.setAttribute("stroke", color);
      case "width":
        element.setAttribute(attName, "100%");
        break;
      case "height":
        element.setAttribute(attName, "100%");
        break;
      default:
        element.removeAttribute(attName);
        setAttributes(element, { [attName]: attValue });
        setAttributes(element, defaultAtt);
        break;
    }
  }
};

/**\
 *    let colors = {
        fill: color,
        // stroke: color,
      };
    setAttributes(svg, colors);
 */

const readyForZIP = async (iconPath: BlobPart, canvas: HTMLCanvasElement) => {
  try {
    const svgBlob = await blobMaker([iconPath], { type: Mime.typeSvg });
    console.debug(`#1 SVG Blob Generated`);
    const jsxBlob = await blobMaker([iconPath], { type: Mime.typeJsx });
    console.debug(`#2 JSX Blob Generated`);
    const tsxBlob = await blobMaker([iconPath], { type: Mime.typeTsx });
    console.debug(`#3 TSX Blob Generated`);
    const imagePngBlob = await blobMaker([canvas.toDataURL("image/png")], {
      type: Mime.typeTsx,
    });
    console.debug(`#3 PNG Image Blob Generated`);
    const imageJpegBlob = await blobMaker([canvas.toDataURL("image/jpg")], {
      type: Mime.typeTsx,
    });
    console.debug(`#3 JPEG Image Blob Generated`);
    const imageWebpBlob = await blobMaker([canvas.toDataURL("image/webp")], {
      type: Mime.typeTsx,
    });
    console.debug(`#3 WEBP Image Blob Generated`);
    const blobArr = [
      svgBlob,
      jsxBlob,
      tsxBlob,
      imagePngBlob,
      imageJpegBlob,
      imageWebpBlob,
    ];
    console.debug(`#4 Blob Array Generated`);
    let zipBlob = await blobMaker(blobArr, { type: Mime.typeZip });
    return Promise.resolve(zipBlob);
  } catch (error) {
    console.log(error);
  }
};
