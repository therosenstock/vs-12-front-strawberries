import {HeaderContainer, HeaderLogo} from "./styles.ts";
import logo from '../../assets/svg/logo-no-background.svg'
import {Spacer} from "../Spacer";

export const Header = () => {
  return <HeaderContainer>
    <Spacer />
    <HeaderLogo src={logo} />
    <Spacer />
  </HeaderContainer>
}