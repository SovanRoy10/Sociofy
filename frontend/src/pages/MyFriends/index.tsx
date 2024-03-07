import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";
import Header2 from "../../components/Header2";
import HomeUser from "../../components/HomeUser";
import MyFriendsUser from "../../components/MyFriendsUser";

export default function MyFriendsPage() {
  return (
    <>
      <Helmet>
        <title>Rupal's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-between w-full bg-gray-100">
        <div className="flex flex-col items-center justify-start p-[45px]">
          <Img
            src="images/img_standard_collection_white_a700.svg"
            alt="standard_one"
            className="h-12 w-12 mb-[886px]"
          />
        </div>
        <div className="flex flex-row justify-start items-center w-[85%] gap-[30px]">
          <div className="flex flex-col items-center justify-start w-[63%]">
            <div className="flex flex-col items-center justify-start w-full gap-10">
              <div className="flex flex-row justify-between items-start w-full pt-0.5 pr-0.5">
                <Heading size="2xl" as="h1">
                  My Friends
                </Heading>
                <div className="flex flex-row justify-start items-center mt-[7px] mr-1.5 gap-[3px]">
                  <Text as="p" className="!text-gray-900">
                    Filter
                  </Text>
                  <Img src="images/img_icon_filtter.svg" alt="iconfiltter_one" className="h-3.5 w-3.5" />
                </div>
              </div>
              <div className="justify-center w-full gap-[30px] grid-cols-3 grid min-h-[auto]">
                <MyFriendsUser className="flex flex-row justify-start w-full" />
                <MyFriendsUser
                  billyGreenOne="images/img_avatar_42.png"
                  className="flex flex-row justify-center w-full"
                />
                <MyFriendsUser billyGreenOne="images/img_avatar_43.png" className="flex flex-row justify-end w-full" />
                <MyFriendsUser
                  billyGreenOne="images/img_avatar_44.png"
                  className="flex flex-row justify-start w-full"
                />
                <MyFriendsUser
                  billyGreenOne="images/img_avatar_45.png"
                  className="flex flex-row justify-center w-full"
                />
                <MyFriendsUser
                  billyGreenOne="images/img_avatar_46.png"
                  className="flex flex-row justify-center w-full"
                />
                <MyFriendsUser
                  billyGreenOne="images/img_avatar_47.png"
                  className="flex flex-row justify-start w-full"
                />
                <MyFriendsUser
                  billyGreenOne="images/img_avatar_48.png"
                  className="flex flex-row justify-center w-full"
                />
                <MyFriendsUser billyGreenOne="images/img_avatar_49.png" className="flex flex-row justify-end w-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[35%]">
            <div className="h-[1024px] w-full relative">
              <Img
                src="images/img_modal_desktop_dark_gray_900.svg"
                alt="modaldesktop"
                className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
              />
              <Header2 className="flex flex-row justify-between items-center w-full left-0 top-[4%] m-auto absolute" />
              <div className="flex flex-col items-start justify-start w-[73%] gap-[41px] bottom-[3%] right-0 left-0 m-auto absolute">
                <Heading size="xl" as="h2" className="!text-white-A700">
                  Who to Follow
                </Heading>
                <div className="flex flex-col w-full gap-[30px]">
                  <HomeUser className="flex flex-row justify-between w-full" />
                  <HomeUser cammyHedling="images/img_avatar_3.png" className="flex flex-row justify-between w-full" />
                  <HomeUser cammyHedling="images/img_avatar_7.png" className="flex flex-row justify-between w-full" />
                  <HomeUser cammyHedling="images/img_avatar_50.png" className="flex flex-row justify-between w-full" />
                  <HomeUser cammyHedling="images/img_avatar_1.png" className="flex flex-row justify-between w-full" />
                  <HomeUser cammyHedling="images/img_avatar_21.png" className="flex flex-row justify-between w-full" />
                  <HomeUser cammyHedling="images/img_avatar_5.png" className="flex flex-row justify-between w-full" />
                  <HomeUser cammyHedling="images/img_avatar_51.png" className="flex flex-row justify-between w-full" />
                  <HomeUser cammyHedling="images/img_avatar_52.png" className="flex flex-row justify-between w-full" />
                  <HomeUser cammyHedling="images/img_avatar_53.png" className="flex flex-row justify-between w-full" />
                  <HomeUser cammyHedling="images/img_avatar_54.png" className="flex flex-row justify-between w-full" />
                  <HomeUser cammyHedling="images/img_avatar_18.png" className="flex flex-row justify-between w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
