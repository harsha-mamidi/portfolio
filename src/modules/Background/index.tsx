import { StyledBackground } from "./styles";

const items = 20;

export default function Background() {
  return (
    <StyledBackground items={items}>
      {Array.from({ length: items }, (_, i) => (
        <div className="bg-element" key={i} />
      ))}
    </StyledBackground>
  );
}
