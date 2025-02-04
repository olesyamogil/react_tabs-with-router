import React from 'react';
import './Tabs.css';
import {
  NavLink, Route, BrowserRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import TabContent from '../TabContent/TabContent';

const Tabs = (props) => {
  const { tabs, tabsMatch } = props;

  return (
    <BrowserRouter>
      { tabs.map((tab, index) => (
        <NavLink
          key={tab.title}
          to={`${tabsMatch.path}/tab-${index + 1}`}
          className="tab-link"
          activeClassName="tab-link-active"
        >
          {tab.title}
        </NavLink>
      ))}
      <Route
        path={`${tabsMatch.path}/:currentTabId?`}
        render={({ match }) => (
          <TabContent
            text={
              match.params.currentTabId
                ? tabs.find(tab => tab.id === match.params.currentTabId).content
                : ''
            }
          />
        )}
      />
    </BrowserRouter>
  );
};

Tabs.defaultProps = {
  tabs: [],
  tabsMatch: {},
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf,
  tabsMatch: PropTypes.objectOf,
};

export default Tabs;
