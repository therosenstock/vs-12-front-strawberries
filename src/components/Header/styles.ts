import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: center;
  border-bottom: 1px solid rgb(200, 200, 200);
  box-shadow: -40px 0 20px rgb(200, 200, 200);
  background-color: ${(({ theme }) => theme.backColor ?? '#fff')};
`

export const HeaderLogo = styled.img`
  height: 50px;
`

