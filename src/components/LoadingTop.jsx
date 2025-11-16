import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate({status}) {
    return (
        status &&
        <Box sx={{position: 'absolute', inset: 0, width: '100%', backgroundColor: "#a5bbda6f", zIndex: 1300}}>
            <LinearProgress />
        </Box>
    );
}