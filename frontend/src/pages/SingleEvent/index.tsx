import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading, GoogleMap } from "../../components";
import HomeUser1 from "../../components/HomeUser1";
import SingleVideoChipsmall from "../../components/SingleVideoChipsmall";
import StoriesNotifications from "../../components/StoriesNotifications";

export default function SingleEventPage() {
  return (
    <>
      <Helmet>
        <title>Tulshi's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-col items-center justify-start w-[12%] p-[45px]">
          <Img
            src="images/img_standard_collection_white_a700.svg"
            alt="standard_one"
            className="h-12 w-12 mb-[886px]"
          />
        </div>
        <div className="flex flex-row justify-center w-[89%]">
          <div className="h-[1024px] w-full relative">
            <Img
              src="images/img_modal_desktop.svg"
              alt="modaldesktop"
              className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
            />
            <div className="flex flex-row justify-between items-center w-[93%] h-full right-0 bottom-0 top-0 m-auto absolute">
              <div className="flex flex-col items-center justify-start w-[54%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-center w-[26%]">
                        <div className="flex flex-row justify-start items-center w-full gap-2.5">
                          <Img
                            src="images/img_avatar.png"
                            alt="avatar_one"
                            className="w-12 object-cover rounded-[12px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[65%] gap-1">
                            <Text as="p" className="!text-gray-900">
                              Gunther Ackner
                            </Text>
                            <Text size="s" as="p">
                              3 days ago
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center items-center w-[37%]">
                        <div className="flex flex-row justify-start items-center w-1/4 gap-1">
                          <Img src="images/img_icon_share.svg" alt="iconshare_one" className="h-3.5 w-3.5" />
                          <Text as="p" className="!text-gray-900">
                            Share
                          </Text>
                        </div>
                        <div className="flex flex-row justify-center w-[44%] ml-[21px]">
                          <Button
                            color="green_400"
                            size="md"
                            leftIcon={<Img src="images/img_button.svg" alt="Icon/Check" />}
                            className="w-full gap-[3px] font-medium rounded"
                          >
                            Interested
                          </Button>
                        </div>
                        <Img src="images/img_icon_eye.svg" alt="options_one" className="h-[38px] w-[38px] ml-[15px]" />
                      </div>
                    </div>
                    <Img
                      src="images/img_image_25.png"
                      alt="image_one"
                      className="w-full mt-10 object-cover rounded-lg"
                    />
                    <Heading size="2xl" as="h1" className="mt-[42px]">
                      2019 DUB Show at Los Angeles Auto Show
                    </Heading>
                    <div className="flex flex-row justify-between w-[66%] mt-[26px]">
                      <div className="flex flex-row justify-start items-center w-[48%] gap-2.5">
                        <Button color="gray_100" size="3xl" className="w-12">
                          <Img src="images/img_day.svg" />
                        </Button>
                        <div className="flex flex-col items-center justify-start w-[71%] gap-[3px]">
                          <Heading as="h2">12 December, 2019 </Heading>
                          <Text size="s" as="p">
                            From 9:00am to 6:00pm
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[31%] gap-2.5">
                        <Button color="gray_100" size="3xl" className="w-12">
                          <Img src="images/img_currency.svg" />
                        </Button>
                        <div className="flex flex-col items-center justify-start w-[55%] gap-[3px]">
                          <Heading as="h3">$60 - $90</Heading>
                          <Text size="s" as="p">
                            +30% Taxes
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full mt-[42px] gap-[19px]">
                      <Heading size="lg" as="h4">
                        Event Description
                      </Heading>
                      <Text as="p" className="!font-normal !leading-[22px]">
                        For evidence of the double standard, we need look no farther than Arlington, Oregon, where Mayor
                        Carmen Kontur-Gronquist was recalled in a 142-139 vote after the town’s denizens discovered that
                        the mayor’s MySpace page featured photos of her in lingerie. Although Kontur-Gronquist is
                        alleging election fraud and challenging the returns, and even though the mayoral position was
                        unpaid, no one is arguing that her MySpace page did her in.{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start w-3/5 mt-8 gap-2.5">
                      <div className="flex flex-row justify-start w-[11%]">
                        <SingleVideoChipsmall labelTwo="Car" className="flex flex-row justify-start w-full" />
                      </div>
                      <SingleVideoChipsmall className="flex flex-row justify-start w-[22%]" />
                      <SingleVideoChipsmall className="flex flex-row justify-start w-[19%]" />
                      <SingleVideoChipsmall className="flex flex-row justify-start w-[12%]" />
                      <SingleVideoChipsmall className="flex flex-row justify-start w-[12%]" />
                      <SingleVideoChipsmall className="flex flex-row justify-start w-[13%]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[39%]">
                <div className="h-[1024px] w-full relative">
                  <Img
                    src="images/img_modal_desktop_dark_gray_500.svg"
                    alt="modaldesktop"
                    className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <div className="flex flex-col items-start justify-center w-max h-full gap-10 left-0 bottom-0 right-0 top-0 py-10 m-auto rounded-tl-[32px] rounded-bl-[32px] bg-gray-900 absolute">
                    <header className="flex flex-row justify-between items-center w-full">
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
                        <StoriesNotifications className="flex flex-col items-center justify-start h-12 w-12" />
                        <Img
                          src="images/img_avatar_48x48.png"
                          alt="avatar_three"
                          className="w-12 object-cover rounded-[12px]"
                        />
                      </div>
                    </header>
                    <div className="flex flex-col items-center justify-start w-[79%] mb-7 ml-[54px] gap-[60px]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full gap-[30px]">
                          <Heading size="xl" as="h5" className="!text-white-A700">
                            Address
                          </Heading>
                          <GoogleMap showMarker={false} className="h-60 w-full rounded-lg" />
                          <div className="flex flex-row justify-between items-start w-full">
                            <div className="flex flex-row justify-start items-center w-[52%] gap-2.5">
                              <Button color="white_A700_33" size="3xl" className="w-12">
                                <Img src="images/img_day_white_a700.svg" />
                              </Button>
                              <div className="flex flex-col items-start justify-start w-[67%] gap-0.5 py-0.5">
                                <Heading as="h6" className="!text-white-A700">
                                  Los Angeles, CA
                                </Heading>
                                <Text size="s" as="p">
                                  189 The Grove Dr
                                </Text>
                              </div>
                            </div>
                            <Button
                              color="gray_500_99"
                              size="md"
                              variant="outline"
                              className="mt-2 font-medium min-w-[82px] rounded"
                            >
                              Directions
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full gap-[41px]">
                        <Heading size="xl" as="h5" className="!text-white-A700">
                          Friends Interested
                        </Heading>
                        <div className="flex flex-col w-full gap-[30px]">
                          <HomeUser1 one="images/img_avatar_4.png" className="flex flex-row justify-between w-full" />
                          <HomeUser1 one="images/img_avatar.png" className="flex flex-row justify-between w-full" />
                          <HomeUser1 one="images/img_avatar_7.png" className="flex flex-row justify-between w-full" />
                          <HomeUser1 one="images/img_avatar_8.png" className="flex flex-row justify-between w-full" />
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-start items-center gap-2.5">
                              <Img
                                src="images/img_avatar_18.png"
                                alt="avatar_one"
                                className="w-[38px] object-cover rounded-[12px]"
                              />
                              <Text as="p" className="!text-white-A700">
                                MadeInAmerica
                              </Text>
                            </div>
                            <Button color="green_400" className="w-7 rounded-lg">
                              <Img src="images/img_group_216.svg" />
                            </Button>
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
      </div>
    </>
  );
}
