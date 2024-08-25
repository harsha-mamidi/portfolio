import { ReactElement } from "react";
import styled from "styled-components";

export const StyledHome = styled.div`
  width: 90%;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 4vh;
  align-items: center;
  padding: 2vh;
`;

const StyledWidget = styled.div`
  width: 400px;
  min-width: 200px;
  height: 35vh;
  background: rgba(0, 255, 247, 0.1);
  border-radius: 2vh;
  border: 0.2vh solid rgba(0, 255, 247, 0.5);

  --perspective: 500px;
  --rotateX: 0;
  --rotateY: 0;
  --angle: 5deg;

  transform: perspective(var(--perspective)) rotateX(var(--rotateX))
    rotateY(var(--rotateY));
  transition: transform 350ms ease;

  .mouse-position-tracker {
    position: absolute;
    inset: 0;
  }

  .mouse-position-tracker > div {
    position: absolute;
    width: calc(100% / 3);
    height: calc(100% / 3);
    z-index: 2;
  }

  &:has(.mouse-position-tracker > div:nth-child(1):hover) {
    --rotateX: var(--angle);
    --rotateY: calc(var(--angle) * -1);
  }

  &:has(.mouse-position-tracker > div:nth-child(2):hover) {
    --rotateX: var(--angle);
  }

  &:has(.mouse-position-tracker > div:nth-child(3):hover) {
    --rotateX: var(--angle);
    --rotateY: var(--angle);
  }

  &:has(.mouse-position-tracker > div:nth-child(4):hover) {
    --rotateY: calc(var(--angle) * -1);
  }

  &:has(.mouse-position-tracker > div:nth-child(6):hover) {
    --rotateY: var(--angle);
  }

  &:has(.mouse-position-tracker > div:nth-child(7):hover) {
    --rotateX: calc(var(--angle) * -1);
    --rotateY: calc(var(--angle) * -1);
  }

  &:has(.mouse-position-tracker > div:nth-child(8):hover) {
    --rotateX: calc(var(--angle) * -1);
  }

  &:has(.mouse-position-tracker > div:nth-child(9):hover) {
    --rotateX: calc(var(--angle) * -1);
    --rotateY: var(--angle);
  }

  .mouse-position-tracker > div:nth-of-type(3n - 2) {
    left: 0;
  }
  .mouse-position-tracker > div:nth-of-type(3n - 1) {
    left: calc(100% / 3);
  }
  .mouse-position-tracker > div:nth-of-type(3n) {
    right: 0;
  }

  .mouse-position-tracker > div:nth-child(n + 1):nth-child(-n + 3) {
    top: 0;
  }

  .mouse-position-tracker > div:nth-child(n + 4):nth-child(-n + 6) {
    top: calc(100% / 3);
  }

  .mouse-position-tracker > div:nth-child(n + 7):nth-child(-n + 9) {
    bottom: 0;
  }
`;

export function Widget({ children }: { children?: ReactElement }) {
  return (
    <StyledWidget>
      {children}

      <div className="mouse-position-tracker">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledWidget>
  );
}
