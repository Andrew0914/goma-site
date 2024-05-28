import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { GitHub, X, Home, Work, Coffee, Book, Menu as MenuIcon } from "@mui/icons-material";
import { ListItemIcon, ListItemText, alpha, styled } from '@mui/material';
import styles from "./styles.module.scss";
import { useTranslations } from 'next-intl';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = styled((props: MenuProps) => (<Menu {...props} />))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 4,
      marginTop: theme.spacing(1),
      minWidth: 200,
    },
  }));

  const t = useTranslations('thenavbar');

  return (
    <div className={styles.themobilenavbar}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize='large' />
      </Button>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className={styles.themobilenavbar_menu}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Home fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t("home")}</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Book fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t("projects")}</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Work fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t("blog")}</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Coffee fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t("about")}</ListItemText>
        </MenuItem>

      </StyledMenu>
    </div>
  );
}
