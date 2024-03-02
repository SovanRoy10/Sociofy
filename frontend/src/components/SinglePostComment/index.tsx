import React from "react";
import { Img, Text } from "./..";

interface Props {
  className?: string;
  billyGreenOne?: string;
  name?: string;
  time?: string;
  timezone?: string;
  image?: string;
  imageOne?: string;
}

export default function SinglePostComment({
  billyGreenOne = "images/img_avatar_12.png",
  name = "Billy Green",
  time = "20min ago",
  timezone = "Awesome Edward, remeber that five tips for low cost holidays I sent you?",
  image,
  imageOne,
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-full gap-2.5">
        <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[331px]">
          <div className="flex flex-row justify-start items-center gap-[5px]">
            <Img src={billyGreenOne} alt="billy_green_one" className="w-7 object-cover rounded-[10px]" />
            <Text as="p" className="!text-white-A700">
              {name}
            </Text>
          </div>
          <Text size="xs" as="p">
            {time}
          </Text>
        </div>
        <Text as="p" className="!text-white-A700 !font-normal !leading-[22px]">
          {timezone}
        </Text>
        <div className="flex flex-row justify-start gap-[15px]">
          {!!image ? <Img src={image} alt="image" className="h-3.5 w-3.5" /> : null}
          {!!imageOne ? <Img src={imageOne} alt="image_one" className="h-3.5 w-3.5" /> : null}
        </div>
      </div>
    </div>
  );
}
