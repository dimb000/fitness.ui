import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Accordion from '../common/Accordion/Accordion';
import NAV_MENU_ITEMS from './constants/navMenuItems';

import { CURRENT_USER_QUERY } from '../../graphql/queries';

import './ControllBar.css';

const MenuItemButton = (props) => (
  <Button {...props} color="primary" block>{props.title}</Button>
);

class ControllBar extends Component {
  static propTypes = {

  };
  
  static defaultProps = {

  }

  logout = () => {
    localStorage.removeItem('token');
    this.props.data.refetch();
  }

  render() {
    const { match, close } = this.props;
    const isAuthenticated = !!this.props.data.currentUser;

    const userLinks = (
      <Link to="/signin">
        <MenuItemButton color="primary" onClick={() => {this.logout(); close()}} title="Logout"/>
      </Link>
    );
    const guestLinks = (
      <div>
        <Link to="/signin">
          <MenuItemButton color="primary" title="Sign in" onClick={close}/>
        </Link>
        <Link to="/signup">
          <MenuItemButton color="primary" title="Sign up" onClick={close}/>
        </Link>
      </div>
    );

    return (
      <div className="controll-bar">
        {
          isAuthenticated && NAV_MENU_ITEMS.map(menuItem => {
            return menuItem.children && menuItem.children.length
              ? (
                <Accordion
                  key={menuItem.title}
                  trigger={<MenuItemButton title={menuItem.title}/>}
                  children={menuItem.children.map(child => (
                    <Link key={child.title} to={`${match.url}${child.routeTo}`}>
                      <MenuItemButton title={child.title} onClick={close}/>
                    </Link>
                  ))}
                  activeClassName="btn-secondary"
                />
              )
              : (
                  <Link key={menuItem.title} to={`${match.url}${menuItem.routeTo}`}>
                    <MenuItemButton title={menuItem.title} onClick={close}/>
                  </Link>
                )
          })
        }

        {
          isAuthenticated ? userLinks : guestLinks
        }     
      </div>
    );
  }
}

export default graphql(CURRENT_USER_QUERY)(ControllBar);
