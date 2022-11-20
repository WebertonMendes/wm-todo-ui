import styled from "styled-components";

interface StylesProps {
  finished?: boolean;
  category?: number;
  attachment?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 4rem;

  hr {
    width: 50vw;
    border-top: 1px dotted var(--gray-300);
    margin-top: 0.5rem;

    @media (max-width: 1080px) {
      width: 60vw;
    }

    @media (max-width: 720px) {
      width: 80vw;
    }
  }

  .error-msg {
    font-size: 0.8rem;
    color: var(--red-300);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  width: 50vw;
  margin-bottom: 2rem;
  margin-top: -1.5rem;

  input {
    width: 100%;
    height: 3rem;
    padding: 0 0 0 1.2rem;
    border-radius: 0.4rem;
  }

  @media (max-width: 1080px) {
    width: 60vw;
  }

  @media (max-width: 720px) {
    width: 80vw;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;

  background-color: var(--blue-300);
  border-radius: .4rem;
  padding: .9rem;
  color: var(--shape);

  transition: background-color .4s;

  &:hover {
    background-color: var(--blue-500);
  }
`;

export const Counters = styled.div`
  display: flex;
  justify-content: space-between;

  width: 50vw;
  padding: 0 0.5rem 0.6rem;

  .resumeTasks {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .sortIcon {
    display: flex;
    align-items: center;

    color: var(--gray-400);
    font-size: 32px;

    transition: 0.4s;

    &:hover {
      color: var(--text-body);
      cursor: pointer;
    }
  }

  @media (max-width: 1080px) {
    width: 60vw;
  }

  @media (max-width: 720px) {
    width: 80vw;
  }
`;

export const Count = styled.div<StylesProps>`
  display: flex;
  gap: 0.4rem;

  p {
    font-weight: bold;

    ${({ finished }) =>
      finished
      ? `color: var(--blue-300);`
      : `color: var(--blue-900);`
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    padding: 0.6rem;
    color: var(--shape);

    ${({ finished }) =>
      finished
      ? `background-color: var(--blue-300);`
      : `background-color: var(--blue-900);`
    }
  }
`;

export const List = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  width: 50vw;

  @media (max-width: 1080px) {
    width: 60vw;
  }

  @media (max-width: 720px) {
    width: 80vw;
  }
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 2rem;
  margin-top: 2rem;

  span {
    font-weight: bold;
    margin-top: 0.8rem;
    color: var(--gray-500);
  }

  p {
    color: var(--gray-400);
  }
`;

export const Item = styled.div<StylesProps>`
  display: flex;
  align-items: center;
  position: relative;

  width: 100%;
  border-radius: 0.4rem;
  padding: 1rem;
  gap: 0.8rem;

  .checked {
    display: flex;
    align-items: center;

    color: var(--blue-300);
    font-size: 22px;

    &:hover {
      color: var(--blue-900);
      cursor: pointer;
    }
  }

  .no-checked {
    display: flex;
    align-items: center;

    color: var(--blue-900);
    font-size: 22px;

    &:hover {
      color: var(--blue-300);
      cursor: pointer;
    }
  }

  ${({ category }) =>
    category === 1
      ? `background-color: var(--green-100);`
      : category === 2
      ? `background-color: var(--orange-100);`
      : category === 3
      ? `background-color: var(--red-100);`
      : `background: var(--gray-200);`
  }
`;

export const TextThrough = styled.p`
  width: 100%;
  text-decoration: line-through;
  color: var(--blue-300);
`;

export const Categories = styled.div`
  position: absolute;
  right: -3.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;

  .high,
  .average,
  .low {
    font-size: 0.8rem;
    width: 100%;
    padding: 0 0.6rem;
    border-radius: 0 6px 6px 0;
  }

  button.high {
    background-color: var(--red-300);
    transition: background-color 0.4s;

    &:hover {
      background-color: var(--red-500);
    }
  }

  .average {
    background-color: var(--orange-300);
    transition: background-color 0.4s;

    &:hover {
      background-color: var(--orange-500);
    }
  }

  .low {
    background-color: var(--green-300);
    transition: background-color 0.4s;

    &:hover {
      background-color: var(--green-500);
    }
  }
`;

export const Actions = styled.div<StylesProps>`
  display: flex;
  align-items: center;

  .attachmentIcon,
  .categoryIcon,
  .trashIcon {
    display: flex;
    align-items: center;
    font-size: 22px;
    color: var(--gray-400);
    transition: color 0.4s;
  }

  .attachmentIcon {
    label, a {
      display: flex;
      align-items: center;
      color: var(--gray-400);
      text-decoration: none;

      &:hover {
        color: var(--blue-900);
        cursor: pointer;
      }
    }

    ${({ attachment }) =>
      attachment &&
        `background-color: var(--blue-100);
         padding: .2rem;
         border-radius: 50%;
        `
    }
  }

  .categoryIcon {
    &:hover {
      color: var(--green-500);
      cursor: pointer;
    }
  }

  .trashIcon {
    &:hover {
      color: var(--red-500);
      cursor: pointer;
    }
  }
`;

export const TextNoThrough = styled.p`
  width: 100%;
  color: var(--blue-900);
`;

export const Logout = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  padding: 0.2rem;
  border-radius: 50%;

  transition: 0.4s;

  &:hover {
    background-color: var(--gray-300);
    cursor: pointer;
  }
`;
