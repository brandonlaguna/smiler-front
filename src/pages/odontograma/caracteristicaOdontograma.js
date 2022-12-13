import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataCaracteristica } from "./data/dataCaracteristica";
import { setCaracteristica } from "../../hooks/odontogramaSlice";
import { toast } from "react-toastify";
import BarMenu from "./components/BarMenu";

const CaracteristicaOdontograma = ({ toothSelected, coordSelected }) => {
  const dispatch = useDispatch();
  const [listaCaracteristica, setListaCaracteristica] = useState({});
  const { seleccionarDienteCompleto, caracteristica } = useSelector((state) => state.odontograma);

  useEffect(() => {
    if (dataCaracteristica.length > 0) {
      setListaCaracteristica(dataCaracteristica);
    }
  }, [dataCaracteristica]);

  const selectCaracteristic = (caracteristic) => {
    if (toothSelected?.id > 0) {
      if (seleccionarDienteCompleto) {
        dispatch(
          setCaracteristica({
            ...caracteristic,
            toothId: toothSelected.id,
            coord: toothSelected.coord,
          })
        );
      } else {
        dispatch(
          setCaracteristica({ ...caracteristic, toothId: toothSelected.id, coord: [coordSelected] })
        );
      }
    } else {
      toast.warning("Se debe seleccionar un diente!");
    }
  };

  const RenderCaracteristic = () => {
    if (listaCaracteristica.length > 0) {
      return listaCaracteristica.map((car) => (
        <Grid item xs={2} onClick={() => selectCaracteristic(car)}>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia component="img" height="100" image="./assets-public/tooth/tooth.png" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {car.name}
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
        <BarMenu />
      </Grid>
      <Grid container>
        <RenderCaracteristic />
      </Grid>
    </div>
  );
};

export default CaracteristicaOdontograma;
