import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const boxStyles = {
  display: 'flex',
  justifyContent: 'center',
};

export const Loader = () => {
  return (
    <Box sx={boxStyles}>
      <CircularProgress />
    </Box>
  );
};
