import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Card, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import classes from './AddBudget.module.scss';

const AddBudget: React.FC = () => {
  const router = useRouter();

  const createBudgetHandler = (): void => {
    router.push('/create-budget');
  };

  return (
    <Card className={classes.item}>
      <IconButton onClick={createBudgetHandler}>
        <AddCircleIcon className={classes.icon} color="primary" />
      </IconButton>
    </Card>
  );
};

export default AddBudget;
