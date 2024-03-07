import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Heading, Input, Text } from "../../components";
import HomeSeemorebutton from "../../components/HomeSeemorebutton";
import NotificationsCarddekstop1 from "../../components/NotificationsCarddekstop1";
import NotificationsNotification from "../../components/NotificationsNotification";
import NotificationsNotification01 from "../../components/NotificationsNotification01";
import NotificationsNotification02 from "../../components/NotificationsNotification02";

export default function NotificationsPage() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Tulshi's Application1</title>
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
        <div className="flex flex-row justify-start items-start w-[85%] gap-[30px]">
          <div className="flex flex-col items-center justify-start w-[63%] mt-[138px] gap-[30px]">
            <div className="flex flex-col items-center justify-center w-full pl-[30px] gap-[34px] py-[30px] bg-white-A700 rounded-[12px]">
              <div className="flex flex-row justify-between items-center w-[96%] mt-1">
                <Heading size="xl" as="h1">
                  Featured Stories
                </Heading>
                <HomeSeemorebutton
                  iconarrowOne="images/img_icon_arrow_right_gray_900.svg"
                  className="flex flex-row justify-center w-[14%]"
                />
              </div>
              <div className="flex flex-row justify-start items-center w-[99%] gap-[30px]">
                <Button color="light_blue_200_33" size="2xl" className="w-[45px]">
                  <Img src="images/img_add_user_light_blue_200.svg" />
                </Button>
                <div className="flex flex-row w-[90%] gap-5">
                  <div className="flex flex-col items-center justify-start h-[65px] w-[11%] p-[3px] border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_54x54.png"
                      alt="image_one"
                      className="w-[54px] object-cover rounded-[12px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[65px] w-[11%] p-[3px] border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_30.png"
                      alt="image_one"
                      className="w-[54px] object-cover rounded-[12px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[65px] w-[11%] p-[3px] border-gray-500_66 border-2 border-solid rounded-[12px]">
                    <Img
                      src="images/img_image_31.png"
                      alt="image_one"
                      className="w-[54px] object-cover rounded-[12px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[65px] w-[11%] p-[3px] border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_32.png"
                      alt="image_one"
                      className="w-[54px] object-cover rounded-[12px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[65px] w-[11%] p-[3px] border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_33.png"
                      alt="image_one"
                      className="w-[54px] object-cover rounded-[12px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[65px] w-[11%] p-[3px] border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_34.png"
                      alt="image_one"
                      className="w-[54px] object-cover rounded-[12px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[65px] w-[11%] p-[3px] border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_35.png"
                      alt="image_one"
                      className="w-[54px] object-cover rounded-[12px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[8%] pl-[3px] py-[3px] border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_54x44.png"
                      alt="image_one"
                      className="w-[94%] object-cover rounded-[12px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-center w-full p-[30px] bg-white-A700 rounded-[12px]">
                <div className="flex flex-col items-center justify-start w-full gap-20">
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row justify-start items-center gap-[15px]">
                      <Img
                        src="images/img_avatar.png"
                        alt="avatar_one"
                        className="w-[38px] object-cover rounded-[12px]"
                      />
                      <Text as="p">What are you thinking? </Text>
                    </div>
                    <Img src="images/img_icon_eye.svg" alt="options_one" className="h-[38px] w-[38px]" />
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-between w-auto gap-[15px]">
                      <Button color="gray_100" size="xl" className="w-[38px]">
                        <Img src="images/img_camera.svg" />
                      </Button>
                      <Button color="gray_100" size="xl" className="w-[38px]">
                        <Img src="images/img_group_337.svg" />
                      </Button>
                      <Button color="gray_100" size="xl" className="w-[38px]">
                        <Img src="images/img_plus.svg" />
                      </Button>
                    </div>
                    <div className="flex flex-row justify-center">
                      <Button size="7xl" className="w-full font-bold rounded-[29px]">
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NotificationsCarddekstop1 className="flex flex-row justify-center w-full" />
          </div>
          <div className="flex flex-col items-center justify-start w-[35%]">
            <div className="h-[1024px] w-full relative">
              <Img
                src="images/img_modal_desktop_dark_gray_900.svg"
                alt="modaldesktop"
                className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
              />
              <div className="flex flex-col items-start justify-start w-4/5 bottom-[5%] right-0 left-0 m-auto absolute">
                <div className="flex flex-col items-start justify-start w-full gap-[61px] z-[1]">
                  <div className="flex flex-row justify-start items-center w-[53%] gap-2.5">
                    <Heading size="xl" as="h2" className="!text-white-A700 !font-sfprodisplay">
                      Notifications
                    </Heading>
                    <div className="flex flex-row justify-start w-[21%]">
                      <Text
                        size="s"
                        as="p"
                        className="flex justify-center items-center w-[35px] h-5 px-[9px] py-0.5 !text-white-A700 bg-red-A200 rounded"
                      >
                        03
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-end justify-start w-full gap-9">
                      <div className="flex flex-row justify-end w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <NotificationsNotification01 className="flex flex-row justify-between w-full" />
                          <Text as="p" className="mt-[-12px] ml-14 !text-white-A700 !font-normal">
                            liked your photo
                          </Text>
                        </div>
                      </div>
                      <NotificationsNotification02 className="flex flex-row justify-end w-full" />
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-start items-start w-[67%] gap-2.5">
                          <div className="h-2 w-2 mt-2.5 bg-red-A200 rounded-[50%]" />
                          <Img
                            src="images/img_avatar_25.png"
                            alt="avatar_seven"
                            className="w-7 object-cover rounded-[10px]"
                          />
                          <div className="flex flex-col items-start justify-start w-3/4 mt-[5px] gap-2">
                            <div className="flex flex-row justify-start items-center gap-[3px]">
                              <Heading as="h3" className="!text-white-A700">
                                Marriet Miles
                              </Heading>
                              <Text size="s" as="p" className="!text-white-A700">
                                4min
                              </Text>
                            </div>
                            <Text as="p" className="!text-white-A700 !font-normal">
                              sent you a friend request
                            </Text>
                          </div>
                        </div>
                        <Button color="white_A700_33" size="xl" className="w-[38px]">
                          <Img src="images/img_icon_heart_regular_white_a700.svg" />
                        </Button>
                      </div>
                      <div className="flex flex-row justify-end w-[95%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <NotificationsNotification01
                            avatarThree="images/img_avatar_16.png"
                            className="flex flex-row justify-between w-full"
                          />
                          <Text as="p" className="mt-[-12px] ml-[38px] !text-white-A700 !font-normal">
                            liked your photo
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col w-[95%] gap-10">
                        <NotificationsNotification className="flex flex-row justify-center w-full" />
                        <NotificationsNotification
                          marrietMiles="images/img_avatar_26.png"
                          className="flex flex-row justify-center w-full"
                        />
                      </div>
                      <NotificationsNotification01
                        avatarThree="images/img_avatar_27.png"
                        className="flex flex-row justify-between w-[95%]"
                      />
                    </div>
                  </div>
                </div>
                <Text as="p" className="mt-[-7px] ml-14 !text-white-A700 !font-normal">
                  liked your photo
                </Text>
              </div>
              <header className="flex flex-row justify-between items-center w-full left-0 top-[4%] m-auto absolute">
                <div className="flex flex-row justify-start items-center w-[65%] gap-[13px] p-3 bg-white-A700 rounded-[12px]">
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
                  <Heading size="s" as="p" className="!text-gray-500 tracking-[1.00px] uppercase">
                    Filters
                  </Heading>
                </div>
                <div className="flex flex-row justify-start w-[10%] gap-5">
                  <Button color="gray_900" size="3xl" className="w-12">
                    <Img src="images/img_icon_close.svg" />
                  </Button>
                  <div className="flex flex-col items-center justify-start h-12 w-12">
                    <div className="flex flex-col items-center justify-start h-12 w-12">
                      <Img
                        src="images/img_image_36.png"
                        alt="image_three"
                        className="w-12 object-cover rounded-[12px]"
                      />
                      <Img
                        src="images/img_avatar_48x48.png"
                        alt="avatar_thirteen"
                        className="w-12 mt-[-48px] object-cover rounded-[12px]"
                      />
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
