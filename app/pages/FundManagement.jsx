import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import classNames from 'classnames';

import TopBar from 'components/TopBar';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function FundManagement() {
  // const { classes } = props;
  return (
    <div>
      <TopBar title="资金管理" />
    </div>
  );
}

FundManagement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FundManagement);
