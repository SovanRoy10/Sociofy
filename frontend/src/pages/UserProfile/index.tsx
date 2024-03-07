import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, Button } from "../../components";
import DirectMessageProfile3 from "../../components/DirectMessageProfile3";
import HomeCard06 from "../../components/HomeCard06";
import StoriesNotifications from "../../components/StoriesNotifications";

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title>Rupal's Application2</title>
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
          <div className="h-[1292px] w-[85%] relative">
            <header className="flex flex-row justify-between items-center w-full top-[3%] right-0 left-0 m-auto absolute">
              <div className="flex flex-row justify-center">
                <Button
                  color="gray_500_33"
                  size="7xl"
                  leftIcon={<Img src="images/img_icon_arrowleft_gray_500.svg" alt="Icon/Arrow-Left" />}
                  className="w-full gap-2.5 font-sfprodisplay font-bold"
                >
                  Back
                </Button>
              </div>
              <div className="flex flex-row justify-between items-center w-3/5">
                <div className="flex flex-row justify-between items-start w-2/5">
                  <div className="flex flex-col items-center justify-start w-[15%] gap-[7px]">
                    <Heading as="p">Posts</Heading>
                    <div className="h-0.5 w-full bg-gray-900" />
                  </div>
                  <div className="flex flex-row justify-center">
                    <Heading as="p" className="!text-gray-500 text-center">
                      Photos
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-center">
                    <Heading as="p" className="!text-gray-500 text-center">
                      Videos
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-center">
                    <Heading as="p" className="!text-gray-500 text-center">
                      Events
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[17%] gap-5">
                  <StoriesNotifications abOne="1" className="flex flex-col items-center justify-start h-12 w-12" />
                  <Img
                    src="images/img_avatar_48x48.png"
                    alt="avatar_one"
                    className="w-12 object-cover rounded-[12px]"
                  />
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center justify-start w-[29%] gap-[30px] left-0 top-[11%] p-[30px] m-auto bg-white-A700 absolute rounded-[12px]">
              <div className="flex flex-col items-center justify-start w-[76%] mt-2.5 gap-[30px]">
                <div className="flex flex-col items-center justify-start w-[95%] gap-2">
                  <DirectMessageProfile3
                    avatarThree="images/img_avatar_108x108.png"
                    className="flex flex-col items-center justify-start h-[108px] w-[108px]"
                  />
                  <Heading size="2xl" as="h1" className="text-center">
                    Edward Ford
                  </Heading>
                  <Text as="p" className="text-center !font-normal">
                    @edwardford
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-full gap-[22px] px-1.5">
                  <div className="flex flex-row justify-start w-[42%] gap-2">
                    <Heading size="lg" as="h2">
                      518
                    </Heading>
                    <Heading size="lg" as="h3" className="mr-px !text-gray-500">
                      Posts
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start w-[48%] gap-[5px]">
                    <Heading size="lg" as="h4">
                      22k
                    </Heading>
                    <Heading size="lg" as="h5" className="!text-gray-500">
                      Friends
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full mb-2.5">
                <div className="flex flex-row justify-between items-center w-full">
                  <Button
                    color="green_400"
                    size="7xl"
                    leftIcon={<Img src="images/img_button.svg" alt="Icon/Check" />}
                    className="gap-2 font-sfprodisplay font-bold min-w-[149px]"
                  >
                    Freinds
                  </Button>
                  <Button size="3xl" shape="square" className="w-12">
                    <Img src="images/img_button_icon_5.svg" />
                  </Button>
                  <Button color="gray_500_33" size="3xl" variant="outline" className="w-12">
                    <Img src="images/img_button_icon_gray_900.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start mt-10 pt-0.5 gap-3">
                  <Heading size="s" as="h6" className="tracking-[1.00px] uppercase">
                    About
                  </Heading>
                  <Text as="p" className="!font-normal !leading-[22px]">
                    Travel, Adventure & Lifestyle
                    <br />
                    Photographer & Digital Influencer
                    <br />
                    Nikon Ambassador
                    <br />
                    {`Let's Work:`}
                    <br />
                    user@mail.com
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-[58px] gap-5">
                  <Heading size="lg" as="h6" className="!font-sfprodisplay">
                    Friends
                  </Heading>
                  <div className="flex flex-col w-full gap-[15px]">
                    <div className="flex flex-row justify-between w-full">
                      <Img
                        src="images/img_avatar_45x45.png"
                        alt="avatar_one"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_55.png"
                        alt="avatar_three"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_56.png"
                        alt="avatar_five"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_57.png"
                        alt="avatar_seven"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_58.png"
                        alt="avatar_nine"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                    </div>
                    <div className="flex flex-row justify-between w-full">
                      <Img
                        src="images/img_avatar_59.png"
                        alt="avatar_one"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_60.png"
                        alt="avatar_three"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_61.png"
                        alt="avatar_five"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_62.png"
                        alt="avatar_seven"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_63.png"
                        alt="avatar_nine"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                    </div>
                    <div className="flex flex-row justify-between w-full">
                      <Img
                        src="images/img_avatar_64.png"
                        alt="avatar_one"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_65.png"
                        alt="avatar_three"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_66.png"
                        alt="avatar_five"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_67.png"
                        alt="avatar_seven"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_68.png"
                        alt="avatar_nine"
                        className="w-[45px] object-cover rounded-[14px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1292px] w-[67%] right-0 bottom-0 top-0 m-auto absolute">
              <Img
                src="images/img_modal_desktop_white_white_a700.svg"
                alt="modaldesktop"
                className="h-[1024px] top-0 right-0 left-0 m-auto absolute"
              />
              <div className="h-[1154px] w-[87%] bottom-0 right-0 left-0 m-auto absolute">
                <div className="flex flex-col items-start justify-start w-full top-0 right-0 left-0 m-auto absolute">
                  <div className="flex flex-row w-full gap-[30px]">
                    <HomeCard06
                      optionsThree="images/img_options_gray_500.svg"
                      imageSeven="images/img_image_17.png"
                      title="The Best Fashion Instagrams of the Week: Céline Dion, Lizzo"
                      iconheartSeven="images/img_icon_heart_regular_gray_500.svg"
                      iconcomment="images/img_icon_comment_gray_500.svg"
                      className="flex flex-col items-center justify-start w-[48%] mb-10"
                    />
                    <HomeCard06
                      optionsThree="images/img_options_gray_500.svg"
                      title="The Best Fashion Instagrams of the Week: Céline Dion, Lizzo"
                      iconheartSeven="images/img_icon_heart_regular_gray_500.svg"
                      iconcomment="images/img_icon_comment_gray_500.svg"
                      className="flex flex-col items-center justify-start w-[48%]"
                    />
                  </div>
                  <HomeCard06
                    optionsThree="images/img_options_gray_500.svg"
                    imageSeven="images/img_image_150x272.png"
                    title="The Best Fashion Instagrams of the Week: Céline Dion, Lizzo"
                    iconheartSeven="images/img_icon_heart_regular_gray_500.svg"
                    iconcomment="images/img_icon_comment_gray_500.svg"
                    className="flex flex-col items-center justify-start mt-[-10px]"
                  />
                </div>
                <HomeCard06
                  optionsThree="images/img_options_gray_500.svg"
                  imageSeven="images/img_image_39.png"
                  title="The Best Fashion Instagrams of the Week: Céline Dion, Lizzo"
                  iconheartSeven="images/img_icon_heart_regular_gray_500.svg"
                  iconcomment="images/img_icon_comment_gray_500.svg"
                  className="flex flex-col items-center justify-start w-[48%] bottom-0 right-0 m-auto absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
