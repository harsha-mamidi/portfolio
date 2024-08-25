import styled, { css, keyframes } from "styled-components";

const { random } = Math;

const animate = (i: number) => keyframes`

  25% {
    transform: rotate(${random() * 40}deg) scale(${0.3 + i * 0.1}) 
    translateY(${random() * 50}vh) translateX(${random() * 50}vw);
    opacity: ${random()};
  }


  50% {
    transform: rotate(${random() * -3}rad) scale(${0.3 + i * 0.1}) 
    translateY(${random() * 20}vh) translateX(${random() * 20}vw);

    opacity: 1;
  }

  75% {
    transform: rotate(${random() * 2}rad) scale(${0.2 + i * 0.1}) 
    translateY(${random() * 30}vh) translateX(${random() * 30}vw);

    opacity: ${random()};
  }

`;

export const StyledBackground = styled.div<{ items: number }>`
  height: 100%;
  width: 100%;
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
          background: #00fff7;
          opacity: 0.75;
          border-radius: 50%;

          height: ${random() * 40}vw;
          max-height: ${random() * 40}vh;
          aspect-ratio: 1;
          border-radius: 50%;

          left: ${random() * 100}vw;
          top: ${random() * 100}vh;

          animation-name: ${animate(i + 1)};
          animation-duration: ${i + 1 * 20}s;
          animation-delay: ${random() * i * 1.5}s;
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
