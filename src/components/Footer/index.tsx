import {
  FooterContainer,
  FooterCopyright,
  FooterLink,
  FooterLinks,
} from "./styles.ts";
import { Spacer } from "../Spacer";
import { GithubIcon, LinkedinIcon } from "../Icons";

export const Footer = () => {
  return (
    <FooterContainer data-testid="footer">
      <FooterLinks>
        <FooterLink href={"#linkedin"}>
          <LinkedinIcon /> Linkedin
        </FooterLink>
        <FooterLink href={"#github"}>
          <GithubIcon /> GitHub
        </FooterLink>
      </FooterLinks>
      <Spacer />
      <FooterCopyright>Straberry &copy; 2023</FooterCopyright>
    </FooterContainer>
  );
};
