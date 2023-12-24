"use client";
import styled from "styled-components";
import { Button as AntdButton } from "antd";

const Button = styled(AntdButton)`
  font-size: 24px;
`;

export default function Home() {
  return (
    <main>
      <h1>Boilerplate</h1>
      <Button>Testando</Button>
    </main>
  );
}
