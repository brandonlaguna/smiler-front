import { useState, useEffect } from "react";
import { dataCaracteristica } from "./data/dataCaracteristica";

const CaracteristicaOdontograma = () => {
  const [listaCaracteristica, setListaCaracteristica] = useState(null);

  useEffect(() => {
    if (dataCaracteristica.length > 0) {
      setListaCaracteristica(dataCaracteristica);
    }
  }, [dataCaracteristica]);

  return <div>{JSON.stringify(listaCaracteristica)}</div>;
};

export default CaracteristicaOdontograma;
