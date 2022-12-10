import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../hooks/userSlice";
import odontogramaReducer from "../hooks/odontogramaSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    odontograma: odontogramaReducer,
  },
});
