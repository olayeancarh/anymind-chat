import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { LOAD_LATEST_MESSAGES } from '../queries';
import { MessagesResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private appollo: Apollo) {}

  getLatestMessages(channelId: string): Observable<any> {
    return this.appollo.watchQuery<MessagesResponse>({
      query: LOAD_LATEST_MESSAGES,
      variables: { channelId },
    }).valueChanges;
  }
}
