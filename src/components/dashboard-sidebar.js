import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Tooth as ToothIcon } from "../icons/tooth-solid";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";

const items = [
  {
    href: "/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/odontograma",
    icon: <ToothIcon fontSize="small" />,
    title: "Odontograma",
  },
  // {
  //   href: "/products",
  //   icon: <ShoppingBagIcon fontSize="small" />,
  //   title: "Products",
  // },
  // {
  //   href: "/account",
  //   icon: <UserIcon fontSize="small" />,
  //   title: "Account",
  // },
  // {
  //   href: "/settings",
  //   icon: <CogIcon fontSize="small" />,
  //   title: "Settings",
  // },
  // {
  //   href: "/login",
  //   icon: <LockIcon fontSize="small" />,
  //   title: "Login",
  // },
  // {
  //   href: "/register",
  //   icon: <UserAddIcon fontSize="small" />,
  //   title: "Register",
  // },
  // {
  //   href: "/404",
  //   icon: <XCircleIcon fontSize="small" />,
  //   title: "Error",
  // },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </a>
            </NextLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 0,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
        </Box>
        {/* <Divider sx={{ borderColor: '#2D3748' }} /> */}
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
