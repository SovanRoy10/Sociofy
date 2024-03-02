import React from "react";
import { Img, Text, Heading } from "./..";

interface Props {
  className?: string;
  nameFour?: string;
  time?: string;
  optionsFive?: string;
  copyOne?: string;
  iconcameraOne?: string;
  labelSeven?: string;
  iconheartNine?: string;
  labelEight?: string;
  iconcomment?: string;
  labelNine?: string;
  labelTen?: string;
}

export default function HomeCarddekstop3({
  nameFour = "Dustin Houston",
  time = "5min ago",
  optionsFive = "images/img_icon_eye.svg",
  copyOne = "Whether its a driving tour 😂",
  iconcameraOne = "images/img_icon_camera.svg",
  labelSeven = "17",
  iconheartNine = "images/img_icon_heart_regular.svg",
  labelEight = "326",
  iconcomment = "images/img_icon_comment.svg",
  labelNine = "148",
  labelTen = "Share",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full p-[23px] bg-white-A700 rounded-[12px]">
        <div className="flex flex-col items-center justify-start w-full mt-[7px] mb-3 gap-7 max-w-[297px]">
          <div className="flex flex-col items-start justify-start w-[98%] gap-[31px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-start items-center w-[61%] gap-2.5">
                <Img src="images/img_image_2.png" alt="image_nine" className="w-12 object-cover rounded-[12px]" />
                <div className="flex flex-col items-start justify-start w-[67%] gap-[5px]">
                  <Heading size="s" as="h1">
                    {nameFour}
                  </Heading>
                  <Text size="xs" as="p">
                    {time}
                  </Text>
                </div>
              </div>
              <Img src={optionsFive} alt="options_five" className="h-[38px] w-[38px]" />
            </div>
            <Text as="p">{copyOne}</Text>
          </div>
          <div className="flex flex-row justify-center w-[98%]">
            <div className="flex flex-row justify-start w-full gap-2.5">
              <Img src="images/img_image_160x200.png" alt="image_eleven" className="w-[69%] object-cover rounded-lg" />
              <div className="flex flex-col items-center justify-start w-[28%] gap-2.5">
                <Img src="images/img_image_75x80.png" alt="image_thirteen" className="w-full object-cover rounded-lg" />
                <div className="flex flex-row justify-center w-full">
                  <div className="h-[75px] w-full relative">
                    <Img
                      src="images/img_image_3.png"
                      alt="image_fifteen"
                      className="justify-center h-[75px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
                    />
                    <div className="flex flex-row justify-center items-center w-max h-max gap-1.5 left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img src={iconcameraOne} alt="iconcamera_one" className="h-3.5 w-3.5" />
                      <Text as="p" className="!text-white-A700 !font-sfprodisplay">
                        {labelSeven}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-[92%]">
            <div className="flex flex-row justify-center items-center">
              <Img src={iconheartNine} alt="iconheart_nine" className="h-3.5 w-3.5" />
              <Text as="p" className="ml-[5px] !text-gray-900">
                {labelEight}
              </Text>
              <Img src={iconcomment} alt="iconcomment" className="h-3.5 w-3.5 ml-[27px]" />
              <Text as="p" className="ml-1.5 !text-gray-900">
                {labelNine}
              </Text>
            </div>
            <div className="flex flex-row justify-start items-center gap-px">
              <Text as="p" className="!text-gray-900">
                {labelTen}
              </Text>
              <Img src="images/img_icon_share.svg" alt="iconshare_five" className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
