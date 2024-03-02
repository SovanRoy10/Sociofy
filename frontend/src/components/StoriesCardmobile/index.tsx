import React from "react";
import { Heading, Img } from "./..";

interface Props {
  className?: string;
  imageOne?: string;
  edwardFordOne?: string;
  username?: string;
}

export default function StoriesCardmobile({
  imageOne = "images/img_image_380x255.png",
  edwardFordOne = "images/img_image_68x68.png",
  username = "Edward Ford",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Img
        src={imageOne}
        alt="image_one"
        className="justify-center h-[380px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
      />
      <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-10 m-auto bg-gradient absolute rounded-lg">
        <div className="flex flex-col items-center justify-start w-[62%] mt-[195px] gap-4">
          <Img src={edwardFordOne} alt="edward_ford_one" className="w-full object-cover max-w-[68px] rounded-[24px]" />
          <Heading size="md" as="h1" className="!font-sfprodisplay text-center">
            {username}
          </Heading>
        </div>
      </div>
    </div>
  );
}
