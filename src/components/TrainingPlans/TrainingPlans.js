import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import Spinner from '../common/Spinner/Spinner';
import TrainingPlanCard from '../TrainingPlanCard/TrainingPlanCard';

const TrainingPlans = ({
  isLoading,
  trainingPlans,
  userTrainingPlanId,
  changeUserTrainingPlan,
}) => {
  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  return (
    <div>
      <Row>
        {
          trainingPlans.map(trainingPlan => (
            <Col xs="12" sm="12" md="3" lg="4" key={trainingPlan._id}>
              <TrainingPlanCard
                trainingPlan={trainingPlan}
                headerRightButton={
                  userTrainingPlanId === trainingPlan._id
                    ? {
                      onClick: () => changeUserTrainingPlan(null),
                      children: <FontAwesome name="minus" />,
                    }
                    : {
                      onClick: () => changeUserTrainingPlan(trainingPlan._id),
                      children: <FontAwesome name="plus" />,
                    }
                }
              />
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

TrainingPlans.propTypes = {
  isLoading: PropTypes.bool,
  trainingPlans: PropTypes.array,
  userTrainingPlanId: PropTypes.bool.isRequired,
  changeUserTrainingPlan: PropTypes.func.isRequired,
};

TrainingPlans.defaultProps = {
  isLoading: false,
  trainingPlans: [],
};

export default TrainingPlans;
