import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Card, IconButton } from '@mui/material';
import React from 'react';

import classes from './AddBudget.module.scss';

const AddBudget: React.FC = () => {
  return (
    <Card className={classes.item}>
      <IconButton>
        <AddCircleIcon className={classes.icon} color="primary" />
      </IconButton>
    </Card>
  );
};

export default AddBudget;
