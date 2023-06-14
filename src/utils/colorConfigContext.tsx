import { createContext, useState, useEffect, ReactNode, CSSProperties } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_COLORS_CONFIG } from "./queries";

export const ColorContext = createContext<ColorConfigContextType | undefined>(
  undefined
);

type ColorConfig = {
  "--primary": string;
  "--primaryLight": string;
  "--primaryDark": string;
  "--secondary": string;
  "--secondaryLight": string;
  "--secondaryDark": string;
  "--background": string;
  "--white": string;
  "--black": string;
  "--grey": string;
  "--lightGrey": string;
  "--darkGrey": string;
  "--transparent": string;
};

type ColorConfigContextType = {
  colors: ColorConfig | null;
};

interface P {
  children: ReactNode;
}

const ColorProvider = ({ children }: P) => {
  const { loading, error, data } = useQuery(GET_COLORS_CONFIG);
  const [colors, setColors] = useState<ColorConfig | null>(null);

  const finalData = data?.colorsConfig?.data?.attributes;

  useEffect(() => {
    if (data && !loading && !error) {
      setColors({
        "--primary": finalData.primary,
        "--primaryLight": finalData.primaryLight,
        "--primaryDark": finalData.primaryDark,
        "--secondary": finalData.secondary,
        "--secondaryLight": finalData.secondaryLight,
        "--secondaryDark": finalData.secondaryDark,
        "--background": finalData.background,
        "--white": finalData.white,
        "--black": finalData.black,
        "--grey": finalData.grey,
        "--lightGrey": finalData.lightGrey,
        "--darkGrey": finalData.darkGrey,
        "--transparent": finalData.transparent,
      });
    }
  }, [data, loading, error]);

  return (
    <ColorContext.Provider value={{ colors }}>
      <div style={colors ? (colors as CSSProperties) : {}}>
        {children}
      </div>
    </ColorContext.Provider>
  );
};

export default ColorProvider;
