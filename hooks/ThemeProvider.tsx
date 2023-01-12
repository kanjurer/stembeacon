import { createContext } from "react";

type ThemeType = "dark" | "light";

export interface IThemeContext {
    theme: ThemeType;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);
