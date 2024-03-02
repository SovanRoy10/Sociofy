import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../components";
import VideoFullScreenModaldesktop from "../../components/VideoFullScreenModaldesktop";

export default function VideoFullScreenPage() {
  return (
    <>
      <Helmet>
        <title>Sovan's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-start w-full gap-[5px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-[12%] p-[45px]">
          <Img
            src="images/img_standard_collection_white_a700.svg"
            alt="standard_one"
            className="h-12 w-12 mb-[886px]"
          />
        </div>
        <VideoFullScreenModaldesktop
          threehundredtwe="Share"
          onehundredforty="Share"
          share="Share"
          className="flex flex-row justify-start w-[89%]"
        />
      </div>
    </>
  );
}
