import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import bestTeams from "../../../images/bestTeams.jpg";
import homeStyles from "../../../theme/homeStyles";
import { useSpring, animated, useInView } from "@react-spring/web";

const AboutUs = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [ref, springs] = useInView(() => ({
    from: {
      opacity: 0,
      y: -80,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: { duration: 800 },
  }));
  const props = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 50%, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: { duration: 800 },
  });

  const [ref2, springs2] = useInView(() => ({
    from: {
      opacity: 0,
      y: 80,
    },
    to: {
      opacity: 1,
      y: 0,
    },

    config: { duration: 800 },
  }));

  const imageProps = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 50%, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: { duration: 800 },
  });

  const subtitleProps = useSpring({
    opacity: isHovered ? 1 : 0.7,
  });

  return (
    <animated.div style={{ ...props, ...springs2 }} ref={ref2}>
      <Box sx={homeStyles.aboutUsContainer}>
        <Grid container spacing={2} sx={homeStyles.gridContainer}>
          <Grid item md={6}>
            <animated.img
              src={bestTeams}
              alt="My Team"
              style={{ ...homeStyles.largeImage, ...imageProps, ...springs }}
              ref={ref}
            />
          </Grid>

          <Grid item md={6}>
            <Typography variant="h3" fontWeight={700} sx={homeStyles.title}>
              We build, We revive
            </Typography>
            <animated.div
              style={subtitleProps}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Typography sx={homeStyles.aboutUsSubtitle}>
                Your business needs to be in safe hands at all times. We ensure
                you never run out of customers and not run at loss. We are
                trusted by over 500+ companies to deliver quality marketing
                campaigns using Digital marketing & Offline marketing channels.
              </Typography>
            </animated.div>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "200px",
                fontSize: "16px",
                transition: "transform 0.2s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                "@media (max-width: 600px)": {
                  margin: "0 auto",
                  display: "block",
                },
              }}
            >
              CONTACT US
            </Button>
          </Grid>
        </Grid>
      </Box>
    </animated.div>
  );
};

export default AboutUs;
