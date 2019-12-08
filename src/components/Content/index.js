// @packages

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// @own

import data from '../../data';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  tableTitle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

function createData({
  date, 
  desc, 
  value, 
  source,
  sourceType
}) {
  return {
    date,
    desc,
    value,
    source,
    sourceType,
  };
}

const rows = data.map(a => createData(a));

function Content() {
  const classes = useStyles();

  let total = 0;
  let deuda = 0;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableTitle}>Date</TableCell>
            <TableCell className={classes.tableTitle}>Description</TableCell>
            <TableCell className={classes.tableTitle}>Value</TableCell>
            <TableCell className={classes.tableTitle}>Source</TableCell>
            <TableCell className={classes.tableTitle}>Source Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const { date, desc, value, source, sourceType } = row;
            const isDebt = source === 'Deuda';
            let style = {};
            
            if (isDebt) {
              style = {color: 'red'};
              deuda += value;
            } else {
              total += value;
            } 
      
            return (
              <TableRow key={Math.random()}>
                <TableCell>{date}</TableCell>
                <TableCell>{desc}</TableCell>
                <TableCell>{value}</TableCell>
                <TableCell style={style}>{source}</TableCell>
                <TableCell>{sourceType}</TableCell>
              </TableRow>
            )}
          )}
            <TableRow>
                <TableCell> - </TableCell>
                <TableCell> - </TableCell>
                <TableCell>{total}</TableCell>
                <TableCell>{deuda}</TableCell>
                <TableCell> - </TableCell>
              <TableCell>
              </TableCell>
            </TableRow> 
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Content;
