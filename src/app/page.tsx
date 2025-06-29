"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.createUser.queryOptions({ text: "buddy" }));

  return <div className="font-bold text-rose-500">{data?.greeting}</div>;
};

export default Page;
