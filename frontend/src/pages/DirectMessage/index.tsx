import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Input, Img, Button, Text, Heading } from "../../components";
import DirectMessageMessage07 from "../../components/DirectMessageMessage07";
import DirectMessageMessage08 from "../../components/DirectMessageMessage08";
import DirectMessageProfile3 from "../../components/DirectMessageProfile3";
import MessagesMessage from "../../components/MessagesMessage";
import StoriesNotifications from "../../components/StoriesNotifications";

export default function DirectMessagePage() {
  const [searchBarValue5, setSearchBarValue5] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Tulshi's Application1</title>
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
            <header className="flex flex-row justify-between items-center w-full top-[4%] right-0 left-0 m-auto absolute">
              <div className="flex flex-row justify-start items-center w-[31%] gap-[15px]">
                <Input
                  size="xl"
                  name="search"
                  placeholder="Search in social…"
                  value={searchBarValue5}
                  onChange={(e: string) => setSearchBarValue5(e)}
                  prefix={<Img src="images/img_icon_search.svg" alt="Icon/Search" className="cursor-pointer" />}
                  suffix={
                    searchBarValue5?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue5("")} height={18} width={18} />
                    ) : null
                  }
                  className="w-[82%] gap-[15px] font-sfprodisplay rounded-[12px]"
                />
                <Button color="green_400" size="3xl" className="w-12">
                  <Img src="images/img_icon_comment_white_a700.svg" />
                </Button>
              </div>
              <div className="flex flex-row justify-start w-[10%] gap-5">
                <StoriesNotifications abOne="1" className="flex flex-col items-center justify-start h-12 w-12" />
                <Img src="images/img_avatar_48x48.png" alt="avatar_one" className="w-12 object-cover rounded-[12px]" />
              </div>
            </header>
            <div className="flex flex-col items-center justify-start w-[32%] gap-10 bottom-[5%] left-0 m-auto absolute">
              <div className="flex flex-col items-start justify-start w-[92%] gap-[39px]">
                <Heading size="2xl" as="h1">
                  Inbox
                </Heading>
                <div className="flex flex-row justify-start items-start w-full">
                  <div className="flex flex-col items-center justify-start w-[33%] gap-[7px]">
                    <Heading as="h2">Direct Messages</Heading>
                    <div className="h-0.5 w-full bg-gray-900" />
                  </div>
                  <div className="flex flex-row justify-start w-[23%] ml-5">
                    <Heading as="h3" className="!text-gray-500">
                      Group Chat
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start w-[18%] ml-[23px]">
                    <Heading as="h4" className="!text-gray-500">
                      Archived
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-10">
                <MessagesMessage group233="1" className="flex flex-row justify-between w-[90%] mx-auto" />
                <MessagesMessage
                  billyGreenOne="images/img_avatar_29.png"
                  group233="1"
                  className="flex flex-row justify-between w-[90%] mx-auto"
                />
                <MessagesMessage
                  billyGreenOne="images/img_avatar_30.png"
                  group233="1"
                  className="flex flex-row justify-between w-[90%] mx-auto"
                />
                <div className="flex flex-row justify-center w-full p-5 bg-white-A700 rounded-[12px]">
                  <MessagesMessage
                    billyGreenOne="images/img_avatar_31.png"
                    time="Yesterday"
                    className="flex flex-row justify-between w-full"
                  />
                </div>
                <MessagesMessage
                  billyGreenOne="images/img_avatar_32.png"
                  time="Yesterday"
                  className="flex flex-row justify-between w-[90%] mx-auto"
                />
                <MessagesMessage
                  billyGreenOne="images/img_avatar_33.png"
                  time="Oct 26"
                  className="flex flex-row justify-between w-[90%] mx-auto"
                />
                <MessagesMessage
                  billyGreenOne="images/img_avatar_34.png"
                  time="Oct 26"
                  group233="1"
                  className="flex flex-row justify-between w-[90%] mx-auto"
                />
                <MessagesMessage
                  billyGreenOne="images/img_avatar_35.png"
                  time="Oct 26"
                  group233="1"
                  className="flex flex-row justify-between w-[90%] mx-auto"
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
                  <div className="flex flex-row justify-between items-center w-[99%]">
                    <div className="flex flex-row justify-start items-center w-[30%] gap-[15px]">
                      <DirectMessageProfile3 className="flex flex-col items-center justify-start h-[58px] w-[58px]" />
                      <div className="flex flex-col items-start justify-start w-[65%] gap-2">
                        <Heading size="xl" as="h5">
                          Marriet Miles
                        </Heading>
                        <Text as="p">Online</Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-start w-auto gap-10">
                      <Img src="images/img_icon_add_user.svg" alt="iconadduser_one" className="h-8 w-8" />
                      <Img src="images/img_icon_phone.svg" alt="iconphone_one" className="h-[25px] w-[25px] mt-[3px]" />
                      <Img src="images/img_group_337.svg" alt="iconvideo_one" className="h-[25px] w-[25px] mt-[3px]" />
                      <Img src="images/img_icon_eye.svg" alt="iconoptions_one" className="h-[25px] w-[25px] mt-[3px]" />
                    </div>
                  </div>
                  <DirectMessageMessage07 className="flex flex-row justify-start mt-[70px]" />
                  <DirectMessageMessage08 className="flex flex-row justify-start mt-[49px] gap-[15px]" />
                  <DirectMessageMessage08
                    avatarSeven="images/img_avatar_48x48.png"
                    className="flex flex-row justify-start mt-[50px] gap-[15px]"
                  />
                  <DirectMessageMessage07
                    avatarFive="images/img_avatar.png"
                    className="flex flex-row justify-start mt-[50px]"
                  />
                  <DirectMessageMessage08
                    avatarSeven="images/img_avatar_48x48.png"
                    className="flex flex-row justify-start mt-[49px] gap-[15px]"
                  />
                  <div className="flex flex-row justify-start items-center mt-10 gap-[15px]">
                    <Img
                      src="images/img_avatar.png"
                      alt="avatar_fifteen"
                      className="w-[38px] object-cover rounded-[12px]"
                    />
                    <Img src="images/img_group_1.svg" alt="image" className="h-[13px]" />
                  </div>
                  <div className="flex flex-row justify-start items-center mt-[45px] gap-[15px]">
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
