import { SVGProps } from "react";

interface SVGTYPE extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

let c = "#aaa";

export const ShapesOutline = (props: SVGTYPE) => {
  const { color = "currentColor", size = "30px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      stroke={color}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polygon
        xmlns="http://www.w3.org/2000/svg"
        points="336 320 32 320 184 48 336 320"
        fill="none"
        stroke="inherit"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M265.32,194.51A144,144,0,1,1,192,320"
        fill="none"
        stroke="inherit"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
    </svg>
  );
};

export const IconClose = (props: SVGTYPE) => {
  const { color = c, size = "20", ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
    >
      <path d="M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z" />
    </svg>
  );
};
export const IconSearch = (props: SVGTYPE) => {
  const { color = c, size = "20", ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
    >
      <path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z" />
    </svg>
  );
};

export const ArrowDownOutline = (props: SVGTYPE) => {
  const { color = "currentColor", size = "30px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      stroke={color}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polyline
        xmlns="http://www.w3.org/2000/svg"
        points="112 268 256 412 400 268"
        fill="none"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48px"
      />
      <line
        xmlns="http://www.w3.org/2000/svg"
        x1="256"
        y1="392"
        x2="256"
        y2="100"
        fill="none"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48px"
      />
    </svg>
  );
};

export const CopyOutline = (props: SVGTYPE) => {
  const { color = "currentColor", size = "30px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      stroke={color}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        xmlns="http://www.w3.org/2000/svg"
        x="128"
        y="128"
        width="336"
        height="336"
        rx="57"
        ry="57"
        fill="none"
        stroke="inherit"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M383.5,128l.5-24a56.16,56.16,0,0,0-56-56H112a64.19,64.19,0,0,0-64,64V328a56.16,56.16,0,0,0,56,56h24"
        fill="none"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
    </svg>
  );
};

export const ImageOutline = (props: SVGTYPE) => {
  const { color = "currentColor", size = "30px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      stroke={color}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        xmlns="http://www.w3.org/2000/svg"
        x="48"
        y="80"
        width="416"
        height="352"
        rx="48"
        ry="48"
        fill="none"
        stroke="inherit"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        cx="336"
        cy="176"
        r="32"
        fill="none"
        stroke="inherit"
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M304,335.79,213.34,245.3A32,32,0,0,0,169.47,244L48,352"
        fill="none"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M224,432,347.34,308.66a32,32,0,0,1,43.11-2L464,368"
        fill="none"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
    </svg>
  );
};

export const ArchiveOutline = (props: SVGTYPE) => {
  const { color = "currentColor", size = "30px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      stroke={color}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M80,152V408a40.12,40.12,0,0,0,40,40H392a40.12,40.12,0,0,0,40-40V152"
        fill="none"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        x="48"
        y="64"
        width="416"
        height="80"
        rx="28"
        ry="28"
        fill="none"
        stroke="inherit"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <polyline
        xmlns="http://www.w3.org/2000/svg"
        points="320 304 256 368 192 304"
        fill="none"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <line
        xmlns="http://www.w3.org/2000/svg"
        x1="256"
        y1="345.89"
        x2="256"
        y2="224"
        fill="none"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
    </svg>
  );
};

export const ChevronBackCircleOutline = (props: SVGTYPE) => {
  const { color = "currentColor", size = "30px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      stroke={color}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z"
        fill="none"
        stroke="undefined"
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
      <polyline
        xmlns="http://www.w3.org/2000/svg"
        points="296 352 200 256 296 160"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
    </svg>
  );
};
export const ChevronForwardCircleOutline = (props: SVGTYPE) => {
  const { color = "currentColor", size = "30px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      stroke={color}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M64,256c0,106,86,192,192,192s192-86,192-192S362,64,256,64,64,150,64,256Z"
        fill="none"
        stroke="undefined"
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
      <polyline
        xmlns="http://www.w3.org/2000/svg"
        points="216 352 312 256 216 160"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
    </svg>
  );
};
