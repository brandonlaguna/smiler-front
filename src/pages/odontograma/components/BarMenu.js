import { useState } from "react";
import { ButtonGroup, Button } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";

const BarMenu = ({ multipleProps, removeProps, cleanProps }) => {
  const [stateMultipleProps, setStateMultipleProps] = useState(false);
  const [stateRemoveProps, setStateRemoveProps] = useState(false);
  const [stateCleanProps, setStateCleanProps] = useState(false);

  const handleMultipleProps = () => {
    multipleProps(!stateMultipleProps);
    setStateMultipleProps(!stateMultipleProps);
    //set other buttons false
    removeProps(false);
    setStateRemoveProps(false);
    cleanProps(false);
    setStateCleanProps(false);
  };

  const handleRemoveProps = () => {
    removeProps(!stateRemoveProps);
    setStateRemoveProps(!stateRemoveProps);
    //set other buttons false
    multipleProps(false);
    setStateMultipleProps(false);
    cleanProps(false);
    setStateCleanProps(false);
  };

  const handleCleanProps = () => {
    cleanProps(!stateCleanProps);
    setStateCleanProps(!stateCleanProps);
    //set other buttons false
    multipleProps(false);
    setStateMultipleProps(false);
    removeProps(false);
    setStateRemoveProps(false);
  };

  return (
    <ButtonGroup size="small" aria-label="small button group">
      <Button
        onClick={() => handleMultipleProps()}
        startIcon={<AppsIcon />}
        variant={`${stateMultipleProps ? `contained` : `outlined`}`}
      >
        Multiple
      </Button>
      <Button
        onClick={() => handleRemoveProps()}
        startIcon={<RemoveCircleIcon />}
        variant={`${stateRemoveProps ? `contained` : `outlined`}`}
      >
        Remover
      </Button>
      <Button
        onClick={() => handleCleanProps()}
        startIcon={<AutoFixNormalIcon />}
        variant={`${stateCleanProps ? `contained` : `outlined`}`}
      >
        Limpiar
      </Button>
    </ButtonGroup>
  );
};

export default BarMenu;
