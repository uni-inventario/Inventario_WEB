import { Box } from "@mui/material";

const WaveBackground = () => {
  const waveColor = "#195597";

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "300px",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <path
          fill={waveColor}
          fillOpacity="1"
          d="M0,192L60,192C120,192,240,192,360,192C480,192,600,192,720,208C840,224,960,256,1080,261.3C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </Box>
  );
};

export default WaveBackground;
