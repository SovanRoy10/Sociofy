import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordRecovery from "./pages/PasswordRecovery";
import VideoChat from "./pages/VideoChat";
import GroupMessage from "./pages/GroupMessage";

import Messages from "./pages/Messages";
import DirectMessage from "./pages/DirectMessage";

import MyProfile from "./pages/MyProfile";
import Settings from "./pages/Settings";

const ProjectRoutes = () => {
  const element = useRoutes([
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
      path: "videochat",
      element: <VideoChat />,
    },
    {
      path: "groupmessage",
      element: <GroupMessage />,
    },
   
    {
      path: "messages",
      element: <Messages />,
    },
    {
      path: "directmessage",
      element: <DirectMessage />,
    },
   
    {
      path: "myprofile",
      element: <MyProfile />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
