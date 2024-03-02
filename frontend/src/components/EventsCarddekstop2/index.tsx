import React from "react";
import { Button, Img, Text, Heading } from "./..";

interface Props {
  className?: string;
  image?: string;
  title?: string;
  date?: string;
}

export default function EventsCarddekstop2({
  image = "images/img_image_140x250.png",
  title = "Dua Lipa Live Concert",
  date = "December 12, 2019",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full gap-2.5">
        <Img src={image} alt="image" className="w-full object-cover rounded-lg" />
        <div className="flex flex-row justify-start items-center w-full gap-3 max-w-[240px]">
          <div className="flex flex-col items-start justify-center w-[84%] gap-[9px]">
            <Heading as="h1" className="mt-px">
              {title}
            </Heading>
            <Text as="p" className="!text-gray-500 !font-normal">
              {date}
            </Text>
          </div>
          <Button color="white_A700_33" className="w-7 rounded-lg">
            <Img src="images/img_button.svg" />
          </Button>
        </div>
      </div>
    </div>
  );
}
