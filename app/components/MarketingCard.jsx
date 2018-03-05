import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardMedia } from 'material-ui/Card';

const styles = {
  media: {
    height: 160,
  },
};
const MarketingCard = ({ classes, seed }) =>
  <Card>
    <CardMedia
      className={classes.media}
      image={`https://source.unsplash.com/random?${seed}`}
      title="title"
    />
  </Card>;

MarketingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MarketingCard);
