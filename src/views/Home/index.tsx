import { Button } from "antd";
import * as S from "./styles";
import Link from "next/link";

export const Home = () => (
  <S.Wrapper>
    <S.Section>
      <S.Title>Bem vindo ao</S.Title>
      <S.Title primary>ClassAnalytics</S.Title>

      <S.Texts>
        <p>
          Somos uma ferramenta que auxilia docentes a validar métodos de ensino
          e o engajamento em sala de aula.
        </p>
        <p>
          Grave um vídeo de forma que boa parte do rosto dos alunos esteja
          visível que cuidamos de tudo.
        </p>
      </S.Texts>

      <Link href="/criar">
        <Button type="primary" block size="large">
          Criar nova análise
        </Button>
      </Link>
      <Link href="/aulas">
        <Button type="primary" block size="large">
          Ver análise existente
        </Button>
      </Link>
    </S.Section>
  </S.Wrapper>
);
