import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import './MealPlan.css';
import MealInputField from '../MealInputField/MealInputField';

const MealPlan = ({ mealPlan, foods }) => (
  <div className="meal-plan">
    <ListGroup>
      {
        mealPlan.foods.map(mealFood => (
          <ListGroupItem className="meal-plan__food" key={mealFood._id}>
            <MealInputField
              avatarUrl={mealFood.product.avatarUrl}
              foodAutoCompleteConfig={{
                selected: mealFood.product,
                disabled: true,
              }}
              weightInputConfig={{
                className: 'meal-plan__food__name',
                value: mealFood.weight,
                disabled: true,
              }}
              buttonConfig={{
                className: 'meal-plan__food__marker',
                id: `info-button-${mealFood._id}`,
                color: foods.find(food => food.product._id === mealFood.product._id && food.weight === mealFood.weight) ? 'success' : 'warning',
                children: foods.find(food => food.product._id === mealFood.product._id && food.weight === mealFood.weight)
                  ? [
                    <FontAwesome key="icon" name="check" />,
                    <UncontrolledTooltip key="tooltip" target={`info-button-${mealFood._id}`}>
                      You fullfilled this meal
                    </UncontrolledTooltip>,
                  ]
                  : [
                    <FontAwesome key="icon" name="exclamation" />,
                    <UncontrolledTooltip key="tooltip" target={`info-button-${mealFood._id}`}>
                      You have to fullfill this meal
                    </UncontrolledTooltip>,
                  ]
              }}
            />
          </ListGroupItem>
        ))
      }
    </ListGroup>
  </div>
);

MealPlan.propTypes = {
  mealPlan: PropTypes.object.isRequired,
  foods: PropTypes.array,
};

MealPlan.defaultProps = {
  foods: [],
};

export default MealPlan;
