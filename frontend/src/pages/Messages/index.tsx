import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading } from "../../components";
import Header1 from "../../components/Header1";
import MessagesMessage from "../../components/MessagesMessage";

export default function MessagesPage() {
  return (
    <>
      <Helmet>
        <title>Tulshi's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col items-center justify-start p-[45px]">
            <Img
              src="images/img_standard_collection_white_a700.svg"
              alt="standard_one"
              className="h-12 w-12 mb-[886px]"
            />
          </div>
          <div className="h-[1024px] w-[85%] relative">
            <Header1 className="flex flex-row justify-between items-center w-full top-[4%] right-0 left-0 m-auto absolute" />
            <div className="flex flex-col items-start justify-start w-[30%] gap-[39px] bottom-[6%] left-0 m-auto absolute">
              <Heading size="2xl" as="h1" className="!font-sfprodisplay">
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
              <div className="flex flex-col w-[98%] gap-10">
                <MessagesMessage group233="1" className="flex flex-row justify-between w-full" />
                <MessagesMessage
                  billyGreenOne="images/img_avatar_29.png"
                  group233="1"
                  className="flex flex-row justify-between w-full"
                />
                <MessagesMessage
                  billyGreenOne="images/img_avatar_30.png"
                  group233="1"
                  className="flex flex-row justify-between w-full"
                />
                <MessagesMessage
                  billyGreenOne="images/img_avatar_31.png"
                  time="Yesterday"
                  className="flex flex-row justify-between w-full"
                />
                <MessagesMessage
                  billyGreenOne="images/img_avatar_32.png"
                  time="Yesterday"
                  className="flex flex-row justify-between w-full"
                />
                <MessagesMessage
                  billyGreenOne="images/img_avatar_33.png"
                  time="Oct 26"
                  className="flex flex-row justify-between w-full"
                />
                <MessagesMessage
                  billyGreenOne="images/img_avatar_34.png"
                  time="Oct 26"
                  group233="1"
                  className="flex flex-row justify-between w-full"
                />
                <MessagesMessage
                  billyGreenOne="images/img_avatar_35.png"
                  time="Oct 26"
                  group233="1"
                  className="flex flex-row justify-between w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[67%] h-full right-0 bottom-0 top-0 m-auto absolute">
              <div className="h-[1024px] w-full relative">
                <Img
                  src="images/img_modal_desktop_white.svg"
                  alt="modaldesktop"
                  className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <div className="flex flex-col items-center justify-start w-[55%] gap-[319px] bottom-[6%] right-0 left-0 m-auto absolute">
                  <div className="flex flex-col items-center justify-start w-full gap-[19px]">
                    <div className="flex flex-col items-center justify-start h-40 w-40">
                      <div className="flex flex-col items-center justify-start h-40 w-40 p-[41px] bg-gray-100 rounded-[50px]">
                        <Img src="images/img_icon_email.svg" alt="iconemail_one" className="h-[78px] w-[78px]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <Heading size="2xl" as="h5" className="!text-gray-500 text-center">
                        It&#39;s nice to chat with someone
                      </Heading>
                      <Text as="p" className="text-center">
                        Pick a person from left menu and start your conversation
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[72%] gap-[5px]">
                    <Img src="images/img_icon_download.svg" alt="icondownload" className="h-[18px] w-[18px]" />
                    <Text as="p">Social is available for Mac</Text>
                    <Text as="p" className="!text-gray-900">
                      Download it now
                    </Text>
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
