import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { FormattedMessage, intlShape, injectIntl, defineMessages } from 'react-intl';

const styles = {
  media: {
    height: 200,
  },
};

const messages = defineMessages({
  ok: {
    id: 'marketingcard.botton.ok',
    defaultMessage: 'OK',
    description: 'Label for OK button',
  },
  cancel: {
    id: 'marketingcard.botton.cancel',
    defaultMessage: 'Cancel',
    description: 'Label for Cancel button',
  },
});

const MarketingCard = ({ classes, intl, seed }) =>
  <Card>
    <CardMedia
      className={classes.media}
      image={`https://source.unsplash.com/random?${seed}`}
      title="Contemplative Reptile"
    />
    <CardActions>
      <Button size="small" color="primary">
        {intl.formatMessage(messages.ok)}
      </Button>
      <Button size="small" color="primary">
        {intl.formatMessage(messages.cancel)}
      </Button>
    </CardActions>
  </Card>;

MarketingCard.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(MarketingCard));
