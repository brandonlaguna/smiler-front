import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataRealizado } from "./data/dataRealizado";
import { setRealizado } from "../../hooks/odontogramaSlice";
import { toast } from "react-toastify";
import BarMenu from "./components/BarMenu";

const RealizadoOdontograma = ({ toothSelected, coordSelected }) => {
  const dispatch = useDispatch();
  const [listaRealizado, setListaRealizado] = useState({});
  const { seleccionarDienteCompleto, realizado } = useSelector((state) => state.odontograma);

  useEffect(() => {
    if (dataRealizado.length > 0) {
      setListaRealizado(dataRealizado);
    }
  }, [dataRealizado]);

  const selectRealized = (realizado) => {
    if (toothSelected?.id > 0) {
      if (seleccionarDienteCompleto) {
        dispatch(
          setRealizado({ ...realizado, toothId: toothSelected.id, coord: toothSelected.coord })
        );
      } else {
        dispatch(setRealizado({ ...realizado, toothId: toothSelected.id, coord: [coordSelected] }));
      }
    } else {
      toast.warning("Se debe seleccionar un diente!");
    }
  };

  const handleMultipleProps = (state) => {
    console.log("multiple props", state);
  };

  const RenderRealized = () => {
    if (listaRealizado.length > 0) {
      return listaRealizado.map((real) => (
        <Grid item xs={2} onClick={() => selectRealized(real)}>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia component="img" height="100" image="./assets-public/tooth/tooth.png" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {real.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ));
    }
  };

  return (
    <div>
      <Grid container style={{ justifyContent: "center", marginBottom: 6 }}>
        <BarMenu multipleProps={handleMultipleProps} />
      </Grid>
      <Grid container>
        <RenderRealized />
      </Grid>
    </div>
  );
};

export default RealizadoOdontograma;
