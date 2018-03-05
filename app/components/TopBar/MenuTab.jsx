import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Tab } from 'material-ui/Tabs';
import { Link } from 'react-router-dom';

const styles = ({ spacing: { unit } }) => ({
  root: {
    height: unit * 8,
    minWidth: unit * 14,
  },
  label: {
    fontSize: '1.15em',
  },
});

const MenuLink = props => <Link {...props} />;

const MenuTab = ({
  classes,
  label,
  to,
  ...props
}) =>
  <Tab
    component={MenuLink}
    label={label}
    to={to}
    classes={{
      root: classes.root,
      label: classes.label,
    }}
    {...props}
  />;

MenuTab.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default withStyles(styles)(MenuTab);
