import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemAvatar, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import HomeIcon from 'material-ui-icons/Home';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import LocalFloristIcon from 'material-ui-icons/LocalFlorist';
import PowerSettingsIcon from 'material-ui-icons/PowerSettingsNew';

import {
  Menu,
} from 'actions';

const styles = {
  list: {
    // width: 250,
    flex: 'initial',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

const Coin2CoinTransactionLink = props => <Link to="/Coin2CoinTransaction" {...props} />;
const OutterTransactionLink = props => <Link to="/OutterTransaction" {...props} />;
const ContractTransactionLink = props => <Link to="/ContractTransaction" {...props} />;
const FundManagementLink = props => <Link to="/FundManagement" {...props} />;

const MenuBar = ({ classes, open, toggleMenu }) =>
  <Drawer
    open={open}
    onClose={toggleMenu}
  >

    <List className={classes.list}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar
            alt="Adelle Charles"
            src="https://randomuser.me/api/portraits/men/38.jpg"
            className={classes.bigAvatar}
          />
        </ListItemAvatar>
        <ListItemText
          primary="视觉中国"
          secondary='吴刑一夫 产品经理'
        />
      </ListItem>
    </List>

    <Divider />

    <List className={classes.list}>

      <ListItem button component={Coin2CoinTransactionLink} onClick={toggleMenu}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText inset primary="币币交易" />
      </ListItem>

      <ListItem button component={OutterTransactionLink} onClick={toggleMenu}>
        <ListItemIcon>
          <LocalFloristIcon />
        </ListItemIcon>
        <ListItemText inset primary="场外交易" />
      </ListItem>

      <ListItem button component={ContractTransactionLink} onClick={toggleMenu}>
        <ListItemIcon>
          <ModeEditIcon />
        </ListItemIcon>
        <ListItemText inset primary="合约交易" />
      </ListItem>

      <ListItem button component={FundManagementLink} onClick={toggleMenu}>
        <ListItemIcon>
          <ModeEditIcon />
        </ListItemIcon>
        <ListItemText inset primary="资金管理" />
      </ListItem>

    </List>

    <Divider />

    <List className={classes.list}>
      <ListItem button>
        <ListItemIcon>
          <PowerSettingsIcon />
        </ListItemIcon>
        <ListItemText inset primary="退出" />
      </ListItem>
    </List>

  </Drawer>;

MenuBar.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.menu;

const mapDispatchToProps = {
  toggleMenu: Menu.toggle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(MenuBar));
