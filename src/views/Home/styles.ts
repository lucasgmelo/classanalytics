import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fafafa;
`;

export const Section = styled.div`
  max-width: 730px;
  width: 80%;

  button {
    margin-top: 16px;
  }
`;

export const Title = styled.h1<{ primary?: boolean }>`
  font-size: 3rem;
  color: ${({ primary }) => (primary ? "#35005B" : "#000")};
`;

export const Texts = styled.div`
  margin-top: 56px;
  margin-bottom: 64px;

  p {
    font-size: 1.5rem;
    margin-bottom: 24px;
    font-weight: 300;
  }
`;
