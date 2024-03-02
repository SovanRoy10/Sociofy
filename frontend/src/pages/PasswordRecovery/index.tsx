import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Img, Heading, Text } from "../../components";

export default function PasswordRecoveryPage() {
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
                    Remember your password?
                  </Text>
                </a>
                <div className="flex flex-row justify-center w-full mt-[30px]">
                  <Button size="7xl" className="w-full font-bold rounded-[29px]">
                    Lognin
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
              <div className="flex flex-col items-start justify-start w-[54%] top-[9%] right-0 left-0 m-auto absolute">
                <Img src="images/img_standard_collection.svg" alt="standard_one" className="h-[41px] w-[41px]" />
                <div className="flex flex-col items-start justify-start mt-[62px] gap-[11px]">
                  <Heading size="lg" as="h2">
                    Password Recovery
                  </Heading>
                  <Text as="p">Enter your email to recover your password</Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-[62px] gap-3">
                  <Heading as="h3" className="tracking-[1.00px] uppercase">
                    Email
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
                <div className="flex flex-row justify-start mt-5">
                  <Button size="7xl" className="w-full font-bold rounded-[29px]">
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
