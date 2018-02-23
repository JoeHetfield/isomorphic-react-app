import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import HelpIcon from 'material-ui-icons/HelpOutline';
import LanguageIcon from 'material-ui-icons/Language';

import {
  Menu,
} from 'actions';

const styles = {
  title: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const TopBar = ({ classes, title, toggleMenu }) =>
  <AppBar>
    <Toolbar>

      <Tooltip title="打开菜单">
        <IconButton
          color="inherit"
          onClick={toggleMenu}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Tooltip>

      <Typography
        variant="title"
        color="inherit"
        noWrap
        className={classes.title}
      >
        {title}
      </Typography>

      <Tooltip title="语言选择">
        <IconButton
          // onClick={this.handleMenu}
          color="inherit"
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="帮助">
        <IconButton
          // onClick={this.handleMenu}
          color="inherit"
        >
          <HelpIcon />
        </IconButton>
      </Tooltip>

    </Toolbar>
  </AppBar>;

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  toggleMenu: Menu.toggle,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(TopBar));
