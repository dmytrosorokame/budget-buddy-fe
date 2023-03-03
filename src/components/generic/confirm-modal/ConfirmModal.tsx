import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';

import {
  selectConfirmModalCloseClickHandler,
  selectConfirmModalIsShown,
  selectConfirmModalOkClickHandler,
  selectConfirmModalTitle,
} from '@/redux/confirmModal/confirmModal.selectors';
import { closeModal } from '@/redux/confirmModal/confirmModal.slice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

import classes from './ConfirmModal.module.scss';

const ConfirmModal: React.FC = () => {
  const dispatch = useAppDispatch();

  const isShown = useAppSelector(selectConfirmModalIsShown);
  const title = useAppSelector(selectConfirmModalTitle);
  const okClickHandlerFromState = useAppSelector(selectConfirmModalOkClickHandler);
  const closeClickHandlerFromState = useAppSelector(selectConfirmModalCloseClickHandler);

  const closeModalHandler = (): void => {
    dispatch(closeModal());
  };

  const okClickHandler = (): void => {
    if (okClickHandlerFromState) okClickHandlerFromState();

    closeModalHandler();
  };

  const closeClickHandler = closeClickHandlerFromState ?? closeModalHandler;

  return (
    <Modal
      open={isShown}
      onClose={closeClickHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modal}>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Box className={classes.buttons}>
          <Button variant="contained" className={classes.button} onClick={closeClickHandler}>
            No
          </Button>
          <Button variant="outlined" className={classes.button} onClick={okClickHandler}>
            Yes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
