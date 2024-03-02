import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Heading, Input } from "../../components";
import EventsCarddekstop from "../../components/EventsCarddekstop";
import EventsCarddekstop1 from "../../components/EventsCarddekstop1";
import EventsCarddekstop2 from "../../components/EventsCarddekstop2";
import StoriesNotifications from "../../components/StoriesNotifications";

export default function EventsPage() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Sovan's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-between items-center w-full bg-gray-100">
        <div className="flex flex-col items-center justify-start p-[45px]">
          <Img
            src="images/img_standard_collection_white_a700.svg"
            alt="standard_one"
            className="h-12 w-12 mb-[886px]"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-[55%] mt-10">
          <div className="flex flex-row justify-start items-center gap-[13px] p-3 bg-white-A700 rounded-[12px]">
            <Input
              size="sm"
              shape="square"
              name="search"
              placeholder="Search in social…"
              value={searchBarValue3}
              onChange={(e: string) => setSearchBarValue3(e)}
              prefix={<Img src="images/img_icon_search.svg" alt="Icon/Search" className="cursor-pointer" />}
              suffix={
                searchBarValue3?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue3("")} height={18} width={18} />
                ) : null
              }
              className="w-[89%] gap-[15px] my-px"
            />
            <Heading size="xs" as="h1" className="!text-gray-500 tracking-[1.00px] uppercase">
              Filters
            </Heading>
          </div>
          <Heading size="xl" as="h2" className="mt-[59px] !text-gray-900">
            Events
          </Heading>
          <div className="flex flex-row justify-between items-start w-[62%] mt-10">
            <div className="flex flex-col items-center justify-start w-[13%] gap-1.5">
              <Heading as="h2" className="!text-gray-900">
                Anytime
              </Heading>
              <div className="h-0.5 w-[87%] bg-gray-900" />
            </div>
            <div className="flex flex-row justify-center">
              <Heading as="h3" className="!text-gray-500">
                Today
              </Heading>
            </div>
            <div className="flex flex-row justify-center">
              <Heading as="h4" className="!text-gray-500">
                Tomorrow
              </Heading>
            </div>
            <div className="flex flex-row justify-center">
              <Heading as="h5" className="!text-gray-500">
                This Week
              </Heading>
            </div>
            <div className="flex flex-row justify-center">
              <Heading as="h6" className="!text-gray-500">
                This Month
              </Heading>
            </div>
            <div className="flex flex-row justify-center">
              <Heading as="p" className="!text-gray-500">
                Select
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[42px] pb-[30px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="justify-center w-full gap-[30px] grid-cols-2 grid min-h-[auto]">
                <EventsCarddekstop className="flex flex-col items-center justify-start w-full" />
                <EventsCarddekstop1 className="flex flex-col items-center justify-start w-full" />
                <EventsCarddekstop
                  imageOne="images/img_image_26.png"
                  className="flex flex-col items-center justify-start w-full"
                />
                <EventsCarddekstop
                  imageOne="images/img_image_27.png"
                  className="flex flex-col items-center justify-start w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-1/4">
          <div className="h-[1024px] w-full relative">
            <Img
              src="images/img_modal_desktop_dark_gray_500.svg"
              alt="modaldesktop"
              className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
            />
            <div className="flex flex-col items-center justify-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="flex flex-col items-end justify-start w-full gap-[45px] p-10 rounded-tl-[32px] rounded-bl-[32px] bg-gray-900">
                <div className="flex flex-row justify-start w-[45%] mt-[5px] gap-5">
                  <StoriesNotifications className="flex flex-col items-center justify-start h-12 w-12" />
                  <Img
                    src="images/img_avatar_48x48.png"
                    alt="avatar_one"
                    className="w-12 object-cover rounded-[12px]"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[97%] mb-[45px] pt-[3px] gap-[39px]">
                  <Heading size="lg" as="h2">
                    My Next Events
                  </Heading>
                  <div className="w-full gap-px grid-cols-1 grid min-h-[auto]">
                    <EventsCarddekstop2 className="flex flex-row justify-center w-full" />
                    <EventsCarddekstop2
                      image="images/img_image_28.png"
                      className="flex flex-row justify-center w-full"
                    />
                    <EventsCarddekstop2
                      image="images/img_image_29.png"
                      className="flex flex-row justify-center w-full"
                    />
                  </div>
                  <div className="flex flex-row justify-start items-center gap-2 py-0.5">
                    <a href="#">
                      <Heading size="xs" as="h3" className="!text-gray-500 tracking-[1.00px] uppercase">
                        See more
                      </Heading>
                    </a>
                    <Img src="images/img_icon_arrow_right_gray_500.svg" alt="iconarrow_one" className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
