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

const OpcionOdontograma = () => {
  const [value, setValue] = useState("1");
  const [tabSatate, setTabState] = useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const validatedForm = (formState) => {
    console.log("validado?", formState);
    setTabState(!formState);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab value="info" label="Info" />
            <Tab value="requerido" label="Requerido" disabled={tabSatate} />
            <Tab value="realizado" label="Realizado" disabled={tabSatate} />
            <Tab value="caracteristicas" label="Caracteristicas" disabled={tabSatate} />
          </TabList>
        </Box>
        <TabPanel value="info">
          <DatosPersonalesForm validatedForm={(e) => validatedForm(e)} />
        </TabPanel>
        <TabPanel value="requerido">
          <RequeridoOdontograma />
        </TabPanel>
        <TabPanel value="realizado">
          <RealizadoOdontograma />
        </TabPanel>
        <TabPanel value="caracteristicas">
          <CaracteristicaOdontograma />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default OpcionOdontograma;
