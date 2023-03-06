import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { LOAD_LATEST_MESSAGES, LOAD_MORE_MESSAGES, POST_MESSAGES } from '../queries';
import { ChatResponseLatest, ChatResponseMore, MessageReq, PostMessageReq } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private appollo: Apollo) {}

  getLatestMessages(params: MessageReq): Observable<any> {
    return this.appollo.query<ChatResponseLatest | ChatResponseMore>({
      query: LOAD_LATEST_MESSAGES,
      variables: params,
      fetchPolicy: 'network-only'
    });
  }

  getMoreMessages(params: MessageReq): Observable<any> {
    return this.appollo.query<ChatResponseLatest | ChatResponseMore>({
      query: LOAD_MORE_MESSAGES,
      variables: params,
      fetchPolicy: 'network-only'
    });
  }

  getMessages(params: MessageReq): Observable<any> {
    if (params.channelId && params.messageId) {
      return this.getMoreMessages(params);
    }
    return this.getLatestMessages(params);
  }

  postMessage(params: PostMessageReq): Observable<any> {
    return this.appollo.mutate<ChatResponseLatest | ChatResponseMore>({
      mutation: POST_MESSAGES,
      variables: params,
      fetchPolicy: 'network-only'
    });
  }
}
