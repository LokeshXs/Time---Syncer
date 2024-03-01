"use client";

import { useEffect } from "react";
import ChatBubble from "./ChatBubble";
import {motion,useAnimate,stagger} from "framer-motion";
export default function Hero(){
  const [scope,animate] = useAnimate();

  useEffect(()=>{
    animate("#chat",{opacity:1,x:0},{duration:0.8,type:"spring",delay:stagger(1, {startDelay:0.1})})
  },[])

  return (
    <div className="flex max-md:flex-col w-full gap-4 items-center container   ">
    <h1 className="flex-1 text-8xl max-xl:text-7xl max-lg:text-5xl font-bold text-primary max-sm:mt-4  ">TimeSyncer</h1>
    <div className="flex-[1.5]  flex justify-center p-8 max-lg:p-4  ">
        <div ref={scope} className="flex flex-col items-start w-[500px] max-lg:w-[300px] overflow-hidden gap-6 p-4 max-lg:p-2 ">
        <ChatBubble who="client" message="Hi Marc 👋" />
        <ChatBubble who="freelancer" message="Hey Stephen 👋 " />
        <ChatBubble who="client" message="Can we discuss how we are doing on prject today?" />
        <ChatBubble who="freelancer" message="Yeah Sure What time?" />
        <ChatBubble who="client" message="Ok then let's meet at 7PM PST then 🤔" />
        <ChatBubble who="freelancer" message="Ok, sure 👍" />
        </div>
    </div>
    
  </div>
  )
}