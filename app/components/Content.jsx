import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  content: {
    marginTop: theme.spacing.unit * 8,
    padding: theme.spacing.unit * 3,
    width: '100%',
  },
});

const Content = ({ classes, children }) =>
  <main className={classes.content}>
    {children}
  </main>;

Content.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
