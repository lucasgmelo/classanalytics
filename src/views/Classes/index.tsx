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
    // {
    //   title: " ",
    //   dataIndex: "action",
    //   key: "action",
    //   render: (id: string) => (
    //     <Link href={`/aulas/${id}`} className="link">
    //       Baixar relatório
    //     </Link>
    //   ),
    // },
  ];

  const fakeData: ResumedDataType[] = [
    {
      key: "1",
      name: "Aula 1",
      date: "12/03/24",
      duration: 247,
      status: "available",
      action: "123",
    },
    {
      key: "2",
      name: "Aula 2",
      date: "12/03/24",
      duration: 807,
      status: "available",
      action: "123",
    },
  ];

  return (
    <S.Wrapper>
      <S.Section>
        <S.Title>Análises geradas</S.Title>
        <p>Todas as geradas pelo classanalytics</p>
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
