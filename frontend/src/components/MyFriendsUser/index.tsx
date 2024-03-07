import React from "react";
import { Button, Img, Text, Heading } from "./..";

interface Props {
  className?: string;
  billyGreenOne?: string;
  username?: string;
  fullname?: string;
  freinds?: string;
}

export default function MyFriendsUser({
  billyGreenOne = "images/img_avatar_41.png",
  username = "Billy Green",
  fullname = "@BillyGreen",
  freinds = "Freinds",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full gap-3 p-[37px] bg-white-A700 rounded-[12px]">
        <div className="flex flex-col items-center justify-start h-[58px] w-[58px] mt-[3px]">
          <Img src={billyGreenOne} alt="billy_green_one" className="w-[58px] object-cover rounded-[18px]" />
        </div>
        <div className="flex flex-col items-center justify-start w-[54%]">
          <Heading size="lg" as="h1" className="text-center">
            {username}
          </Heading>
          <Text size="s" as="p" className="mt-0.5 text-center">
            {fullname}
          </Text>
          <div className="flex flex-row justify-center w-full mt-[15px]">
            <Button
              color="green_400"
              size="md"
              leftIcon={<Img src="images/img_button.svg" alt="Icon/Check" />}
              className="w-full gap-[3px] font-medium rounded"
            >
              {freinds}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
