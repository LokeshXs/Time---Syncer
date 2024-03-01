


import { cn } from "@/lib/utils";
import {motion,useAnimate,stagger} from "framer-motion";
import { useEffect } from "react";

type Propstype = {
  who:'client'|'freelancer';
  message:string;
}

export default function ChatBubble({who,message}:Propstype){


 

  return (
    <motion.div initial={{opacity:0,x:who === "client"?-40:40}}  id="chat" className={cn("px-2.5 py-2 text-xl max-lg:text-sm text-primary-foreground font-normal max-w-[340px] max-lg:max-w-[200px] inline-flex items-center rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ",{
      "bg-primary self-end hover:bg-primary":who === "freelancer",
      "bg-muted-foreground/90 self-start hover:bg-muted-foreground/90":who === "client",
    })}  >
      {message}
    </motion.div>
  )

}