import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { FormattedMessage, intlShape, injectIntl, defineMessages } from 'react-intl';

import TopBar from 'components/TopBar';
import Content from 'components/Content';
import MarketingCard from 'components/MarketingCard';

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const messages = defineMessages({
  title: {
    id: 'c2ct.topbar.title',
    defaultMessage: 'Coin to Coin Transaction',
    description: 'Coin to coin transaction page title',
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Coin2CoinTransaction({ classes, intl }) {
  // const { classes } = props;
  return (
    <Content>
      <TopBar title={intl.formatMessage(messages.title)} />

      <Grid container justify="space-between" style={{ marginBottom: 8 }}>
        {[0, 1, 2, 3].map(value => (
          <Grid key={value} item xs={3}>
            <MarketingCard seed={value} />
          </Grid>
        ))}
      </Grid>

      <div style={{ marginBottom: 16 }}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>Location</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Typography variant="caption">
              Select your destination of choice<br />
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>

      <Grid container justify="space-between" style={{ marginBottom: 8 }}>
        {[5, 6, 7].map(value => (
          <Grid key={value} item xs={4}>
            <MarketingCard seed={value} />
          </Grid>
        ))}
      </Grid>

      <Paper className={classes.root}>
        <AppBar position="static" color="white">
          <Tabs value={0}>
            <Tab label="自选" />
            <Tab label="BTC交易区" />
            <Tab label="USDT交易区" href="#basic-tabs" />
            <Tab label="ETH交易区" />
            <Tab label="NewEX交易区" />
          </Tabs>
        </AppBar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>交易币种</TableCell>
              <TableCell numeric>最新成交价</TableCell>
              <TableCell numeric>24h涨跌幅</TableCell>
              <TableCell numeric>24h成交量</TableCell>
              <TableCell numeric>24h最高价</TableCell>
              <TableCell numeric>24h最低价</TableCell>
              <TableCell numeric>操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>{n.name}</TableCell>
                  <TableCell numeric>{n.calories}</TableCell>
                  <TableCell numeric>{n.fat}</TableCell>
                  <TableCell numeric>{n.carbs}</TableCell>
                  <TableCell numeric>{n.protein}</TableCell>
                  <TableCell numeric>{n.protein}</TableCell>
                  <TableCell numeric>{n.protein}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

    </Content>
  );
}

Coin2CoinTransaction.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(Coin2CoinTransaction));
