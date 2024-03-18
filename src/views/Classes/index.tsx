import { Table, Tag } from "antd";
import { formatTagText, formatTime, renderTagColor } from "utils/functions";
import * as S from "./styles";
import Link from "next/link";
import { ResumedDataType } from "types/interfaces";
import { useRouter } from "next/navigation";

export const Classes = () => {
  const router = useRouter();

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Data",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Duração",
      dataIndex: "duration",
      key: "duration",
      render: (duration: number) => formatTime(duration),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (tag: string) => (
        <Tag color={renderTagColor(tag)} key={tag}>
          {formatTagText(tag)}
        </Tag>
      ),
    },
    {
      title: " ",
      dataIndex: "action",
      key: "action",
      render: (id: string) => (
        <Link href={`/aulas/${id}`} className="link">
          Baixar relatório
        </Link>
      ),
    },
  ];

  const fakeData: ResumedDataType[] = [
    {
      key: "Aula 1",
      name: "Aula 1",
      date: "12/10/23",
      duration: 3090,
      status: "loading",
      action: "123",
    },
    {
      key: "Aula 2",
      name: "Aula 2",
      date: "12/10/23",
      duration: 3090,
      status: "available",
      action: "123",
    },
    {
      key: "Aula 3",
      name: "Aula 3",
      date: "12/10/23",
      duration: 3090,
      status: "error",
      action: "123",
    },
    {
      key: "Aula 4",
      name: "Aula 4",
      date: "12/10/23",
      duration: 3090,
      status: "available",
      action: "123",
    },
    {
      key: "Aula 5",
      name: "Aula 5",
      date: "12/10/23",
      duration: 3090,
      status: "available",
      action: "123",
    },
  ];

  return (
    <S.Wrapper>
      <S.Section>
        <S.Title>Análises geradas</S.Title>
        <p>Descrição legal?</p>
        <Table
          columns={columns}
          dataSource={fakeData}
          onRow={(record) => {
            return {
              onClick: () => router.push(`/${record.key}`),
            };
          }}
        />
      </S.Section>
    </S.Wrapper>
  );
};
