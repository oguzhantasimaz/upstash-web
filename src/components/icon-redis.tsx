import React, { SVGProps } from "react";

import colors from "tailwindcss/colors";

export default function IconRedis({ ...props }: SVGProps<SVGSVGElement>) {
  const bg = colors.red["700"];
  const fg = colors.red["200"];

  return (
    <svg
      width={36}
      viewBox="0 0 360 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Upstash Redis"
      {...props}
    >
      <rect width="360" height="360" rx="80" fill={bg} />
      <path
        d="M248.101 54.3602C251.818 47.1091 262.182 47.1091 265.899 54.3603L310.536 141.438C313.947 148.093 309.114 156 301.637 156H212.363C204.886 156 200.053 148.093 203.464 141.438L248.101 54.3602Z"
        fill={colors.red["200"]}
      />
      <circle cx="103.5" cy="103.5" r="54.5" fill={fg} />
      <rect x="53" y="206" width="100" height="101" rx="16" fill={fg} />
      <path
        d="M248.501 204.493C253.519 200.659 260.481 200.659 265.499 204.493L305.24 234.852C309.902 238.414 311.849 244.505 310.117 250.11L294.659 300.133C292.846 306 287.423 310 281.283 310H232.717C226.577 310 221.154 306 219.341 300.133L203.883 250.11C202.151 244.505 204.098 238.414 208.76 234.852L248.501 204.493Z"
        fill={fg}
      />
    </svg>
  );
}
