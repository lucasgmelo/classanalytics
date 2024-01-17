import Box from "components/Box";
import * as S from "./styles";
import { Steps as AntdSteps, Button } from "antd";
import {
  CloudUploadOutlined,
  SmileOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Fragment, useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { useRouter } from "next/router";

export const Steps = () => {
  // const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);

  const onChangeStep = (value: number) => {
    if (currentStep > value) setCurrentStep(value);
  };

  return (
    <S.Wrapper>
      <Box>
        <AntdSteps
          current={currentStep}
          onChange={onChangeStep}
          items={[
            {
              title: "Upload",
              icon: <CloudUploadOutlined />,
            },
            {
              title: "Dados",
              icon: <SolutionOutlined />,
            },
            {
              title: "Finalização",
              icon: <SmileOutlined />,
            },
          ]}
        />
        {currentStep === 0 && (
          <Fragment>
            <Step1 />
            <Button size="large" block onClick={() => setCurrentStep(1)}>
              Prosseguir
            </Button>
          </Fragment>
        )}
        {currentStep === 1 && (
          <Fragment>
            <Step2 />
            <Button size="large" block onClick={() => setCurrentStep(2)}>
              Prosseguir
            </Button>
          </Fragment>
        )}
        {currentStep === 2 && (
          <Fragment>
            <Step3 />
            <Button
              size="large"
              block
              // onClick={() => router.push("/sucesso")}
            >
              Finalizar
            </Button>
          </Fragment>
        )}
      </Box>
    </S.Wrapper>
  );
};
