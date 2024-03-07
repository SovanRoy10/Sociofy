import React from "react";
import { Text, Heading, Img } from "./..";

interface Props {
  className?: string;
  avatarSeven?: string;
  usernameTwo?: string;
  time?: string;
  copy?: string;
}

export default function DirectMessageMessage08({
  avatarSeven = "images/img_avatar.png",
  usernameTwo = "Marriet Miles",
  time = "4min",
  copy = "Yes, I saw his post yesterday",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Img src={avatarSeven} alt="avatar_seven" className="w-[38px] object-cover rounded-[12px]" />
      <div className="flex flex-col items-start justify-start w-[79%] gap-3.5">
        <div className="flex flex-row justify-start items-center gap-[5px]">
          <Heading as="h1">{usernameTwo}</Heading>
          <Text size="s" as="p">
            {time}
          </Text>
        </div>
        <Text as="p" className="!font-normal">
          {copy}
        </Text>
      </div>
    </div>
  );
}
