import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import homeStyles from "../../../theme/homeStyles";
import { useSpring, animated, useInView } from "@react-spring/web";

const Hero = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [ref, springs] = useInView(() => ({
    from: {
      opacity: 0,
      x: -80,
    },
    to: {
      opacity: 1,
      x: 0,
    },
    config: { duration: 800 },
  }));
  const props = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: { duration: 800 },
  });

  const [ref2, springs2] = useInView(() => ({
    from: {
      opacity: 0,
      x: 80,
    },
    to: {
      opacity: 1,
      x: 0,
    },

    config: { duration: 800 },
  }));

  const imageProps = useSpring({
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: { duration: 800 },
  });

  const subtitleProps = useSpring({
    opacity: isHovered ? 1 : 0.7,
  });

  return (
    <Box sx={homeStyles.heroBox}>
      <Grid container spacing={2} sx={homeStyles.gridContainerHero}>
        <Grid item xs={11} md={6}>
          <animated.div style={{ ...props, ...springs }} ref={ref}>
            <Typography variant="h3" fontWeight={700} sx={homeStyles.title}>
              Procurement that makes a difference
            </Typography>
            <Box sx={{ mt: 4 }}>
              <animated.div
                style={subtitleProps}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Typography variant="h6" sx={homeStyles.subtitle}>
                  Welcome to Social Pro, your destination for socially
                  responsible procurement. We've created a platform that enables
                  you to make informed decisions about your procurement
                  practices and prioritize social values alongside traditional
                  criteria. Whether you're looking to support local businesses,
                  promote ethical practices, or create employment opportunities
                  for underrepresented groups, Social Pro has got you covered.
                  Join us in building a more inclusive, sustainable, and
                  equitable world through procurement.
                </Typography>
              </animated.div>
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 4,
                width: "200px",
                transition: "transform 0.2s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                fontSize: "16px",
                "@media (max-width: 600px)": {
                  margin: "0 auto",
                  display: "block",
                },
              }}
            >
              Contact Us
            </Button>
          </animated.div>
        </Grid>
        <Grid item xs={10} md={5}>
          <animated.img
            src={"hero.png"}
            alt="My Team"
            style={{ ...homeStyles.largeImage, ...imageProps, ...springs2 }}
            ref={ref2}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
