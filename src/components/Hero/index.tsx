import { Button } from "../Button/index.tsx";
import {
  HeroContainer,
  HeroImage,
  HeroSection,
  HeroText,
  HeroTitle,
} from "./styles.ts";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage
        src={
          "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=920&q=80"
        }
      />
      <HeroSection>
        <HeroTitle>Festa de Flores e Morangos de Atibaia</HeroTitle>
        <HeroText>
          Em setembro, acontece a 41ª Festa de Flores e Morangos de Atibaia. O
          visitante da Festa de Flores e Morangos de Atibaia tem a oportunidade
          de adquirir, tanto as flores, plantas e morangos diretamente dos
          produtores, com produtos frescos e selecionados.
        </HeroText>
        <Button />
      </HeroSection>
    </HeroContainer>
  );
};
