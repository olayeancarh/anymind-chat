import { gql } from 'apollo-angular';

export const LOAD_LATEST_MESSAGES = gql`
  query ($channelId: String!) {
    fetchLatestMessages(channelId: $channelId) {
      messageId
      text
      datetime
      userId
    }
  }
`;

export const LOAD_LATEST_MESSAGES_TEST = gql`
  query ($channelId: String!) {
    fetchLatestMessages(channelId: $channelId) {
      messageId
      text
      datetime
      userId
      __typename
    }
  }
`;

export const LOAD_MORE_MESSAGES = gql`
  query ($channelId: String!, $messageId: String!, $old: Boolean!) {
    fetchMoreMessages(channelId: $channelId, messageId: $messageId, old: $old) {
      messageId
      text
      datetime
      userId
    }
  }
`;
