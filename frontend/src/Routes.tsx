import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import Signup from "pages/Signup";
import PasswordRecovery from "pages/PasswordRecovery";
import Home1 from "pages/Home1";
import SingleVideo from "pages/SingleVideo";
import Stories from "pages/Stories";
import SingleStory from "pages/SingleStory";
import SinglePost from "pages/SinglePost";
import VideoFullScreen from "pages/VideoFullScreen";
import Events from "pages/Events";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "passwordrecovery",
      element: <PasswordRecovery />,
    },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "singlevideo",
      element: <SingleVideo />,
    },
    {
      path: "stories",
      element: <Stories />,
    },
    // {
    //   path: "singlestory",
    //   element: <SingleStory />,
    // },
    {
      path: "singlepost",
      element: <SinglePost />,
    },
    {
      path: "videofullscreen",
      element: <VideoFullScreen />,
    },
    {
      path: "events",
      element: <Events />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
