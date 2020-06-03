import React, { useState } from "react";
import { Input, Button } from "antd";
import { UploadField } from "@navjobs/upload";

import "emoji-mart/css/emoji-mart.css";

import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";

import "./ChatInput.scss";
const ChatInput = props => {
  const [value, setValue] = useState("");
  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Button shape="circle" icon={<SmileOutlined />} />
      </div>

      <Input
        onChange={e => setValue(e.target.value)}
        size="large"
        placeholder="Введите текст сообщения..."
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={files => console.log(files)}
          containerProps={{ className: "chat-input__actions-upload-btn" }}
          uploadProps={{
            accept: ".jpg, .jpeg, .png, .gif",
            multiple: "multiple"
          }}
        >
          <Button shape="circle" icon={<CameraOutlined />} />
        </UploadField>

        {value ? (
          <Button shape="circle" icon={<CheckCircleOutlined />} />
        ) : (
          <Button shape="circle" icon={<AudioOutlined />} />
        )}
      </div>
    </div>
  );
};

export default ChatInput;
