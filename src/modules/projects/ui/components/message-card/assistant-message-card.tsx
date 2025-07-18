import { format } from 'date-fns';

import { Fragment, MessageType } from "@/generated/prisma";
import { cn } from "@/lib/utils";
import { FragmentCard } from './fragment-message-card';



interface AssistantMessageProps {
  content: string;
  fragment: Fragment | null;
  createdAt: Date;
  isActiveFragment: boolean;
  onFragmentClick: (fragment: Fragment) => void;
  type: MessageType;
}

export const AssistantMessage = ({ content, fragment, createdAt, isActiveFragment, onFragmentClick, type }: AssistantMessageProps) => {
  return (
    <div className={cn("flex flex-col group px-2 pb-4",
      type === "ERROR" && "text-red-700 dark:text-red-500"
    )}>
      <div className="flex items-center gap-2 pl-2 mb-2">
        {/* TODO: add log*/}
        <span className="text-sm font-medium">Talk2Build</span>
        <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
          {format(createdAt, "HH:mm 'on' MMM dd, yyyy")}
        </span>
      </div>
      <div className='pl-8.5 flex flex-col gap-y-4'>
        <span>{content}</span>
        {fragment && type === "RESULT" && (
          <FragmentCard
            fragment={fragment}
            isActiveFragment={isActiveFragment}
            onFragmentClick={onFragmentClick}
          />
        )}
      </div>
      {/* <Card className="rounded-lg bg-muted p-3 shadow-none border-none max-w-[80%] break-words">{content}</Card> */}
    </div>
  )
}