import React from "react";
import { Helmet } from "react-helmet";
import { Img, Input, Heading, Text } from "../../components";
import Header from "../../components/Header";
import SinglePostComment from "../../components/SinglePostComment";
import SingleVideoChipsmall from "../../components/SingleVideoChipsmall";
import SingleVideoVideoplayer from "../../components/SingleVideoVideoplayer";
import SingleVideoVideoplayer1 from "../../components/SingleVideoVideoplayer1";

export default function SingleVideoPage() {
  return (
    <>
      <Helmet>
        <title>Sovan's Application1</title>
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
            <Header className="flex flex-row justify-between items-center w-full top-[4%] right-0 left-0 m-auto absolute" />
            <div className="flex flex-col items-start justify-start w-1/2 bottom-[1%] left-[7%] m-auto absolute">
              <SingleVideoVideoplayer className="flex flex-row justify-start" />
              <div className="flex flex-row justify-between items-center w-full mt-[30px]">
                <div className="flex flex-row justify-center w-[24%]">
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_avatar.png" alt="avatar_three" className="w-12 object-cover rounded-[12px]" />
                    <div className="flex flex-col items-start justify-start w-[61%] gap-[5px]">
                      <Text as="p" className="!text-gray-900">
                        Katherine Cole
                      </Text>
                      <Text size="xs" as="p">
                        5min ago
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center w-[45%]">
                  <div className="flex flex-row justify-start items-center w-[17%] gap-[5px]">
                    <Img src="images/img_icon_heart_regular_gray_500.svg" alt="iconheart_one" className="h-3.5 w-3.5" />
                    <Text as="p" className="!text-gray-900">
                      326
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[16%] ml-8 gap-1.5">
                    <Img src="images/img_icon_comment_gray_500.svg" alt="iconcomment_one" className="h-3.5 w-3.5" />
                    <Text as="p" className="!text-gray-900">
                      148
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-1/5 ml-10 gap-1">
                    <Img src="images/img_icon_share.svg" alt="iconshare_one" className="h-3.5 w-3.5" />
                    <Text as="p" className="!text-gray-900">
                      Share
                    </Text>
                  </div>
                  <Img src="images/img_icon_eye.svg" alt="options_one" className="h-[38px] w-[38px] ml-6" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full mt-[30px] gap-2">
                <div className="flex flex-col items-center justify-start gap-5">
                  <Heading size="xl" as="h1" className="!leading-9">
                    Tropical Fresh Tourism Is Back In Full Swing In Cancun Mexico
                  </Heading>
                  <Text as="p" className="!font-normal !leading-[22px]">
                    Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism
                    minister predicts Cancun will draw as many visitors in 2006 as it did two years ago. And the travel
                    deals are great! If you haven’t been, now may be the best time to take a vacation to Cancun.
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[59%] gap-2.5">
                  <SingleVideoChipsmall className="flex flex-row justify-start w-[15%]" />
                  <SingleVideoChipsmall className="flex flex-row justify-start w-[16%]" />
                  <SingleVideoChipsmall className="flex flex-row justify-start w-[12%]" />
                  <SingleVideoChipsmall className="flex flex-row justify-start w-[12%]" />
                  <SingleVideoChipsmall className="flex flex-row justify-start w-[18%]" />
                  <SingleVideoChipsmall className="flex flex-row justify-start w-[17%]" />
                </div>
              </div>
              <Heading size="s" as="h2" className="mt-[41px]">
                Related Videos
              </Heading>
              <div className="flex flex-row w-full mt-[21px] gap-[18px]">
                <SingleVideoVideoplayer1
                  imageFive="images/img_image_380x255.png"
                  className="h-[115px] w-[32%] relative"
                />
                <SingleVideoVideoplayer1
                  imageFive="images/img_image_115x200.png"
                  className="h-[115px] w-[32%] relative"
                />
                <SingleVideoVideoplayer1 imageFive="images/img_image_23.png" className="h-[115px] w-[32%] relative" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[35%] h-full right-0 bottom-0 top-0 m-auto absolute">
              <div className="flex flex-col items-center justify-start w-full gap-[70px] p-10 rounded-tl-[32px] rounded-bl-[32px] bg-gray-900">
                <div className="flex flex-col items-start justify-start w-[96%] mt-[99px] gap-[41px]">
                  <Heading size="lg" as="h3" className="!text-white-A700">
                    Comments (148)
                  </Heading>
                  <div className="flex flex-col w-full gap-8">
                    <SinglePostComment
                      image="images/img_icon_heart_filled.svg"
                      imageOne="images/img_icon_comment.svg"
                      className="flex flex-row justify-center w-full"
                    />
                    <SinglePostComment
                      billyGreenOne="images/img_avatar_13.png"
                      timezone="Awesome Edward, remeber that five tips for low cost "
                      image="images/img_icon_heart_regular.svg"
                      imageOne="images/img_icon_comment.svg"
                      className="flex flex-row justify-center w-full"
                    />
                    <SinglePostComment
                      billyGreenOne="images/img_avatar_14.png"
                      image="images/img_icon_heart_filled.svg"
                      imageOne="images/img_icon_comment.svg"
                      className="flex flex-row justify-center w-full"
                    />
                    <SinglePostComment
                      billyGreenOne="images/img_avatar_15.png"
                      timezone="Awesome Edward, remeber that five tips for low cost "
                      image="images/img_icon_heart_regular.svg"
                      imageOne="images/img_icon_comment.svg"
                      className="flex flex-row justify-center w-full"
                    />
                    <SinglePostComment
                      billyGreenOne="images/img_avatar_16.png"
                      image="images/img_icon_heart_filled.svg"
                      imageOne="images/img_icon_comment.svg"
                      className="flex flex-row justify-center w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-[96%] gap-[25px] p-[11px] bg-white-A700 rounded">
                  <Input
                    size="xs"
                    shape="square"
                    name="comment"
                    placeholder="Write a comment…"
                    suffix={<Img src="images/img_icon_emoji.svg" alt="Icon/Emoji" />}
                    className="w-[82%] ml-1 gap-3"
                  />
                  <div className="flex flex-col items-center justify-start h-3.5 w-3.5 mr-[15px]">
                    <Img src="images/img_icon_send.svg" alt="iconsend_one" className="h-3.5 w-3.5" />
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
