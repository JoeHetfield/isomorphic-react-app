import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import classNames from 'classnames';

import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';
import Grid from 'material-ui/Grid';

import TopBar from 'components/TopBar';
import Content from 'components/Content';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function OutterTransaction({ classes }) {
  // const { classes } = props;
  return (
    <div style={{ width: '100%' }}>
      <TopBar title="场外交易" />

      <Grid container justify="space-between" spacing={0}>
        <Grid item xs={2}>
          <List style={{ marginTop: 64, backgroundColor: 'white' }}>
            {[0, 1, 2, 3].map(value => (
              <ListItem
                key={value}
                dense
                button
                // onClick={this.handleToggle(value)}
                className={classes.listItem}
              >
                <Checkbox
                  // checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={`Line item ${value + 1}`} />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Comments">
                    <CommentIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={10}>
        </Grid>
      </Grid>
    </div>
  );
}

OutterTransaction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutterTransaction);
