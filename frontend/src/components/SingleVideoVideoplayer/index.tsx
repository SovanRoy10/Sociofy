import React from "react";
import { Img, Text } from "./..";

interface Props {
  className?: string;
  time?: string;
  time1?: string;
}

export default function SingleVideoVideoplayer({ time = "01:23", time1 = "05:46", ...props }: Props) {
  return (
    <div {...props}>
      <div className="h-[360px] w-full relative">
        <Img
          src="images/img_video_background.png"
          alt="video_one"
          className="justify-center h-[360px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
        />
        <div className="flex flex-row justify-center w-[94%] bottom-[6%] right-0 left-0 m-auto absolute">
          <div className="flex flex-col items-center justify-start w-full gap-[18px]">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row justify-between w-full">
                  <Text size="xs" as="p" className="!text-white-A700">
                    {time}
                  </Text>
                  <Text size="xs" as="p" className="!text-white-A700 text-right">
                    {time1}
                  </Text>
                </div>
                <div className="h-1 w-full mt-1.5 bg-white-A700_33 rounded-sm" />
                <div className="h-1 w-3/5 mt-[-4px] bg-white-A700_cc relative rounded-sm">
                  <div style={{ width: "88%" }} className="h-full bg-light_blue-200 absolute rounded-sm" />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-center items-center w-[16%]">
                <Img src="images/img_icon_pause.svg" alt="iconpause_one" className="h-[18px] w-[18px]" />
                <Img src="images/img_icon_volume.svg" alt="iconvolume_one" className="h-[18px] w-[18px] ml-[18px]" />
                <div className="h-1 w-[33%] ml-2 bg-white-A700_33 relative rounded-sm">
                  <div style={{ width: "67%" }} className="h-full bg-white-A700 absolute rounded-sm" />
                </div>
              </div>
              <div className="flex flex-row justify-start gap-[18px]">
                <Img src="images/img_icon_settings.svg" alt="iconsettings" className="h-[18px] w-[18px]" />
                <Img src="images/img_icon_fullscreen.svg" alt="iconfullscreen" className="h-[18px] w-[18px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
