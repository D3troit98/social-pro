import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useSpring, animated, useInView } from "@react-spring/web";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import homeStyles from "../../../theme/homeStyles";

const Section = () => {
  const sectionItems = [
    {
      id: 1,
      icon: <EngineeringOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        "Solving world problems through various web applications using efficient programs and tools",
    },
    {
      id: 2,
      icon: <AllInclusiveIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        "Through team work, we collaborate and deliver quality projects of high standards",
    },
    {
      id: 3,
      icon: <PaidOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: "Flexible payment plan is applicable to all our services",
    },
  ];

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

  return (
    <Box sx={{ flexGrow: 1, minHeight: "400px" }}>
      <Grid container sx={homeStyles.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            sx={homeStyles.sectionGridItem}
            ref={ref}
          >
            <animated.div style={{ ...props, ...springs }}>
              {item.icon}
              <Typography>{item.sentence}</Typography>
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;
