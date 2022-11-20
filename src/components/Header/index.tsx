import { Logo } from "../Logo";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo widthImage={80} orientation={"portrait"} />
    </Container>
  );
}
