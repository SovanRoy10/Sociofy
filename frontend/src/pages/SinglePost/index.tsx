import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Input } from "../../components";
import Header from "../../components/Header";
import SinglePostComment from "../../components/SinglePostComment";

export default function SinglePostPage() {
  return (
    <>
      <Helmet>
        <title>Sovan's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-start w-full gap-[15px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-[12%] p-[45px]">
          <Img
            src="images/img_standard_collection_white_a700.svg"
            alt="standard_one"
            className="h-12 w-12 mb-[886px]"
          />
        </div>
        <div className="flex flex-row justify-start w-[88%]">
          <div className="h-[1024px] w-full pl-20 rounded-tl-[32px] rounded-bl-[32px] bg-white-A700 relative">
            <Header className="flex flex-row justify-between items-center w-full top-[4%] right-0 left-0 m-auto absolute" />
            <div className="flex flex-col items-center justify-start w-[35%] h-full right-0 bottom-0 top-0 m-auto absolute">
              <div className="flex flex-col items-center justify-start w-full gap-[70px] p-10 rounded-tl-[32px] rounded-bl-[32px] bg-gray-900">
                <div className="flex flex-col items-start justify-start w-[96%] mt-[99px] gap-[41px]">
                  <Heading size="lg" as="h1">
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
            <div className="flex flex-col items-center justify-start w-[51%] bottom-[4%] left-[6%] m-auto absolute">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-row justify-start items-center w-1/4 gap-2.5">
                    <Img src="images/img_avatar.png" alt="avatar_three" className="w-12 object-cover rounded-[12px]" />
                    <div className="flex flex-col items-start justify-start w-[64%] gap-[5px]">
                      <Text as="p" className="!text-gray-900">
                        Katherine Cole
                      </Text>
                      <Text size="xs" as="p" className="!text-gray-500">
                        5min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-[46%]">
                    <div className="flex flex-row justify-start items-center p-1.5">
                      <Img src="images/img_icon_heart_regular.svg" alt="iconheart_one" className="h-3.5 w-3.5" />
                      <Text as="p" className="ml-[5px] !text-gray-900">
                        326
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-1.5 p-[5px]">
                      <Img src="images/img_icon_comment.svg" alt="iconcomment_one" className="h-3.5 w-3.5" />
                      <Text as="p" className="!text-gray-900">
                        148
                      </Text>
                    </div>
                    <div className="flex flex-row justify-center items-center p-1.5">
                      <Img src="images/img_icon_share.svg" alt="iconshare_one" className="h-3.5 w-3.5 ml-1" />
                      <Text as="p" className="ml-1 !text-gray-900">
                        Share
                      </Text>
                    </div>
                    <Img src="images/img_icon_eye.svg" alt="options_one" className="h-[38px] w-[38px]" />
                  </div>
                </div>
                <Img
                  src="images/img_image_150x290.png"
                  alt="image_one"
                  className="w-full mt-10 object-cover rounded-lg"
                />
                <Heading size="xl" as="h2" className="mt-10 !text-gray-900">
                  The Best Fashion Instagrams of the Week: Céline Dion, Lizzo, and More
                </Heading>
                <Text as="p" className="mt-6 !text-gray-500 !font-normal !leading-[22px]">
                  f you are looking for a break from the cold, take a cue from Lizzo: This week, the singer headed to
                  Disneyland in warm and sunny California. She dressed up for the occasion in pure Minnie Mouse style
                  perfection, including a cartoon merch sweatshirt from the artist Shelby Swain, cycling shorts, and
                  adorable pulled-up polka dot socks. All the way over in Montreal, Céline Dion also had quite the
                  wardrobe moment. For a concert, the singer wore a pair of fringed, XXL-flared cowboy jeans by
                  Ukrainian label Ksenia Schnaider. The Kiev-based designer is responsible for other viral denim
                  creations, like her asymmetrical jeans that launched earlier this year. Fun fact: The daring Dion has
                  worn a pair of those, too!
                  <br />
                  Of course, back in New York, there was Marc Jacobs. The designer has been having quite the year when
                  it comes to flexing his fashion muscles on the ’gram. This week, he channeled The Wizard Of Oz with a
                  full-green look that included some shimmery Sies Marjan pants, and a pair of platform boots to anchor
                  the ensemble.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
