import logoImg from "../../assets/icon.svg";
import { Container } from "./styles";

interface LogoProps {
  widthImage: number;
  orientation: string;
}

export function Logo({ widthImage, orientation }: LogoProps) {
  return (
    <Container widthImage={widthImage} orientation={orientation}>
      <img src={logoImg} alt="ToDo List" />

      <h1>
        Todo <span>List</span>
      </h1>
    </Container>
  );
}
