import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 24px 0;

  button {
    margin: 8px 0 24px;
  }
`;

export const Section = styled.div`
  background: #fafafa;
  width: 90%;

  padding: 64px 24px;
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

  max-width: 80%;

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
