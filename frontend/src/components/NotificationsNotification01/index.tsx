import React from "react";
import { Img, Text, Heading } from "./..";

interface Props {
  className?: string;
  dotOne?: string;
  avatarThree?: string;
  username?: string;
  time?: string;
}

export default function NotificationsNotification01({
  dotOne,
  avatarThree = "images/defaultNoData.png",
  username = "Gunther Ackner",
  time = "4min",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center items-center w-3/5">
        {!!dotOne ? <div className="h-2 w-2 bg-red-A200 rounded-[50%]" /> : null}
        <Img src={avatarThree} alt="avatar_three" className="w-7 ml-2.5 object-cover rounded-[10px]" />
        <Heading as="h1" className="ml-2.5 !text-white-A700">
          {username}
        </Heading>
        <Text size="s" as="p" className="ml-1 !text-white-A700">
          {time}
        </Text>
      </div>
      <Img src="images/img_photo.png" alt="photo_one" className="w-[49px] object-cover rounded-lg" />
    </div>
  );
}
