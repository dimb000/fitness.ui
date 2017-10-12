import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import './FoodPage.css';
import DailyFoodManage from './DailyFoodManage/DailyFoodManage';
import FoodPlans from './FoodPlans/FoodPlans';
import FoodPlan from './FoodPlan/FoodPlan';

class ProfilePage extends Component {

  render() {
    return (
      <div className="food">
        <Switch>
          <Route exact path={`${this.props.match.url}/controll/daily`} component={DailyFoodManage} />
          <Route exact path={`${this.props.match.url}/food-plans`} component={FoodPlans} />
          <Route exact path={`${this.props.match.url}/food-plan/:id`} component={FoodPlan} />
        </Switch>
      </div>
    )
  }
}

export default ProfilePage;
