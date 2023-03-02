import { useTranslation } from 'react-i18next';
import { Box, Button, Divider } from '@mui/material';

import { i18nBox } from '../headerStyles';

export const MultiLanguage = () => {
  const { i18n, t } = useTranslation();

  const btnStyles = {
    color: 'white',
    display: 'flex',
  };

  return (
    <>
      <Box sx={i18nBox}>
        <Button sx={btnStyles} onClick={() => i18n.changeLanguage('en')}>
          {t('en')}
        </Button>
        <Divider
          orientation="vertical"
          flexItem={true}
          color="black"
          variant="middle"
        />
        <Button sx={btnStyles} onClick={() => i18n.changeLanguage('uk')}>
          {t('ua')}
        </Button>
      </Box>
    </>
  );
};
