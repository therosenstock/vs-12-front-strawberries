import { useState } from "react";
import { MoonIcon } from "../Icons/Moon";
import { MoonSolidIcon } from "../Icons/MoonSolid";
import { SunIcon } from "../Icons/Sun";
import { SunSolidIcon } from "../Icons/SunSolid";
import { SwitchContainer } from "./styles";

interface SwitchProps {
  onToggleTheme: (isLightTheme: boolean) => void;
}

export const Switch = ({ onToggleTheme }: SwitchProps) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <SwitchContainer className="switch-container">
      {isLightTheme ? (
        <MoonIcon size={32} color={"#000000"} />
      ) : (
        <MoonSolidIcon size={32} color={"#fff"} />
      )}

      <label id="switch-theme" className="toggle-switch" title="troque o tema">
        <input
          id="switch-theme"
          type="checkbox"
          checked={isLightTheme}
          onChange={() => {
            setIsLightTheme((state) => !state);
            onToggleTheme(isLightTheme);
          }}
        />
      </label>
      {isLightTheme ? (
        <SunSolidIcon size={32} color={"#ffc400"} />
      ) : (
        <SunIcon size={32} color={"#ffc400"} />
      )}
    </SwitchContainer>
  );
};
