import { MessageResponse } from "../../models";

export interface ChatData {
  isLoading: boolean;
  error: any;
  general: MessageResponse[];
  lgtm: MessageResponse[];
  technology: MessageResponse[];
}

export interface ChatState {
  readonly chat: ChatData
}

export const initialChatState: ChatData = {
  isLoading: false,
  error: null,
  general: [],
  lgtm: [],
  technology: [],
}
