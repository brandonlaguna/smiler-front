import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setSelectDienteCompleto } from "../../../hooks/odontogramaSlice";
const SwitchTooth = () => {
  const [checked, setChecked] = useState(false);
  const { seleccionarDienteCompleto } = useSelector((state) => state.odontograma);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setChecked(event.target.checked);
    dispatch(setSelectDienteCompleto(event.target.checked));
  };

  useEffect(() => {
    setChecked(seleccionarDienteCompleto);
  }, [seleccionarDienteCompleto]);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label="Diente completo"
    />
  );
};

export default SwitchTooth;
