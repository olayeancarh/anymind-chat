import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { LOAD_LATEST_MESSAGES, LOAD_MORE_MESSAGES, POST_MESSAGES } from '../queries';
import { MessageReq, MessagesResponse, PostMessageReq } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private appollo: Apollo) {}

  getLatestMessages(params: MessageReq): Observable<any> {
    return this.appollo.watchQuery<MessagesResponse>({
      query: LOAD_LATEST_MESSAGES,
      variables: params,
    }).valueChanges;
  }

  getMoreMessages(params: MessageReq): Observable<any> {
    return this.appollo.watchQuery<MessagesResponse>({
      query: LOAD_MORE_MESSAGES,
      variables: params,
    }).valueChanges;
  }

  getMessages(params: MessageReq): Observable<any> {
    if (params.old && params.messageId) {
      return this.getMoreMessages(params);
    }
    return this.getLatestMessages(params);
  }

  postMessage(params: PostMessageReq): Observable<any> {
    return this.appollo.mutate<MessagesResponse>({
      mutation: POST_MESSAGES,
      variables: params
    });
  }
}
