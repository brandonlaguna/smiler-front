import { setDatosPersonales } from "../../hooks/odontogramaSlice";

export const setDatosPersonalesAC = (data, dispatch) => {
  dispatch(setDatosPersonales(data));
};
