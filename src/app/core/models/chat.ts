export interface Channel {
  channelId: string;
  channelValue: string;
  active?: boolean;
}

export interface User {
  userId: string;
  userName: string;
}

export interface MessageResponse {
  messageId: string;
  text: string;
  datetime: string;
  userId: string;
  __typename?: 'Message';
  notsent?: boolean;
}

export interface MessageReq {
  channelId: string;
  messageId?: string;
  old?: boolean;
}

export interface PostMessageReq {
  channelId: string;
  text: string;
  userId: string;
}

export interface MessagesResponse {
  fetchLatestMessages: MessageResponse[];
}

export interface ChatResponseLatest {
  data: {
    fetchLatestMessages: MessageResponse[];
  }
  loading: boolean;
  networkStatus: number;
}

export interface ChatResponseMore {
  data: {
    fetchMoreMessages: MessageResponse[];
  }
  loading: boolean;
  networkStatus: number;
}
