import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
`

export const HeroImage = styled.img`
  flex: 1;
  max-height: 100vh;
  object-fit: cover;
  border-radius: 8px;
`

export const HeroSection = styled.section`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5% 10%;
`;

export const HeroTitle = styled.h1`
  color: #ED3D38;
  font-size: 5rem;
  margin-bottom: 2rem;
`;

export const HeroText = styled.p`
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
`;