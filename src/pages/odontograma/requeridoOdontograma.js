import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { dataRequerido } from "./data/dataRequerido";
import { toast } from "react-toastify";
import { setRequerido } from "../../hooks/odontogramaSlice";
import BarMenu from "./components/BarMenu";

const RequeridoOdontograma = ({ toothSelected, coordSelected }) => {
  const dispatch = useDispatch();
  const [listRequerido, setListRequerido] = useState({});
  const [multipleRequerido, setMultipleRequerido] = useState(0);
  const { seleccionarDienteCompleto, requerido } = useSelector((state) => state.odontograma);

  useEffect(() => {
    if (dataRequerido.length > 0) {
      setListRequerido(dataRequerido);
    }
  }, [dataRequerido]);

  const selectRequired = (required) => {
    if (toothSelected?.id > 0) {
      if (seleccionarDienteCompleto) {
        dispatch(
          setRequerido({ ...required, toothId: toothSelected.id, coord: toothSelected.coord })
        );
      } else {
        dispatch(setRequerido({ ...required, toothId: toothSelected.id, coord: [coordSelected] }));
      }
    } else {
      toast.warning("Se debe seleccionar un diente!");
    }
  };
  const RenderRequired = () => {
    if (listRequerido.length > 0) {
      return listRequerido.map((req) => (
        <Grid item xs={2}>
          <Card sx={{ maxWidth: 200 }} onClick={() => selectRequired(req)}>
            <CardMedia component="img" height="100" image="./assets-public/tooth/tooth.png" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {req.name}
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
        <RenderRequired />
      </Grid>
    </div>
  );
};

export default RequeridoOdontograma;
