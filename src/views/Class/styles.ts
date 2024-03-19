import { Collapse } from "antd";
import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* padding: 24px 0; */

  height: 100%;

  button {
    margin: 8px 0 24px;
  }
`;

export const Section = styled.div`
  background: #fafafa;
  width: 100%;

  padding: 24px;
  border-radius: 5px;

  .ant-table-wrapper {
    border: 1px solid #eee;
    border-radius: 5px;
  }

  .ant-table-thead tr th {
    background: #eee !important;
  }

  .link {
    color: rgba(53, 0, 91, 0.7);

    &:hover {
      color: rgba(53, 0, 91, 0.5);
      opacity: 0.95;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.8rem;
    color: rgba(53, 0, 91, 1);

    margin-top: 16px;

    font-weight: 600;
  }
`;

export const Content = styled.div`
  margin: 24px 0;

  max-width: 90%;

  .big_number {
    font-size: 1.1rem;
  }

  h3 {
    color: rgba(53, 0, 91, 1);
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
  }

  svg {
    color: rgba(53, 0, 91, 1) !important;
  }
`;

export const Engagement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;

  div {
    h3 {
      font-size: 1.2rem;
    }

    padding: 12px 24px;
    border-radius: 5px;
    background: rgba(53, 0, 91, 0.1);
  }
`;

export const Transcription = styled.div`
  margin-top: 8px;

  font-family: monospace;
  font-size: 1.1rem;

  background: #eee;
  color: #333333;

  padding: 8px;
  border-radius: 5px;
`;

export const Highlight = styled.div`
  margin-bottom: 24px;
`;

export const Helper = styled.p`
  font-size: 1.1rem;
`;

export const CollapseStyled = styled(Collapse)`
  .ant-collapse {
    background: white;
  }
`;
