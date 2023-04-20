import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Box, Menu, MenuList, MenuItem } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
const NavBarButton = styled(Button)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.primary.main,
  borderRadius: "5px",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#FFF",
  },
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  marginRight: "20px",
  fontWeight: 500,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const AnimatedNavLink = animated(NavLink);
const AnimatedNavBarButton = animated(NavBarButton);
type NavLinkWithAnimationProps = {
  children: React.ReactNode;
  href: string;
  sx?: Record<string, unknown>;
};
const NavLinkWithAnimation = ({
  children,
  href,
  sx,
}: NavLinkWithAnimationProps) => {
  const [springProps, setSpringProps] = useSpring(() => ({
    transform: "translateY(0px)",
    config: { tension: 500, friction: 25 },
  }));

  return (
    <AnimatedNavLink
      onMouseEnter={() => setSpringProps({ transform: "translateY(-5px)" })}
      onMouseLeave={() => setSpringProps({ transform: "translateY(0px)" })}
      style={springProps}
      href={href}
      sx={sx}
    >
      {children}
    </AnimatedNavLink>
  );
};

type NavBarButtonWithAnimationProps = {
  children: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "default";
  onClick: () => void;
  sx?: Record<string, unknown>;
};
const NavBarButtonWithAnimation = ({
  children,
  onClick,
  sx,
}: NavBarButtonWithAnimationProps) => {
  const [springProps, setSpringProps] = useSpring(() => ({
    scale: 1,
    config: { tension: 500, friction: 25 },
  }));

  return (
    <AnimatedNavBarButton
      onMouseEnter={() => setSpringProps({ scale: 1.05 })}
      onMouseLeave={() => setSpringProps({ scale: 1 })}
      style={{
        transform: springProps.scale.interpolate(
          (scale: number) => `scale(${scale})`
        ),
      }}
      onClick={onClick}
      sx={sx}
    >
      {children}
    </AnimatedNavBarButton>
  );
};

export const Appbar = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  const handleHome = () => {
    navigate("/");
  };

  // Define the react-spring animation
  const fadeAnim = useSpring({
    opacity: anchorElNav ? 1 : 0,
  });
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            <img
              src="logo_alt.png"
              alt="Social Pro"
              height="50px"
              onClick={handleHome}
              style={{ cursor: "pointer" }}
            />
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="open menu"
              onClick={handleOpenNavMenu}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <animated.div style={fadeAnim}>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    mt: "1rem",
                    width: "100%",
                    p: "1em",
                    backgroundColor: "#FFF",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                  },
                }}
              >
                <MenuList sx={{ width: "100%" }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink href="#" sx={{ color: "#017dc5" }}>
                      Features
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink href="#" sx={{ color: "#017dc5" }}>
                      Enterprise
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink href="#" sx={{ color: "#017dc5" }}>
                      Support
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavBarButton
                      onClick={handleLogin}
                      sx={{
                        color: "#FFF",
                        backgroundColor: "#017dc5",
                        width: "50%",
                      }}
                    >
                      Login
                    </NavBarButton>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavBarButton
                      variant="contained"
                      onClick={handleSignUp}
                      sx={{ backgroundColor: "#017dc5", width: "50%" }}
                    >
                      Sign Up
                    </NavBarButton>
                  </MenuItem>
                </MenuList>
              </Menu>
            </animated.div>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <NavLinkWithAnimation href="#">Features</NavLinkWithAnimation>
            <NavLinkWithAnimation href="#">Enterprise</NavLinkWithAnimation>
            <NavLinkWithAnimation href="#">Support</NavLinkWithAnimation>

            <NavBarButtonWithAnimation
              onClick={handleLogin}
              sx={{ marginRight: 2 }}
            >
              Login
            </NavBarButtonWithAnimation>
            <NavBarButtonWithAnimation
              variant="contained"
              color="primary"
              onClick={handleSignUp}
            >
              Sign Up
            </NavBarButtonWithAnimation>
          </Box>
        </Toolbar>
      </AppBar>
    </animated.div>
  );
};
