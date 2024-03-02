import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Heading, Input } from "./..";

interface Props {
  className?: string;
}

export default function Header2({ ...props }: Props) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row justify-start items-center w-full gap-[13px] p-3 mx-auto bg-white-A700 max-w-[760px] rounded-[12px]">
        <Input
          size="sm"
          shape="square"
          name="search"
          placeholder="Search in social…"
          value={searchBarValue1}
          onChange={(e: string) => setSearchBarValue1(e)}
          prefix={<Img src="images/img_icon_search.svg" alt="Icon/Search" className="cursor-pointer" />}
          suffix={
            searchBarValue1?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue1("")} height={18} width={18} />
            ) : null
          }
          className="w-[89%] gap-[15px] my-px"
        />
        <Heading as="p" className="!text-gray-500 tracking-[1.00px] uppercase">
          Filters
        </Heading>
      </div>
      <div className="flex flex-row justify-start w-[10%] gap-5">
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
