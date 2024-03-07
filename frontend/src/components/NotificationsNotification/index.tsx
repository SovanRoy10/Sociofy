import React from "react";
import { Button, Img, Text, Heading } from "./..";

interface Props {
  className?: string;
  marrietMiles?: string;
  username?: string;
  time?: string;
  copy?: string;
  added?: string;
}

export default function NotificationsNotification({
  marrietMiles = "images/defaultNoData.png",
  username = "Marriet Miles",
  time = "4min",
  copy = "sent you a friend request",
  added = "Added",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-full gap-[21px]">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row justify-start items-start w-[65%] gap-2.5">
            <Img src={marrietMiles} alt="marriet_miles" className="w-7 object-cover rounded-[10px]" />
            <div className="flex flex-col items-start justify-start w-[82%] mt-[5px] gap-2">
              <div className="flex flex-row justify-start items-center gap-[3px]">
                <Heading as="h1" className="!text-white-A700">
                  {username}
                </Heading>
                <Text size="s" as="p" className="!text-white-A700">
                  {time}
                </Text>
              </div>
              <Text as="p" className="!text-white-A700 !font-normal">
                {copy}
              </Text>
            </div>
          </div>
          <div className="flex flex-row justify-center p-2.5 bg-white-A700_33 rounded-[12px]">
            <Img src="images/defaultNoData.png" alt="marriet_miles" className="h-[18px] w-[19px]" />
          </div>
        </div>
        <div className="flex flex-row justify-start ml-[38px]">
          <Button
            color="gray_900"
            size="md"
            leftIcon={<Img src="images/img_button.svg" alt="Icon/Check" />}
            className="w-full gap-1 font-medium rounded"
          >
            {added}
          </Button>
        </div>
      </div>
    </div>
  );
}
