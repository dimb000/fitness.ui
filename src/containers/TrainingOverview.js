import React from 'react';
import { gql, graphql } from 'react-apollo';

import withLoading from '../utils/withLoading';
import TrainingOverview from '../components/TrainingOverview/TrainingOverview';

const trainingHistory = gql`
  query trainingHistory($id: ID!) {
    trainingHistoryItem(_id: $id) {
      _id,
      date,
      exerciseAproaches {
        _id,
        exercise {
          name,
          avatarUrl,
        },
        count
      }
    }
  }
`;

export default graphql(trainingHistory, {
  options: ({ match }) => ({
    variables: { id: match.params.id },
  }),
  props: ({ data: { loading, trainingHistoryItem } }) => ({
    isLoading: loading,
    ...trainingHistoryItem
  }),
})(withLoading(TrainingOverview));