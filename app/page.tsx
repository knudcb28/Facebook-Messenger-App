import React from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { Message } from "../typings";
import { getServerSession } from "next-auth";

async function HomePage() {
  const data = await fetch(`${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`).then(
    (res) => res.json()
  );

  const messages: Message[] = data.messages;
  const session = await getServerSession();

  return (
    <main>
      {/* MessageList */}
      <MessageList initialMessages={messages}/>
      {/* ChatInput */}
      <ChatInput session={session}/>
    </main>
  );
}

export default HomePage;
