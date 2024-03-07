import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      style={{
        // height: "100vh",
        padding: "20px",
        backgroundColor: "#232323",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/login" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Login
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/signup"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Signup
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/passwordrecovery"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            PasswordRecovery
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/home1"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Home1
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/singlevideo"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            SingleVideo
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/stories"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Stories
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/singlestory"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            SingleStory
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/singlepost"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            SinglePost
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/videofullscreen"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            VideoFullScreen
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/events"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Events
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/videochat" style={{ color: "#87CEFA", textDecoration: "none" }}>
            VideoChat
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/groupmessage" style={{ color: "#87CEFA", textDecoration: "none" }}>
            GroupMessage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/myfriends" style={{ color: "#87CEFA", textDecoration: "none" }}>
            MyFriends
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/userprofile" style={{ color: "#87CEFA", textDecoration: "none" }}>
            UserProfile
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/gallery" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Gallery
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/singleevent" style={{ color: "#87CEFA", textDecoration: "none" }}>
            SingleEvent
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/searchresults" style={{ color: "#87CEFA", textDecoration: "none" }}>
            SearchResults
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/notifications" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Notifications
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/messages" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Messages
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/directmessage" style={{ color: "#87CEFA", textDecoration: "none" }}>
            DirectMessage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/singlephoto" style={{ color: "#87CEFA", textDecoration: "none" }}>
            SinglePhoto
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/myprofile" style={{ color: "#87CEFA", textDecoration: "none" }}>
            MyProfile
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/settings" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
