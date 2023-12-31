import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import ChatsPage from "./ChatsPage";
import AuthPage from "./AuthPage";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState(undefined);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? (
        <ChatsPage user={user} />
      ) : (
        <AuthPage onAuth={(user) => setUser(user)} />
      )}
    </>
  );
}
