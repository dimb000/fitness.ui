import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBlock,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import dateFormat from 'dateformat';

import './MealCard.css';

const MealCard = ({ meal }) => (
  <Card block>
    <CardTitle>{dateFormat(meal.date, 'mmmm dS yyyy h:MM: TT')}</CardTitle>
    <CardSubtitle>Calorific value: {meal.calorificValue}</CardSubtitle>

    <CardBlock>
      <ListGroup>
        {
          meal.foods.map(meal => <ListGroupItem key={meal.food.name}>{meal.food.name}: {meal.weight}g</ListGroupItem>)
        }
      </ListGroup>
    </CardBlock>

    <CardBlock>
      <div className="nutrients">
        <div className="nutrients__field">
          <div className="nutrients__key">Proteins</div>
          <div className="nutrients__value">{meal.nutrients.proteins}</div>
        </div>
        <div className="nutrients__field">
          <div className="nutrients__key">Carbohydrates</div>
          <div className="nutrients__value">{meal.nutrients.carbohydrates}</div>
        </div>
        <div className="nutrients__field">
          <div className="nutrients__key">Fats</div>
          <div className="nutrients__value">{meal.nutrients.fats}</div>
        </div>
      </div>
    </CardBlock>
  </Card>
);

MealCard.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default MealCard;
