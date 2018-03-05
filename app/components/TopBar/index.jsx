import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import { Locale } from 'actions';

import MenuTabs from './MenuTabs';
import HelpList from './HelpList';
import LanguageList from './LanguageList';

const styles = {
  title: {
    marginLeft: 24,
    marginRight: 48,
  },
};

class TopBar extends React.Component {
  state = {
    anchorEl: null,
  };

  openMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, changeLocale } = this.props;

    return (
      <AppBar elevation={0}>
        <Toolbar>

          <Typography
            variant="title"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Logo
          </Typography>

          <MenuTabs />

          <LanguageList changeLocale={changeLocale}/>

          <HelpList />

        </Toolbar>
      </AppBar>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  changeLocale: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  changeLocale: Locale.change,
};

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(styles)(TopBar));
