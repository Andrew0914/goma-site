"use client";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import {
  Home,
  Work,
  Coffee,
  Book,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { ListItemIcon, ListItemText, alpha, styled } from "@mui/material";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

interface RouteOption {
  icon: React.ReactNode;
  text: string;
  route: string;
}

export default function TheMobileNav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const router = useRouter();

  const handleClose = (route: string) => {
    setAnchorEl(null);
    router.push(route);
  };

  const StyledMenu = styled((props: MenuProps) => <Menu {...props} />)(
    ({ theme }) => ({
      "& .MuiPaper-root": {
        borderRadius: 4,
        marginTop: theme.spacing(1),
        minWidth: 200,
      },
    }),
  );

  const t = useTranslations("thenavbar");

  const routesOptions: RouteOption[] = [
    { icon: <Home fontSize="small" />, text: t("home"), route: "/" },
    { icon: <Book fontSize="small" />, text: t("work"), route: "/work" },
    { icon: <Work fontSize="small" />, text: t("blog"), route: "/blog" },
    { icon: <Coffee fontSize="small" />, text: t("about"), route: "/about" },
  ];

  const pathname = usePathname();

  return (
    <div className={styles.themobilenavbar}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ minWidth: "40px" }}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className={styles.themobilenavbar_menu}
        onClose={() => setAnchorEl(null)}
      >
        {routesOptions.map((option, index) => (
          <MenuItem
            key={`mobilenav-opt-${index}`}
            onClick={() => handleClose(option.route)}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText
              className={pathname === option.route ? styles.routeActive : ""}
            >
              {option.text}
            </ListItemText>
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
