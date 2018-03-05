import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import { ResponsiveContainer, LineChart, Line } from 'recharts';
import green from 'material-ui/colors/green';
import Typography from 'material-ui/Typography';
import { intlShape, injectIntl, defineMessages } from 'react-intl';

const styles = {
  media: {
    height: 160,
  },
};

const chartdata = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const QuotationCard = ({ classes, seed, intl }) =>
  <Card style={{ height: 160, position: 'relative' }}>
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: '40%' }}>
      <ResponsiveContainer>
        <LineChart data={chartdata}>
          <Line type='linear' dataKey={'pv'} stroke='#8884d8' strokeWidth={2} dot={false} />
        </LineChart>
      </ ResponsiveContainer>
    </div>
    <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="title" gutterBottom>
        Display 1
      </Typography>
      <Typography variant="title" gutterBottom>
        {intl.formatNumber(115858.5, { style: 'currency', currency: 'CNY' })}
      </Typography>
    </ CardContent>
  </Card>;

QuotationCard.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(QuotationCard));
