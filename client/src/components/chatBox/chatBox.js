"use client"

import { Avatar } from "@material-ui/core";
// import { useSession } from "next-auth/client";
import React from "react";
import { useContext } from 'react';
import UserContext from "@/context/UserContext";
import { ReplyBox } from "../replyBox/replyBox";

import styles from "./chatBox.module.scss";

const Chat = ({ message }) => {
  return <span className={styles.message}>{message.text}</span>;
};

const options = {
  weekday: "short",
  day: "numeric",
};

export const ChatBox = ({ item }) => {
  const { customer, profile, messages } = item;
  const { user, fbUser, handleSetUser } = useContext(UserContext);

  // const [session] = useSession();

  const date = new Date("2023-09-06T21:05:28+0000");

  const timeStamp = (
    <>
      {date.toLocaleDateString("en-US", options)}{" "}
      {date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
    </>
  );

  return (
    <div className={styles.chatBox}>
      <div className={styles.history}>
        {messages
          .slice()
          .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
          .map((message, idx) => {
            return (message.from.name !== fbUser.pages.name) ? (
              <div key={idx} className={styles.leftChats}>
                <div className={styles.chatItem}>
                  <div className={styles.avatar}>
                    <Avatar src={profile} />
                  </div>
                  <div className={styles.messages}>
                    {/* {message.map((message, i) => ( */}
                    <Chat key={idx} message={message} />
                    {/* ))} */}
                    <small className={styles.date}>
                      {customer.name} {timeStamp}
                    </small>
                  </div>
                </div>
              </div>
            ) : (
              <div key={idx} className={styles.rightChats}>
                <div className={styles.chatItem}>
                  <div className={styles.messages}>
                    {/* {message.map((message, i) => ( */}
                    <Chat key={idx} message={message} />
                    {/* ))} */}
                    <small className={styles.date}>
                      {user && user.name} {timeStamp}
                    </small>
                  </div>
                  <div className={styles.avatar}>
                    <Avatar src={user && user.picture} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles.input}>
        {/* <input type="text" placeholder={`Message ${customer.name}`} /> */}
        <ReplyBox customerName={customer.name} customerId={customer.id} />
      </div>
    </div>
  );
};
