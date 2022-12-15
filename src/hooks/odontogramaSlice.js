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
    requerido: [],
    realizado: [],
    caracteristicas: [],
    counter: 0,
    seleccionarDienteCompleto: false,
    vistaOdontograma: "info",
    multipleRequerido: false,
    removeRequerido: false,
    cleanRequerido: false,
  },
  reducers: {
    setDatosPersonales: (state, action) => {
      state.datosPersonales = action.payload;
    },
    setRequerido: (state, action) => {
      const stateRequerido = state.requerido;
      stateRequerido.push(action.payload);
      state.requerido = stateRequerido;
    },
    setRealizado: (state, action) => {
      const stateRealizado = state.realizado;
      stateRealizado.push(action.payload);
      state.realizado = stateRealizado;
    },
    setCaracteristica: (state, action) => {
      const stateCaracteristica = state.caracteristicas;
      stateCaracteristica.push(action.payload);
      state.caracteristicas = stateCaracteristica;
    },
    setSelectDienteCompleto: (state, action) => {
      state.seleccionarDienteCompleto = action.payload;
    },
    setVistaOdontograma: (state, action) => {
      state.vistaOdontograma = action.payload;
    },
    setMultipleRequerido: (state, action) => {
      state.multipleRequerido = action.payload;
    },
    setRemoveRequerido: (state, action) => {
      state.removeRequerido = action.payload;
    },
    setCleanRequerido: (state, action) => {
      state.cleanRequerido = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setDatosPersonales,
  setRequerido,
  setRealizado,
  setCaracteristica,
  setSelectDienteCompleto,
  setVistaOdontograma,
  setMultipleRequerido,
  setRemoveRequerido,
  setCleanRequerido,
} = OdontogramaSlice.actions;

export default OdontogramaSlice.reducer;
