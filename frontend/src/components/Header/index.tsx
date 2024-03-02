import React from "react";
import { Img, Button } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-center">
        <Button
          color="gray_100"
          size="7xl"
          leftIcon={<Img src="images/img_icon_arrowleft_gray_500.svg" alt="Icon/Arrow-Left" />}
          className="w-full gap-2.5 font-sfprodisplay font-bold"
        >
          Back
        </Button>
      </div>
      <div className="flex flex-row justify-start w-[11%] gap-5">
        <div className="flex flex-col items-center justify-start h-12 w-12">
          <Button color="light_blue_200" size="4xl" className="font-sfprodisplay font-bold min-w-[48px]">
            1
          </Button>
        </div>
        <Img src="images/img_avatar_48x48.png" alt="avatar_one" className="w-12 object-cover rounded-[12px]" />
      </div>
    </header>
  );
}
