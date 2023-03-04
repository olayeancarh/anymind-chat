export interface Channel {
  channelId: string;
  channelValue: string;
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
}

export interface MessagesResponse {
  fetchLatestMessages: MessageResponse[];
}
