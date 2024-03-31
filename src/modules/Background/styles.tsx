import styled, { css, keyframes } from "styled-components";

const animate = (i: number) => keyframes`
 
  25% {
    transform: rotate(${Math.random() * 40}deg) scale(${
  0.3 + i * 0.1
}) translateY(${Math.random() * 20}vh) translateX(${Math.random() * 20}vw);
    opacity: ${Math.random()};
  }

  50% {
    transform: rotate(${Math.random() * -3}rad) scale(${
  0.3 + i * 0.1
}) translateY(${Math.random() * 20}vh) translateX(${Math.random() * 20}vw);
    opacity: ${Math.random()};
  }

  75% {
    transform: rotate(${Math.random() * 2}rad) scale(${
  0.2 + i * 0.1
}) translateY(${Math.random() * 30}vh) translateX(${Math.random() * 30}vw);
    opacity: ${Math.random()};
  }

`;

export const StyledBackground = styled.div<{ items: number }>`
  z-index: -1;
  position: absolute;
  inset: 0;
  background: black;
  overflow: hidden;

  ${({ items }) =>
    Array.from(
      { length: items },
      (_, i) => css`
        .bg-element:nth-child(n + ${i + 1}) {
          position: absolute;
          background: white;
          opacity: 0.75;

          height: ${Math.random() * 40}vw;
          max-height: ${Math.random() * 40}vh;
          aspect-ratio: 1;
          border-radius: 50%;

          left: ${Math.random() * 100}vw;
          top: ${Math.random() * 100}vh;

          animation-name: ${animate(i + 1)};
          animation-duration: ${i + 1 * 20}s;
          animation-delay: ${Math.random() * i * 1.5}s;
          animation-iteration-count: infinite;
        }
      `
    )}

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 18, 58, 0.8);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    z-index: 1;
  }
`;
