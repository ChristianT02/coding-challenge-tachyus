import React from "react";
import { IconButton as IconButtonMui } from "@mui/material";
import FeatherIcon from "feather-icons-react";

const IconButton = ({ onClick, icon, color }) => {
  return (
    <IconButtonMui onClick={onClick} aria-label={icon} color={color} style={{ marginTop: 0 }}>
      <FeatherIcon icon={icon} width="15" height="15" />
    </IconButtonMui>
  );
};

export default IconButton;
