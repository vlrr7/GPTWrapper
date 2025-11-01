"use client";
import UserRecommendation from "./UserRecommendation";
import { useState, useEffect } from "react";
const page = () => {
  return (
    <div className="flex space-x-4">
      {/*<ChatHistory /> */}
      <div>
        <div id="Intro">
          <p>Hello</p>
        </div>
        <div id="userInput" className="flex space-x-4">
          <form id="putuserinput"></form>
          <button id="sendRequest"></button>
        </div>
        <UserRecommendation></UserRecommendation>
      </div>
    </div>
  );
};

export default page;
