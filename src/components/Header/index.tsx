import { HeaderContainer, HeaderLogo } from "./styles.ts";
import logo from "../../assets/svg/logo-no-background.svg";
import lightlogo from "../../assets/svg/logo-no-background-white.svg";
import { Spacer } from "../Spacer";
import { Switch } from "../Switch/index.tsx";

export type HeaderPros = {
  theme?: "light" | "dark";
  onThemeChange?: (theme: "light" | "dark") => void;
};

export const Header = ({ theme = "light", onThemeChange }: HeaderPros) => {
  function switchTheme() {
    if (theme === "light") {
      onThemeChange?.("dark");
    } else {
      onThemeChange?.("light");
    }
  }

  return (
    <HeaderContainer data-testid="header">
      <Spacer />
      <HeaderLogo src={theme == "light" ? logo : lightlogo} />
      <Spacer />
      <Switch onToggleTheme={switchTheme} />
    </HeaderContainer>
  );
};
