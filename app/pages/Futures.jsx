import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import classNames from 'classnames';

import Content from 'components/Content';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function Futures() {
  // const { classes } = props;
  return (
    <Content>
      合约交易
    </Content>
  );
}

Futures.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Futures);
