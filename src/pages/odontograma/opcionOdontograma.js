import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DatosPersonalesForm from "./components/form/datosPersonalesForm";
import RequeridoOdontograma from "./requeridoOdontograma";
import RealizadoOdontograma from "./realizadoOdontograma";
import CaracteristicaOdontograma from "./caracteristicaOdontograma";
import { useSelector, useDispatch } from "react-redux";
import { setVistaOdontograma } from "../../hooks/odontogramaSlice";

const OpcionOdontograma = ({ toothSelected, coordSelected, setRequired }) => {
  const { vistaOdontograma } = useSelector((state) => state.odontograma);
  const [value, setValue] = useState("info");
  const [tabSatate, setTabState] = useState(true);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(setVistaOdontograma(newValue));
  };

  const validatedForm = (formState) => {
    console.log("validado?", formState);
    setTabState(!formState);
  };

  return (
    <Box>
      <TabContext value={vistaOdontograma}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab value="info" label="Info" onClick={() => console.log("cliced")} />
            <Tab value="requerido" label="Requerido" disabled={tabSatate} />
            <Tab value="realizado" label="Realizado" disabled={tabSatate} />
            <Tab value="caracteristicas" label="Caracteristicas" disabled={tabSatate} />
          </TabList>
        </Box>
        <TabPanel value="info">
          <DatosPersonalesForm validatedForm={(e) => validatedForm(e)} />
        </TabPanel>
        <TabPanel value="requerido">
          <RequeridoOdontograma toothSelected={toothSelected} coordSelected={coordSelected} />
        </TabPanel>
        <TabPanel value="realizado">
          <RealizadoOdontograma toothSelected={toothSelected} coordSelected={coordSelected} />
        </TabPanel>
        <TabPanel value="caracteristicas">
          <CaracteristicaOdontograma toothSelected={toothSelected} coordSelected={coordSelected} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default OpcionOdontograma;
