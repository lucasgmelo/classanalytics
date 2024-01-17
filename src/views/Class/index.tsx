import { DownloadOutlined } from "@ant-design/icons";
import { Emoji } from "@styled-icons/fluentui-system-regular";
import { Breadcrumb, Button, Tooltip } from "antd";
import Link from "next/link";
import {
  CartesianGrid,
  Tooltip as ChartTooltip,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { CompleteDataType } from "types/interfaces";
import * as S from "./styles";
import ReactPlayer from "react-player";

export const Class = () => {
  // const router = useRouter();

  const data: CompleteDataType = {
    name: "Aula 1",
    description: "Bioquímica aplicada",
    date: "12/03/2024",
    duration: 3090,
    status: "available",
    action: "123",
    insights: {
      text: "O nível de engajamento foi baixo durante os 10 primeiros minutos.",
      emotion: "Satisfação",
    },
    highlights: [
      {
        line: "[00:19:40-00:20:13] Transcrição da fala no momento ",
        emotion: "As emoções de Anseio aumentaram",
        meaning: "Anseio é ...",
      },
    ],
    engaging: [
      "Nos primeiros 60 minutos o nível de engajamento foi baixo",
      "O nível de engajamento dobrou no tempo [105:30:14] Transcrição da fala no momento",
    ],
  };

  const chartData = [
    { time: "10min", level: 4000 },
    { time: "20min", level: 3000 },
    { time: "30min", level: 2000 },
    { time: "40min", level: 2500 },
    { time: "50min", level: 1890 },
    { time: "60min", level: 1500 },
    { time: "70min", level: 1000 },
  ];

  return (
    <S.Wrapper>
      <S.Section>
        <Breadcrumb
          items={[
            {
              title: <Link href="/aulas">Aulas</Link>,
            },
            {
              title: data.name,
            },
          ]}
        />
        <S.Title>
          <h1>{data.name}</h1>

          <Button type="primary" icon={<DownloadOutlined />}>
            Baixar relatório
          </Button>
        </S.Title>
        <p>
          {data.description} | {data.date}
        </p>
        <S.Content>
          <h3>Insights</h3>
          <p>{data.insights.text}</p>
          <p>
            <Emoji size={24} /> {data.insights.emotion}
          </p>
        </S.Content>
        <S.Content>
          <h3>Highlights</h3>
          {data.highlights.map((highlight) => (
            <div key={highlight.line}>
              <p>{highlight.line}</p>
              <Tooltip title={highlight.meaning}>{highlight.emotion}</Tooltip>
            </div>
          ))}
        </S.Content>
        <S.Content>
          <h3>Engajamento</h3>
          {data.engaging.map((engaje) => (
            <p key={engaje}>{engaje}</p>
          ))}
        </S.Content>
        <S.Content>
          <h3>Engajamento no decorrer do tempo</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart
              // width={200}
              height={200}
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <ChartTooltip />
              <Line
                connectNulls
                type="monotone"
                dataKey="level"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        </S.Content>
        <S.Content>
          <h3>Visualização</h3>
          <p>video aqui</p>
        </S.Content>
      </S.Section>
    </S.Wrapper>
  );
};
