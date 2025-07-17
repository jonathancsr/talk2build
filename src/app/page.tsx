"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [text, setText] = useState("");
  const trpc = useTRPC();
  const { data: messages } = useQuery(trpc.messages.getMany.queryOptions());
  const createMessage = useMutation(
    trpc.messages.create.mutationOptions({
      onSuccess: () => {
        toast.success("Message created");
      },
    })
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
      <Button
        disabled={createMessage.isPending}
        onClick={() => createMessage.mutate({ value: text })}
        className="pointer"
      >
        Invoke Background Job
      </Button>
      {JSON.stringify(messages)}
    </div>
  );
};

export default Page;
