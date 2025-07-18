
import { Fragment, MessageRole, MessageType } from "@/generated/prisma";
import { AssistantMessage } from './assistant-message-card';
import { UserMessage } from './user-message-card';


interface Props {
  content: string;
  role: MessageRole;
  fragment: Fragment | null;
  createdAt: Date;
  isActiveFragment: boolean;
  onFragmentClick: (fragment: Fragment) => void;
  type: MessageType;
}

export const MessageCard = ({
  content,
  role,
  fragment,
  createdAt,
  isActiveFragment,
  onFragmentClick,
  type
}: Props) => {
  if (role === "ASSISTANT") {
    return (<AssistantMessage
      content={content}
      fragment={fragment}
      createdAt={createdAt}
      isActiveFragment={isActiveFragment}
      onFragmentClick={onFragmentClick}
      type={type}
    />)
  }
  return (<UserMessage content={content} />)
}