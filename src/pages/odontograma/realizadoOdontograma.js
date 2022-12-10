import { useState, useEffect } from "react";
import { dataRealizado } from "./data/dataRealizado";

const RealizadoOdontograma = () => {
  const [listaRealizado, setListaRealizado] = useState(null);

  useEffect(() => {
    if (dataRealizado.length > 0) {
      setListaRealizado(dataRealizado);
    }
  }, [dataRealizado]);

  return <div>{JSON.stringify(listaRealizado)}</div>;
};

export default RealizadoOdontograma;
