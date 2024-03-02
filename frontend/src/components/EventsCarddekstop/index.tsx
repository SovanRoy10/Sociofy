import React from "react";
import { Button, Img, Text, Heading } from "./..";

interface Props {
  className?: string;
  imageOne?: string;
  ten?: string;
  weekday?: string;
  decembercounter?: string;
  title?: string;
  time?: string;
  interested?: string;
  nine?: string;
}

export default function EventsCarddekstop({
  imageOne = "images/img_image_24.png",
  ten = "10",
  weekday = "Monday",
  decembercounter = "December, 2019",
  title = "Fashion Meetup",
  time = "Starts at 9:00am in Los Angeles",
  interested = "Interested",
  nine = "+9",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full p-[29px] bg-white-A700 rounded-[12px]">
        <div className="flex flex-col items-center justify-start w-full max-w-[321px]">
          <Img src={imageOne} alt="image_one" className="w-full object-cover rounded-lg" />
          <div className="flex flex-row justify-between items-center w-full mt-5">
            <div className="flex flex-row justify-start items-center w-[45%] gap-2.5">
              <div className="flex flex-col items-center justify-start h-12 w-12">
                <Button
                  color="gray_500_33"
                  size="4xl"
                  variant="outline"
                  className="font-bold min-w-[48px] rounded-[15px]"
                >
                  {ten}
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start w-3/5 gap-[3px]">
                <Heading as="h1" className="!text-gray-900">
                  {weekday}
                </Heading>
                <Text size="xs" as="p" className="!text-gray-500">
                  {decembercounter}
                </Text>
              </div>
            </div>
            <Img src="images/img_options_gray_500.svg" alt="monday_one" className="h-[38px] w-[38px]" />
          </div>
          <div className="flex flex-col items-start justify-center w-full mt-5 gap-3">
            <Heading size="lg" as="h2" className="mt-[3px] !text-gray-900">
              {title}
            </Heading>
            <Text as="p" className="!text-gray-500">
              {time}
            </Text>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-[30px]">
            <div className="flex flex-row justify-center">
              <Button
                color="green_400"
                size="md"
                leftIcon={<Img src="images/img_button.svg" alt="Icon/Check" />}
                className="w-full gap-[3px] font-medium rounded"
              >
                {interested}
              </Button>
            </div>
            <div className="flex flex-row justify-center w-[24%]">
              <div className="flex flex-row justify-center w-full">
                <Img src="images/img_avatar_17.png" alt="image_two" className="w-7 object-cover rounded-lg" />
                <Img
                  src="images/img_avatar_17.png"
                  alt="image_three"
                  className="w-7 ml-[-5px] object-cover rounded-lg"
                />
                <div className="flex flex-col items-center justify-start h-7 w-7 ml-[-5px]">
                  <Button color="gray_900" size="xs" className="font-sfprodisplay font-bold min-w-[28px] rounded-lg">
                    {nine}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
