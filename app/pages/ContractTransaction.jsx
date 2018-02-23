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

function ContractTransaction() {
  // const { classes } = props;
  return (
    <div>
      <TopBar title="合约交易" />
    </div>
  );
}

ContractTransaction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContractTransaction);
