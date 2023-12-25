import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import * as S from "./styles";

const { Dragger } = Upload;

export const Step1 = () => {
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <S.Section>
      <S.Description>
        Faça o upload do video. A gravação precisa ter a visão de boa parte da
        turma.
      </S.Description>

      <S.UploadWrapper>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Clique ou arraste o arquivo até aqui
          </p>
          <p className="ant-upload-hint">
            O arquivo precisa ser no formato de vídeo. Faça o upload de um
            arquivo por vez.
          </p>
        </Dragger>
      </S.UploadWrapper>
    </S.Section>
  );
};
