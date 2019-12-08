// @packages
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Collapse from '@material-ui/core/Collapse';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import StarBorder from '@material-ui/icons/StarBorder';
import TuneIcon from '@material-ui/icons/Tune';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background,
    height: '100%',
    maxWidth: 360,
    width: '100%',
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button selected>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Balance" />
      </ListItem>
      
      <ListItem button>
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

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add one" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add bulk" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Edit" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Remove" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
