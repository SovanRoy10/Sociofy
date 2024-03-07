import React from "react";
import { Helmet } from "react-helmet";
import { Input, Img } from "../../components";
import DirectMessageMessage07 from "../../components/DirectMessageMessage07";
import DirectMessageMessage08 from "../../components/DirectMessageMessage08";
import VideoFullScreenModaldesktop from "../../components/VideoFullScreenModaldesktop";

export default function VideoChatPage() {
  return (
    <>
      <Helmet>
        <title>Rupal's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-row justify-start w-full gap-[5px]">
          <div className="flex flex-col items-center justify-start w-[12%] p-[45px]">
            <Img
              src="images/img_standard_collection_white_a700.svg"
              alt="standard_one"
              className="h-12 w-12 mb-[886px]"
            />
          </div>
          <div className="flex flex-row justify-start w-[89%]">
            <div className="flex flex-row justify-start w-full">
              <VideoFullScreenModaldesktop
                modalOne="images/img_modal_background_1024x900.png"
                className="flex flex-col items-center justify-start w-[73%]"
              />
              <div className="flex flex-col items-center justify-start w-[34%] ml-[-75px]">
                <div className="flex flex-col items-start justify-start w-full gap-[55px] p-10 rounded-tl-[32px] rounded-bl-[32px] bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[85%] mt-[231px] ml-2.5 gap-[37px]">
                    <DirectMessageMessage07 className="flex flex-row justify-start pb-[9px]" />
                    <div className="flex flex-col w-[84%] gap-10">
                      <DirectMessageMessage08 className="flex flex-row justify-start w-full pb-[3px] gap-[15px]" />
                      <DirectMessageMessage08
                        avatarSeven="images/img_avatar_48x48.png"
                        className="flex flex-row justify-start w-full pb-[3px] gap-[15px]"
                      />
                    </div>
                    <DirectMessageMessage07
                      avatarFive="images/img_avatar.png"
                      className="flex flex-row justify-start pb-[9px]"
                    />
                    <DirectMessageMessage08
                      avatarSeven="images/img_avatar_48x48.png"
                      className="flex flex-row justify-start pb-[3px] gap-[15px]"
                    />
                    <div className="flex flex-row justify-start items-center w-[29%]">
                      <Img
                        src="images/img_avatar.png"
                        alt="avatar_seven"
                        className="w-[38px] object-cover rounded-[12px]"
                      />
                      <div className="h-[7px] w-[7px] ml-[15px] bg-gray-500_cc rounded-[3px]" />
                      <div className="h-[7px] w-[7px] ml-[5px] bg-gray-500_99 rounded-[3px]" />
                      <div className="h-[7px] w-[7px] ml-[5px] bg-gray-500_33 rounded-[3px]" />
                    </div>
                  </div>
                  <Input
                    color="gray_100"
                    size="xl"
                    name="iconplus"
                    placeholder="Start typing…"
                    prefix={
                      <div className="flex justify-center items-center w-[38px] h-[38px] bg-gray-500_33 rounded-[50%]">
                        <Img src="images/img_plus.svg" alt="Icon/Plus" />
                      </div>
                    }
                    suffix={<Img src="images/img_icon_emoji.svg" alt="Icon/Emoji" />}
                    className="w-[98%] ml-2.5 gap-2.5 rounded-[12px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
