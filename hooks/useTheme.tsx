import { useContext } from "react";
import { IThemeContext, ThemeContext } from "./ThemeProvider";

const useTheme = (): IThemeContext => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) throw Error("Need Theme context");

    return themeContext;
};

export default useTheme;
