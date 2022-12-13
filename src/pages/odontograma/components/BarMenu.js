import { useState } from "react";
import { ButtonGroup, Button } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";

const BarMenu = ({ multipleProps }) => {
  const [stateMultipleProps, setStateMultipleProps] = useState(false);

  const handleMultipleProps = () => {
    multipleProps(!stateMultipleProps);
    setStateMultipleProps(!stateMultipleProps);
  };

  return (
    <ButtonGroup size="small" aria-label="small button group">
      <Button onClick={() => multipleProps} startIcon={<AppsIcon />}>
        Multiple
      </Button>
      <Button startIcon={<RemoveCircleIcon />}>Remover</Button>
      <Button startIcon={<AutoFixNormalIcon />}>Limpiar</Button>
    </ButtonGroup>
  );
};

export default BarMenu;
