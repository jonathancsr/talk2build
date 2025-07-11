"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [text, setText] = useState("");
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("Background job started");
      },
    })
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ value: text })}
        className="pointer"
      >
        Invoke Background Job
      </Button>
    </div>
  );
};

export default Page;
