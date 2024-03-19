"use client";
import { DownloadOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Emoji, EmojiSad } from "@styled-icons/fluentui-system-regular";
import {
  Tooltip as AntdTooltip,
  Breadcrumb,
  Button,
  CollapseProps,
} from "antd";
import Link from "next/link";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Lecture } from "types/interfaces";
import * as S from "./styles";

import { default as curto } from "data/curto_outAA.json";
import { default as longo } from "data/longo_outAA.json";
import { formatDate, formatTime } from "utils/functions";
import { useState } from "react";
import { useParams } from "next/navigation";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const Class = () => {
  const { id } = useParams();
  const long_data: Lecture = longo;
  const short_data: Lecture = curto;

  const [data, setData] = useState(() => {
    console.log(id);
    if (id === "1") return long_data;
    return short_data;
  });
  // const data = {
  //   '1': long_data,
  //   '2': short_data,
  // }

  // const getData = (id: string | string[]) => {
  //   if (id === "1") return short_data;
  //   return long_data;
  // };

  const formatChartData = (data: Array<number>) => {
    return data.map((item, second) => {
      return {
        time: formatTime(second),
        "Porcentagem de pessoas olhando": (item * 100).toFixed(2),
      };
    });
  };

  const positiveCollapseItems: CollapseProps["items"] =
    data.data.positive_highlight_segments.map((item) => {
      return {
        key: item.start_second,
        label: `${formatTime(
          Number(item.start_second.toFixed(2))
        )} - ${formatTime(Number(item.end_second.toFixed(2)))}`,
        children: <S.Transcription>{item.text}</S.Transcription>,
      };
    });

  const negativeCollapseItems: CollapseProps["items"] =
    data.data.negative_highlight_segments.map((item) => {
      return {
        key: item.start_second,
        label: `${formatTime(
          Number(item.start_second.toFixed(2))
        )} - ${formatTime(Number(item.end_second.toFixed(2)))}`,
        children: <S.Transcription>{item.text}</S.Transcription>,
      };
    });

  return (
    <S.Wrapper>
      <S.Section>
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Aulas</Link>,
            },
            {
              title: data.name,
            },
          ]}
        />
        <S.Title>
          <h1>{data.name}</h1>

          {/* <Button type="primary" icon={<DownloadOutlined />}>
            Baixar relatório
          </Button> */}
        </S.Title>
        <p>
          {data.description} | {formatDate(data.date)}
        </p>
        <S.Content>
          <h3>Dados gerais de engajamento</h3>
          <S.Helper>
            O algoritmo usado para medir engajamento é calculado a partir da
            quantidade de pessoas olhando para o foco.
          </S.Helper>

          <S.Engagement>
            <div>
              <h3>
                Média{" "}
                <AntdTooltip title="Média do número de pessoas que prestaram atenção à aula">
                  <QuestionCircleOutlined />
                </AntdTooltip>
              </h3>
              <p className="big_number">
                {(data.data.media_geral * 100).toFixed(2)}%
              </p>
            </div>
            {/* <div>
              <h3>
                Valor mais alto{" "}
                <AntdTooltip title="Número máximo de pessoas que prestaram atenção em dado momento">
                  <QuestionCircleOutlined />
                </AntdTooltip>
              </h3>
              <p className="big_number">
                {(data.data.upper_threshold * 100).toFixed(2)}%
              </p>
            </div>
            <div>
              <h3>
                Valor mais baixo{" "}
                <AntdTooltip title="Número mínimo de pessoas que prestaram atenção em dado momento">
                  <QuestionCircleOutlined />
                </AntdTooltip>
              </h3>
              <p className="big_number">
                {(data.data.lower_threshold * 100).toFixed(2)}%
              </p>
            </div> */}
          </S.Engagement>
        </S.Content>
        <S.Content>
          <h3>
            <Emoji size={24} /> Destaques positivos
          </h3>
          <S.Helper>
            Esses momentos da aula apresentaram mais engajamento do que o
            normal, confira o que estava sendo dito no exato momento.
          </S.Helper>
          <S.CollapseStyled items={positiveCollapseItems} />
          {/* {data.data.positive_highlight_segments.map((item) => (
            <S.Highlight key={String(item)}>
              <span key={item.start_second}>
                {item.start_second.toFixed(2)}s - {item.end_second.toFixed(2)}s
              </span>
              <S.Transcription>{item.text}</S.Transcription>
            </S.Highlight>
          ))} */}
        </S.Content>
        <S.Content>
          <h3>
            <EmojiSad size={24} /> Destaques negativos
          </h3>
          <S.Helper>
            Nesses momentos não foi prestada tanta atenção... Veja qual era o
            assunto e saiba o que melhorar.
          </S.Helper>
          <S.CollapseStyled items={negativeCollapseItems} />

          {/* {data.data.negative_highlight_segments.map((item) => (
            <S.Highlight key={String(item)}>
              <span key={item.start_second}>
                {item.start_second.toFixed(2)}s - {item.end_second.toFixed(2)}s
              </span>
              <S.Transcription>{item.text}</S.Transcription>
            </S.Highlight>
          ))} */}
        </S.Content>
        <S.Content>
          <h3>Engajamento x segundo</h3>
          <S.Helper>
            Gráfico de evolução da porcentagem de pessoas olhando a cada segundo
          </S.Helper>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              width={500}
              height={400}
              data={formatChartData(data.data.percentage_looking_seconds)}
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
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Porcentagem de pessoas olhando"
                stroke="#8884d8"
                fill="#8884d8"
                // dot={false}
              />
            </AreaChart>
            {/* <LineChart
              // width={200}
              height={200}
              data={formatChartData(data.data["predictor.looking_per_frame"])}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="time" />
              <YAxis />
              <ChartTooltip />
              <Line
                connectNulls
                type="monotone"
                dataKey="Pessoas olhando"
                stroke="#8884d8"
                dot={false}
              />
            </LineChart> */}
          </ResponsiveContainer>
          <S.Content>
            <h3>Vídeo</h3>
            {data && (
              <ReactPlayer
                url={data.finished_video}
                width="1200px"
                height="600px"
              />
            )}
          </S.Content>
        </S.Content>
      </S.Section>
    </S.Wrapper>
  );
};
