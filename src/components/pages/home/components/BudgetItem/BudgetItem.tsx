import CloseIcon from '@mui/icons-material/Close';
import { Box, ButtonBase, Card, Divider, IconButton, Typography } from '@mui/material';
import cn from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';

import { deleteBudget } from '@/redux/budgets/budgets.thunks';
import { showModal } from '@/redux/confirmModal/confirmModal.slice';
import { useAppDispatch } from '@/redux/store';
import { IBudget } from '@/types/budgets.types';
import { getMonthFromDate } from '@/utils/date';

import classes from './BudgetItem.module.scss';

interface IBudgetItemProps {
  budget: IBudget;
}

const BudgetItem: React.FC<IBudgetItemProps> = ({ budget }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const formattedData = getMonthFromDate(new Date(budget.created_at));

  const deleteHandler = (): void => {
    dispatch(deleteBudget(budget.id));
  };

  const deleteButtonClickHandler = (): void => {
    dispatch(showModal({ title: 'Do you want delete this budget?', okClickHandler: deleteHandler }));
  };

  const budgetClickHandler = (): void => {
    router.push(`/edit-budget/${budget.id}`);
  };

  return (
    <ButtonBase className={classes.button} onClick={budgetClickHandler}>
      <Card className={classes.item}>
        <Box className={classes.wrapper}>
          <Typography className={classes.month} variant="h6">
            {formattedData}
          </Typography>
          <Box className={classes.stats}>
            <Box>
              <Typography className={cn(classes.text, classes.green)}>INCOME</Typography>
              <Divider />
            </Box>
            <Box>
              <Typography className={cn(classes.text, classes.red)}>EXPENSES</Typography>
              <Divider />
            </Box>
            <Box>
              <Typography className={cn(classes.text, classes.yellow)}>INVESTMENTS</Typography>
              <Divider />
            </Box>
          </Box>
          <IconButton onClick={deleteButtonClickHandler} className={classes.remove}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        </Box>
      </Card>
    </ButtonBase>
  );
};

export default BudgetItem;
