import React from "react";
import { Helmet } from "react-helmet";
import { Input, Img, Button, Heading } from "../../components";
import DirectMessageMessage07 from "../../components/DirectMessageMessage07";
import DirectMessageMessage08 from "../../components/DirectMessageMessage08";
import DirectMessageProfile3 from "../../components/DirectMessageProfile3";
import GroupMessageMessage from "../../components/GroupMessageMessage";
import GroupMessageMessage09 from "../../components/GroupMessageMessage09";
import Header1 from "../../components/Header1";
import StoriesNotifications from "../../components/StoriesNotifications";

export default function GroupMessagePage() {
  return (
    <>
      <Helmet>
        <title>Rupal's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-row justify-start w-full gap-[45px]">
          <div className="flex flex-col items-center justify-start w-[12%] p-[45px]">
            <Img
              src="images/img_standard_collection_white_a700.svg"
              alt="standard_one"
              className="h-12 w-12 mb-[886px]"
            />
          </div>
          <div className="h-[1024px] w-[86%] relative">
            <Header1 className="flex flex-row justify-between items-center w-full top-[4%] right-0 left-0 m-auto absolute" />
            <div className="flex flex-col items-start justify-start w-[32%] gap-[39px] left-0 top-[15%] m-auto absolute">
              <Heading size="2xl" as="h1">
                Inbox
              </Heading>
              <div className="flex flex-row justify-start items-start w-[92%]">
                <div className="flex flex-row justify-start w-[33%]">
                  <Heading as="h2" className="!text-gray-500">
                    Direct Messages
                  </Heading>
                </div>
                <div className="flex flex-col items-center justify-start w-[23%] ml-5 gap-1.5">
                  <Heading as="h3">Group Chat</Heading>
                  <div className="h-0.5 w-full bg-gray-900" />
                </div>
                <div className="flex flex-row justify-start w-[18%] ml-[23px]">
                  <Heading as="h4" className="!text-gray-500">
                    Archived
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col w-full gap-5">
                <GroupMessageMessage group120="1" className="flex flex-row justify-start w-[90%] gap-1 mx-auto" />
                <div className="flex flex-row justify-center w-full p-5 bg-white-A700 rounded-[12px]">
                  <GroupMessageMessage
                    closeFriends="images/img_avatar_37.png"
                    closefriends1="images/img_image_37.png"
                    group120="1"
                    className="flex flex-row justify-start w-full gap-1"
                  />
                </div>
                <GroupMessageMessage
                  closeFriends="images/img_avatar_38.png"
                  closefriends1="images/img_image_38.png"
                  className="flex flex-row justify-start w-[90%] gap-1 mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[66%] h-full right-0 bottom-0 top-0 m-auto absolute">
              <div className="h-[1024px] w-full relative">
                <Img
                  src="images/img_modal_desktop_white.svg"
                  alt="modaldesktop"
                  className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <div className="flex flex-col items-start justify-start w-[88%] bottom-[4%] right-0 left-0 m-auto absolute">
                  <div className="flex flex-row justify-start w-[99%]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center w-[43%] gap-5">
                        <div className="flex flex-row justify-start w-[54%]">
                          <div className="flex flex-row justify-start w-full">
                            <div className="flex flex-row justify-start w-[69%]">
                              <DirectMessageProfile3
                                avatarThree="images/img_avatar_39.png"
                                className="flex flex-col items-center justify-start h-[58px] w-[58px]"
                              />
                              <DirectMessageProfile3
                                avatarThree="images/img_avatar_40.png"
                                className="flex flex-col items-center justify-start h-[58px] w-[58px] ml-[-10px]"
                              />
                            </div>
                            <StoriesNotifications className="flex flex-col items-center justify-start h-[58px] w-[58px] ml-[-10px]" />
                          </div>
                        </div>
                        <Heading size="xl" as="h5">
                          Beach Trip
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-between w-auto gap-10">
                        <Img src="images/img_icon_phone.svg" alt="iconphone_one" className="h-[25px] w-[25px]" />
                        <Img src="images/img_group_337.svg" alt="iconvideo_one" className="h-[25px] w-[25px]" />
                        <Img src="images/img_icon_eye.svg" alt="iconoptions_one" className="h-[25px] w-[25px]" />
                      </div>
                    </div>
                  </div>
                  <DirectMessageMessage08
                    avatarSeven="images/img_avatar_3.png"
                    className="flex flex-row justify-start mt-[70px] gap-[15px]"
                  />
                  <DirectMessageMessage08
                    avatarSeven="images/img_avatar_7.png"
                    className="flex flex-row justify-start mt-[50px] gap-[15px]"
                  />
                  <GroupMessageMessage09 className="flex flex-row justify-start mt-[50px]" />
                  <DirectMessageMessage07
                    avatarFive="images/img_avatar_4.png"
                    className="flex flex-row justify-start mt-[49px]"
                  />
                  <DirectMessageMessage08
                    avatarSeven="images/img_avatar_48x48.png"
                    className="flex flex-row justify-start mt-[49px] gap-[15px]"
                  />
                  <div className="flex flex-row justify-start items-center mt-[101px] gap-[15px]">
                    <Button size="3xl" className="w-12">
                      <Img src="images/img_button_icon_white_a700.svg" />
                    </Button>
                    <Input
                      color="gray_100"
                      size="xl"
                      name="iconemoji"
                      placeholder="Start typing…"
                      suffix={<Img src="images/img_icon_emoji.svg" alt="Icon/Emoji" />}
                      className="w-[91%] gap-[35px] rounded-[12px]"
                    />
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
