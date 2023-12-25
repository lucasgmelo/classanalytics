import { Form, Input } from "antd";
import * as S from "./styles";

export const Step2 = () => {
  return (
    <S.Section>
      <S.Description>
        Identifique corretamente seu vídeo após o processamento
      </S.Description>

      <Form layout="vertical">
        <Form.Item label="Nome" required>
          <Input placeholder="Insira o nome do vídeo" />
        </Form.Item>
        <Form.Item label="Descrição" required>
          <Input placeholder="Insira a descrição do vídeo" />
        </Form.Item>
      </Form>
    </S.Section>
  );
};
