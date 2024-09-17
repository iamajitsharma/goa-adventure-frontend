"use client";
import React from "react";
import { useZohoChat, ZohoChat } from "zoho-chat";
import { RiChatSmile3Fill } from "react-icons/ri";
import { Button } from "components/UI/Button";
import { FiMessageCircle } from "react-icons/fi";

interface ZohoLiveProps {
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
          url="https://salesiq.zohopublic.in/widget"
          widgetCode="siq9075fbd094059a202172b5057bbb7fc2aaf1dba0a90af0e9f4aa284f6140d94d"
          visible={"show"}
          onlineIcon={onlineIcon}
          language={language}
          position={"bottomright"}
        />
      </div>

      {/* {ready && (
        <Button
          onClick={click}
          className="w-14 h-14 rounded-full bg-orange-500 text-white"
        >
          <FiMessageCircle size={18} />
        </Button>
      )} */}
    </>
  );
};

export default ZohoLiveChat;
