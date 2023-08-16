import styled from "styled-components";

export const SwitchContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & > label {
    aspect-ratio: 16/8;
    border-radius: 18px;
    width: 80px;
    height: 30px;
    padding: 0.4rem;
    background-color: #8b8b8b;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  & input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    background-color: #555;
    border-radius: 50%;

    height: 20px;
    width: 20px;

    background: #fff;
    border-radius: 50%;

    transition: all 0.2s ease;
    cursor: pointer;
  }

  & input[type="checkbox"]:checked {
    transform: translateX(calc(90px - 30px - 12.8px));
  }
`;