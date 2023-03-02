import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import { IconButton, Tooltip, Modal } from '@mui/material';

import { AuthForm } from './AuthForm';
import { authBox, authModal, loginIcon } from './authStyles';

export const LoggedOut = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box sx={authBox}>
      <Tooltip title={t('tooltipLogOut')}>
        <IconButton onClick={handleOpenModal}>
          <LoginIcon sx={loginIcon} />
        </IconButton>
      </Tooltip>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={authModal}>
          <AuthForm handleCloseModal={handleCloseModal} />
        </Box>
      </Modal>
    </Box>
  );
};
