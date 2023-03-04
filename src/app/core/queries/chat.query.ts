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
