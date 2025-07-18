import Image from "next/image";
import { useEffect, useState } from "react";


export const ShimmerMessages = () => {
  const messages = [
    "Thinking...",
    "Loading...",
    "Generating...",
    "Analyzing your request...",
    "Generating response...",
    "Building your website...",
    "Rendering your page...",
    "Optimizing layout...",
    "Adding final touches...",
    "Almost ready...",
  ]

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex: number) => (prevIndex + 1) % messages.length);
    }, 2000)

    return () => clearInterval(interval);
  }, [messages.length])

  return (
    <div className="flex items-center gap-2">
      <span className="text-base text-muted-foreground animate-pulse">
        {messages[currentMessageIndex]}
      </span>
    </div>
  )
}

export const MessageLoading = () => {
  return (
    <div className="flex flex-col group px-2 pb-4">
      <div className="flex items-center gap-2 pl-2 mb-2">
        <Image
          src="/logo.svg"
          alt="Talk2Build Logo"
          width={18}
          height={18}
          className="shrink-0"
        />
        <span className="text-sm font-medium">Talk2Build</span>
      </div>
      <div className="pl-8.5 flex flex-col gap-y-4">
        <ShimmerMessages />
      </div>
    </div>
  )
}