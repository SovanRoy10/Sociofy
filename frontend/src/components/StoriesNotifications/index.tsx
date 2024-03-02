import React from "react";
import { Heading } from "./..";

interface Props {
  className?: string;
  abOne?: string;
}

export default function StoriesNotifications({ abOne, ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-12 w-12">
        <div className="h-12 w-12 bg-light_blue-200 relative rounded-[12px]">
          <Heading
            size="lg"
            as="h1"
            className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto text-center absolute"
          >
            1
          </Heading>
          <div className="flex flex-col items-center justify-center h-full w-full left-0 bottom-0 right-0 top-0 p-2.5 m-auto bg-light_blue-200 absolute rounded-[12px]">
            {!!abOne ? (
              <Heading size="lg" as="h2" className="!font-sfprodisplay text-center !text-[22.32px]">
                {abOne}
              </Heading>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
