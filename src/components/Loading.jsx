import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingBase() {
  return (
    <Box sx={{ position: 'absolute', zIndex: 9999, display: 'flex', inset: 0, alignItems: 'center', justifyContent: 'center', bgcolor: '#ffffffbd'}}>
      <CircularProgress />
    </Box>
  );
}