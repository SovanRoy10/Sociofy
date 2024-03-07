import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";
import HomeCard06 from "../../components/HomeCard06";
import HomeCarddekstop3 from "../../components/HomeCarddekstop3";
import HomeSeemorebutton from "../../components/HomeSeemorebutton";
import HomeUser from "../../components/HomeUser";
import HomeUser1 from "../../components/HomeUser1";
import SearchResultsUser from "../../components/SearchResultsUser";
import StoriesNotifications from "../../components/StoriesNotifications";

export default function SearchResultsPage() {
  return (
    <>
      <Helmet>
        <title>Tulshi's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col items-center justify-start p-[45px]">
            <Img
              src="images/img_standard_collection_white_a700.svg"
              alt="standard_one"
              className="h-12 w-12 mb-[886px]"
            />
          </div>
          <div className="flex flex-row justify-start items-start w-[85%] gap-[30px]">
            <div className="flex flex-col items-start justify-start w-[63%] mt-10">
              <div className="flex flex-row justify-start items-center w-full gap-2.5 p-[13px] bg-white-A700 rounded-[12px]">
                <div className="flex flex-row justify-start items-center w-[84%] ml-[7px] gap-[15px] py-[7px] bg-white-A700">
                  <Img
                    src="images/img_icon_search_indigo_a200.svg"
                    alt="iconsearch_one"
                    className="h-[18px] w-[18px]"
                  />
                  <Text as="p" className="!text-gray-900">
                    Nass
                  </Text>
                </div>
                <div className="flex flex-row justify-start items-center w-[13%] gap-2.5">
                  <Heading size="s" as="h1" className="w-[58%] !text-gray-500 tracking-[1.00px] uppercase !leading-5">
                    Filters
                  </Heading>
                  <StoriesNotifications className="flex flex-col items-center justify-start h-7 w-7" />
                </div>
              </div>
              <Heading size="xl" as="h2" className="mt-[63px]">
                People
              </Heading>
              <div className="w-full mt-[39px] gap-[30px] grid-cols-2 grid min-h-[auto]">
                <SearchResultsUser className="flex flex-row justify-start w-full" />
                <SearchResultsUser
                  loganNasser="images/img_avatar_19.png"
                  className="flex flex-row justify-end w-full"
                />
                <SearchResultsUser
                  loganNasser="images/img_avatar_6.png"
                  className="flex flex-row justify-start w-full"
                />
                <SearchResultsUser
                  loganNasser="images/img_avatar_11.png"
                  className="flex flex-row justify-end w-full"
                />
              </div>
              <HomeSeemorebutton
                iconarrowOne="images/img_icon_arrow_right_gray_900.svg"
                className="flex flex-row justify-start mt-[30px]"
              />
              <Heading size="xl" as="h3" className="mt-[61px]">
                Posts
              </Heading>
              <div className="flex flex-row justify-start items-start w-full mt-[41px] gap-[30px]">
                <HomeCard06
                  optionsThree="images/img_options_gray_500.svg"
                  iconheartSeven="images/img_icon_heart_regular_gray_500.svg"
                  iconcomment="images/img_icon_comment_gray_500.svg"
                  className="flex flex-col items-center justify-start w-[49%]"
                />
                <HomeCarddekstop3
                  optionsFive="images/img_options_gray_500.svg"
                  iconcameraOne="images/img_icon_camera_white_a700.svg"
                  iconheartNine="images/img_icon_heart_regular_gray_500.svg"
                  iconcomment="images/img_icon_comment_gray_500.svg"
                  className="flex flex-col items-center justify-start w-[49%]"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[35%]">
              <div className="h-[1024px] w-full relative">
                <Img
                  src="images/img_modal_desktop_dark_gray_500.svg"
                  alt="modaldesktop"
                  className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <div className="flex flex-col items-center justify-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="flex flex-col items-end justify-start w-full gap-[45px] p-10 rounded-tl-[32px] rounded-bl-[32px] bg-gray-900">
                    <div className="flex flex-row justify-start w-[37%] mt-[5px] gap-5">
                      <StoriesNotifications className="flex flex-col items-center justify-start h-12 w-12" />
                      <Img
                        src="images/img_avatar_48x48.png"
                        alt="avatar_one"
                        className="w-12 object-cover rounded-[12px]"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-[99%] gap-[60px]">
                      <div className="flex flex-row justify-center w-full">
                        <div className="h-[174px] w-full pt-[21px] bg-red-A200 relative rounded-[12px]">
                          <Img
                            src="images/img_oval.png"
                            alt="oval_one"
                            className="h-[92px] w-[53%] bottom-0 right-0 m-auto object-cover absolute"
                          />
                          <div className="flex flex-col items-end justify-start w-[91%] left-0 top-[12%] m-auto absolute">
                            <div className="h-[19px] w-[19px] mr-[88px] z-[1] bg-gray-900_33 rounded-[9px]" />
                            <div className="flex flex-row justify-end items-start w-full mt-[-3px]">
                              <div className="h-[87px] w-1/5 bg-green-400 rounded-[50%]" />
                              <Text
                                as="p"
                                className="w-[93%] mt-[18px] ml-[-37px] !text-white-A700 !font-normal !leading-[22px]"
                              >
                                Try premium membership and enjoy
                                <br />a full experience of our community.
                              </Text>
                            </div>
                          </div>
                          <Heading size="xl" as="h4" className="left-[6%] top-[12%] m-auto !text-white-A700 absolute">
                            Go Premium!
                          </Heading>
                          <HomeSeemorebutton
                            iconarrowOne="images/img_icon_arrow_right.svg"
                            className="flex flex-row justify-start w-[31%] bottom-[11%] left-[6%] m-auto absolute"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full gap-[41px]">
                        <Heading size="xl" as="h5" className="!text-white-A700">
                          Who to Follow
                        </Heading>
                        <div className="flex flex-col w-full gap-[30px]">
                          <HomeUser
                            cammyHedling="images/img_avatar_2.png"
                            className="flex flex-row justify-center w-full"
                          />
                          <HomeUser
                            cammyHedling="images/img_avatar_3.png"
                            className="flex flex-row justify-center w-full"
                          />
                          <HomeUser
                            cammyHedling="images/img_avatar_1.png"
                            className="flex flex-row justify-center w-full"
                          />
                        </div>
                        <div className="flex flex-row justify-start items-center gap-1">
                          <a href="#">
                            <Heading size="s" as="h6" className="!text-gray-500 tracking-[1.00px] uppercase">
                              See more
                            </Heading>
                          </a>
                          <Img
                            src="images/img_icon_arrow_right_gray_500.svg"
                            alt="iconarrow_five"
                            className="h-[18px] w-[18px]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full gap-[41px]">
                        <Heading size="xl" as="h5" className="!text-white-A700">
                          Friends
                        </Heading>
                        <div className="flex flex-col w-full gap-[30px]">
                          <HomeUser1 one="images/img_avatar_20.png" className="flex flex-row justify-between w-full" />
                          <HomeUser1 one="images/img_avatar_21.png" className="flex flex-row justify-between w-full" />
                          <HomeUser1 one="images/img_avatar_22.png" className="flex flex-row justify-between w-full" />
                        </div>
                      </div>
                    </div>
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
