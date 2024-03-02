import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Input, Heading } from "../../components";

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>Sovan's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-[58%]">
            <div className="h-[1024px] w-full relative">
              <Img
                src="images/img_image.png"
                alt="image_one"
                className="justify-center h-[1024px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-center justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Heading size="xl" as="h1" className="!text-white-A700 text-center">
                  Hello!
                </Heading>
                <a href="#" className="mt-3">
                  <Text as="p" className="!text-white-A700 text-center">
                    Already have an account?
                  </Text>
                </a>
                <div className="flex flex-row justify-center w-full mt-[30px]">
                  <Button size="7xl" className="w-full font-bold rounded-[29px]">
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[46%] ml-[-45px]">
            <div className="h-[1024px] w-full relative">
              <Img
                src="images/img_modal_desktop.svg"
                alt="modaldesktop"
                className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
              />
              <div className="flex flex-col items-start justify-start w-[54%] bottom-[5%] right-0 left-0 m-auto absolute">
                <Img src="images/img_standard_collection.svg" alt="standard_one" className="h-[41px] w-[41px]" />
                <div className="flex flex-col items-start justify-start mt-[50px] gap-3.5">
                  <a href="#">
                    <Heading size="lg" as="h2">
                      Create an account
                    </Heading>
                  </a>
                  <Text as="p">Sign up to continue </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-[62px] gap-[22px]">
                  <div className="flex flex-col items-start justify-start w-full gap-3">
                    <Heading as="h3" className="tracking-[1.00px] uppercase">
                      name
                    </Heading>
                    <Input color="gray_500" variant="outline" name="name" placeholder="Anne Carry" className="w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-3">
                    <Heading as="h4" className="tracking-[1.00px] uppercase">
                      email
                    </Heading>
                    <Input
                      color="gray_500"
                      variant="outline"
                      type="email"
                      name="email"
                      placeholder="user@mail.com"
                      suffix={<Img src="images/img_icon_checkcircle_green_400.svg" alt="Icon/Check-Circle" />}
                      className="w-full gap-[35px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-3">
                    <Heading as="h5" className="tracking-[1.00px] uppercase">
                      Password
                    </Heading>
                    <Input
                      color="gray_500"
                      variant="outline"
                      type="password"
                      name="password"
                      placeholder="Password@123"
                      suffix={<Img src="images/img_icon_eye.svg" alt="Icon/Eye" />}
                      className="w-full gap-[35px]"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start mt-10">
                  <Button size="7xl" className="w-full font-bold rounded-[29px]">
                    Create an account
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-8 gap-8">
                  <Text size="xs" as="p">
                    Or connect with socials
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <Button
                      color="indigo_600"
                      size="7xl"
                      leftIcon={<Img src="images/img_icon_facebook.svg" alt="Icon/Facebook" />}
                      className="w-full gap-[3px] font-bold rounded-[29px]"
                    >
                      Connect with Facebook
                    </Button>
                    <div className="flex flex-row justify-center w-full">
                      <Button
                        color="gray_900"
                        size="7xl"
                        leftIcon={<Img src="images/img_icon_apple_white_a700.svg" alt="Icon/Apple" />}
                        className="w-full gap-[5px] font-bold rounded-[29px]"
                      >
                        Connect with Apple
                      </Button>
                    </div>
                    <Button
                      color="gray_500_66"
                      size="7xl"
                      variant="outline"
                      leftIcon={<Img src="images/img_icon_google.svg" alt="Icon/Google" />}
                      className="w-full gap-1 font-bold rounded-[29px]"
                    >
                      Connect with Google+
                    </Button>
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
