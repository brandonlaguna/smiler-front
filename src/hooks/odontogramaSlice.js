import { createSlice } from "@reduxjs/toolkit";

export const OdontogramaSlice = createSlice({
  name: "OdontogramaSlice",
  initialState: {
    datosPersonales: {
      nombres: "",
      apellidos: "",
      documento: "",
      telefono: "",
    },
  },
  reducers: {
    setDatosPersonales: (state, action) => {
      state.datosPersonales = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDatosPersonales } = OdontogramaSlice.actions;

export default OdontogramaSlice.reducer;
