// @packages
import React from 'react';
import { useHistory } from "react-router-dom";

import AddIcon from '@material-ui/icons/Add';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Collapse from '@material-ui/core/Collapse';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';
import TuneIcon from '@material-ui/icons/Tune';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background,
    height: '100%',
    maxWidth: 360,
    width: '100%',
  },
}));

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (route) => {
    setOpen(!open);
  };

  const handleNavigation = (route) => {
    history.push(route);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={() => handleNavigation('home')}>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Balance" />
      </ListItem>
      
      <ListItem button onClick={() => handleNavigation('expenses')}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="Details" />
      </ListItem>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <TuneIcon /> 
        </ListItemIcon>
        <ListItemText primary="Manage expenses" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={false && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={() => handleNavigation('manager')}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add one" />
          </ListItem>

          <ListItem button className={classes.nested} onClick={() => handleNavigation('manager')}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add bulk" />
          </ListItem>

          <ListItem button className={classes.nested} onClick={() => handleNavigation('manager')}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Edit" />
          </ListItem>

          <ListItem button className={classes.nested} onClick={() => handleNavigation('manager')}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
