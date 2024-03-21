import React from "react";
import { useZohoChat, ZohoChat } from "zoho-chat";
import { RiChatSmile3Fill } from "react-icons/ri";

interface ZohoLiveProps {
  widgetCode: string;
  url: string;
  onlineIcon?: string;
  offlineIcon?: string;
  language?: Languages;
  position?:
    | "topright"
    | "topleft"
    | "bottomright"
    | "bottomleft"
    | "right"
    | "left";
  visible?: "hide" | "show" | number;
}

type Languages = "en";

const ZohoLiveChat: React.FC<ZohoLiveProps> = ({
  url,
  widgetCode,
  onlineIcon,
  offlineIcon,
  language,
  position,
  visible,
}) => {
  const { click, ready } = useZohoChat();

  return (
    <>
      <div className="z-50">
        <ZohoChat
          url={url}
          widgetCode={widgetCode}
          visible={visible}
          onlineIcon={onlineIcon}
          language={language}
          position={position}
        />
      </div>
    </>
  );
};

export default ZohoLiveChat;
