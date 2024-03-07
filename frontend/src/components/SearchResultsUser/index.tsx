import React from "react";
import { Button, Img, Text, Heading } from "./..";

interface Props {
  className?: string;
  loganNasser?: string;
  username?: string;
  fullname?: string;
  add?: string;
}

export default function SearchResultsUser({
  loganNasser = "images/img_avatar.png",
  username = "Logan Nasser",
  fullname = "@louisaingram",
  add = "Add",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-between items-center w-full p-[30px] bg-white-A700 rounded-[12px]">
        <div className="flex flex-row justify-start items-center w-[59%] gap-[15px]">
          <Img src={loganNasser} alt="logan_nasser" className="w-12 object-cover rounded-[12px]" />
          <div className="flex flex-col items-start justify-start w-[62%] gap-0.5">
            <Heading size="lg" as="h1">
              {username}
            </Heading>
            <Text size="s" as="p">
              {fullname}
            </Text>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <Button
            size="md"
            leftIcon={<Img src="images/img_button.svg" alt="Icon/Check" />}
            className="w-full gap-[5px] font-medium rounded"
          >
            {add}
          </Button>
        </div>
      </div>
    </div>
  );
}
