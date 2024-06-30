import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./styles.module.scss";

import {
  gruvboxDark,
  coldarkDark,
  a11yDark,
  gruvboxLight,
  coldarkCold,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const ITEM_HEIGHT = 52;

export const codeThemes = {
  gruvboxDark,
  coldarkDark,
  a11yDark,
  oneLight,
  gruvboxLight,
  coldarkCold,
};

interface CodeThemeMenuProps {
  defaultTheme?: keyof typeof codeThemes;
  onSetTheme?: (theme: keyof typeof codeThemes) => void;
}

export default function CodeThemeMenu(props: CodeThemeMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleThemeChange = (
    event: React.MouseEvent<HTMLElement>,
    theme: keyof typeof codeThemes
  ) => {
    if (props.onSetTheme) {
      props.onSetTheme(theme);
    }
    handleClose(event);
  };

  const codeThemesItems = React.useMemo(
    () =>
      Object.keys(codeThemes).map((themeKey) => ({
        name: themeKey,
        value: themeKey,
      })),
    []
  );

  return (
    <div className={styles.codeBox_topBar_options}>
      <IconButton
        aria-label="more"
        id="code-menu-button"
        aria-controls={open ? "code-theme-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon className={styles.codeBox_topBar_optionsDots} />
      </IconButton>
      <Menu
        id="code-theme-menu"
        MenuListProps={{
          "aria-labelledby": "code-menu-button",
          className: styles.codeBox_topBar_optionsMenu,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
          },
        }}
      >
        {codeThemesItems.map(({ name, value }) => (
          <MenuItem
            key={`codeTheme-${name}`}
            selected={value === props.defaultTheme}
            onClick={(e) =>
              handleThemeChange(e, value as keyof typeof codeThemes)
            }
            classes={{ selected: styles.codeBox_topBar_optionsMenuSelected }}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
