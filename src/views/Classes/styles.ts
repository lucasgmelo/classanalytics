import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-bottom: 32px;
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

  .ant-table-cell {
    cursor: pointer;
  }

  .link {
    color: rgba(53, 0, 91, 0.7);

    &:hover {
      color: rgba(53, 0, 91, 0.5);
      opacity: 0.95;
    }
  }
`;

export const Title = styled.h1<{ primary?: boolean }>`
  font-size: 1.4rem;
  color: rgba(53, 0, 91, 1);
  margin-bottom: 8px;

  font-weight: 500;
`;
