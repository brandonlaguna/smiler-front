import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import Grid from "@mui/system/Unstable_Grid/Grid";
import SendIcon from "@mui/icons-material/Send";
import * as yup from "yup";
import { setDatosPersonales, setVistaOdontograma } from "../../../../hooks/odontogramaSlice";

const ariaLabel = { "aria-label": "description" };

const schema = yup
  .object({
    nombres: yup.string().required("El nombre es obligatorio"),
    apellidos: yup.string().required("El apellido es obligatorio"),
    documento: yup
      .number()
      .typeError("Debe ser numerico")
      .positive()
      .integer()
      .required("El docmento es obligatorio"),
    telefono: yup
      .number()
      .typeError("Debe ser numerico")
      .positive()
      .integer()
      .required("El telefono es obligatorio"),
  })
  .required();

const DatosPersonalesForm = ({ validatedForm }) => {
  const dispatch = useDispatch();
  const { datosPersonales } = useSelector((state) => state.odontograma);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});
  const deffValues = {
    nombres: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: datosPersonales,
  });
  const onSubmit = (data) => {
    setLoading(true);
    validatedForm(true);
    dispatch(setDatosPersonales(data));
    dispatch(setVistaOdontograma("requerido"));
  };

  useEffect(() => {
    console.log("se almaceno", datosPersonales);
  }, [datosPersonales]);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            id="outlined-required"
            label="Nombres"
            helperText={errors.nombres?.message}
            error={errors.nombres ? true : false}
            {...register("nombres")}
            inputProps={ariaLabel}
            onChange={(e) => setValues({ ...values, nombres: e.target.value })}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            id="outlined-required"
            label="Apellidos"
            helperText={errors.apellidos?.message}
            error={errors.apellidos ? true : false}
            {...register("apellidos")}
            inputProps={ariaLabel}
            onChange={(e) => setValues({ ...values, apellidos: e.target.value })}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            id="outlined-required"
            label="Documento"
            helperText={errors.documento?.message}
            error={errors.documento ? true : false}
            {...register("documento")}
            onChange={(e) => setValues({ ...values, documento: e.target.value })}
            inputProps={ariaLabel}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            id="outlined-required"
            label="Telefono"
            helperText={errors.telefono?.message}
            error={errors.telefono ? true : false}
            {...register("telefono")}
            onChange={(e) => setValues({ ...values, telefono: e.target.value })}
            inputProps={ariaLabel}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <LoadingButton
            size="small"
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            type="submit"
            fullWidth
            // disabled={datosPersonales.nombres == "" ? false : true}
          >
            Guardar
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DatosPersonalesForm;
