import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { Appbar } from "../molecules/Appbar/Appbar";
import { useSpring, animated } from "@react-spring/web";

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

type FooterLinkProps = {
  children: React.ReactNode;
};

const FooterLink = ({ children }: FooterLinkProps) => {
  const [springProps, setSpringProps] = useSpring(() => ({
    scale: 1,
    config: { tension: 500, friction: 25 },
  }));

  return (
    <animated.div
      onMouseEnter={() => setSpringProps({ scale: 1.05 })}
      onMouseLeave={() => setSpringProps({ scale: 1 })}
      style={{
        transform: springProps.scale.interpolate(
          (scale: number) => `scale(${scale})`
        ),
        display: "inline-block",
      }}
    >
      <Link
        href="#"
        variant="subtitle1"
        color="text.secondary"
        sx={{
          textDecoration: "none",
          mr: 2,
          mb: 1,
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        {children}
      </Link>
    </animated.div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

export const BasicLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <Appbar />
      {children}

      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <FooterLink>{item}</FooterLink>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center">
          {"© "}
          <Link color="inherit" href="#">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </>
  );
};
