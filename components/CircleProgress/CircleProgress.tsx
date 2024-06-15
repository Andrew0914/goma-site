'use client'
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface CircleProgressProps extends CircularProgressProps {
  value: number
  children: React.ReactNode
}

export default function CircleProgress(
  props: CircleProgressProps
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} sx={{
        backgroundColor: 'rgba(145, 145, 145, 0.1)',
        borderRadius: '100%',
      }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexFlow: 'column',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
