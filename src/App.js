import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import './global.css';

import HomePage from './pages/Home/index';
import PageA from './pages/pageA/index';
import PageB from './pages/pageB/index';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routes: [
        {
          title: 'Home',
          key: 'home',
          link: '/',
          component: HomePage
        },
        {
          title: 'PageA',
          key: 'page-a',
          link: '/page-a',
          component: PageA
        },
        {
          title: 'PageB',
          key: 'page-b',
          link: '/page-b',
          component: PageB
        }
      ]
    };
  }

  renderMenuItems() {
    const state = this.state;
    const { routes } = state;

    return routes.map(route => {
      return (
        <Link to={route.link} key={route.key}>
          <div className="menu-item">{route.title}</div>
        </Link>
      );
    });
  }

  renderRoutes() {
    const state = this.state;
    const { routes } = state;

    return routes.map(route => {
      const routeKey = `${route.key} ${route.title}`;
      return <Route exact key={routeKey} path={route.link} component={route.component}/>;
    });
  }

  render() {
    return (
      <div className="layout">
        <div className="nav-menu">
          {this.renderMenuItems()}
        </div>
        <div className="page-container">
          <Switch>
            {this.renderRoutes()}
          </Switch>
        </div>
      </div>
    );
  }
};
