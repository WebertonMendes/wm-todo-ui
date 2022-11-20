import styled from "styled-components";

interface StylesProps {
  widthImage: number;
  orientation: string;
}

export const Container = styled.div<StylesProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  ${({ orientation }) =>
    orientation === "landscape"
    ? `flex-direction: row;`
    : `flex-direction: column;`
  }

  font-family: "Indie Flower", cursive;
  color: var(--blue-500);

  span {
    color: var(--blue-300);
  }

  img {
    width: ${({ widthImage }) => widthImage}px;
  }
`;
