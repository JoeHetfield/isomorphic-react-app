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

function Account() {
  // const { classes } = props;
  return (
    <Content>
      资金管理
    </Content>
  );
}

Account.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Account);
