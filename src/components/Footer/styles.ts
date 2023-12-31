import styled from "styled-components";

export const FooterContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  border-top: 1px solid rgb(200, 200, 200);
  min-height: 100px;
  background-color: ${(({ theme }) => theme.backColor ?? '#fff')};;
`

export const FooterCopyright = styled.span`
  align-self: center;
  color: ${(({theme}) => theme.primaryColor ?? '#000')};

`

export const FooterLinks = styled.div`
  display: flex;
  align-self: center;
  gap: 1rem;
`

export const FooterLink = styled.a`
  all: unset;
  color: ${(({theme}) => theme.primaryColor ?? '#000')};
  display: flex;
  align-items: center;
  gap: .5rem;
  cursor: pointer;
  transition: 200ms ease-in-out;
  
  &:hover {
    color: #ED3D38;  
  }
`
