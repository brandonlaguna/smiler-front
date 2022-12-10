import { useState, useEffect } from "react";
import { dataRequerido } from "./data/dataRequerido";

const RequeridoOdontograma = () => {
  const [listRequerido, setListRequerido] = useState(null);

  useEffect(() => {
    if (dataRequerido.length > 0) {
      setListRequerido(dataRequerido);
    }
  }, [dataRequerido]);

  return <div>{JSON.stringify(listRequerido)}</div>;
};

export default RequeridoOdontograma;
