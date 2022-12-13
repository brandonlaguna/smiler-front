import { useEffect, useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { Box, Container, Card, Grid } from "@mui/material";
import { tooths } from "./data/tooths";
import useWindowDimensions from "../../lib/windowDimensions";
import OpcionOdontograma from "./opcionOdontograma";
import SwitchTooth from "./components/switchTooth";

const RenderChild = ({ columns, actualRow, cllickTooth }) => {
  const child = [];
  for (let iCol = 1; iCol <= columns; iCol++) {
    child.push(
      <div
        style={{ width: 15, height: 15, fontSize: 8 }}
        x={actualRow}
        y={iCol}
        onClick={() => cllickTooth({ row: actualRow, col: iCol })}
      >
        {/* {iCol} */}
      </div>
    );
  }
  return child;
};

const RenderBox = ({ rows, columns, cllickTooth }) => {
  const items = [];
  for (let iRow = 1; iRow <= rows; iRow++) {
    items.push(
      <div style={{ textAlign: "center", display: "inline-block" }}>
        <span style={{ fontSize: 5 }}>{iRow}</span>
        <RenderChild columns={columns} actualRow={iRow} cllickTooth={cllickTooth} />
      </div>
    );
  }
  return items;
};

const Page = () => {
  const { height, width } = useWindowDimensions();
  const { requerido, realizado, caracteristicas, vistaOdontograma } = useSelector(
    (state) => state.odontograma
  );
  const [infoTooth, setInfoTooth] = useState([]);
  const [coordSelected, setCoordSelected] = useState({});
  const rows = 41;
  const columns = 65;

  const findTooth = (data) => {
    tooths.forEach((tooth) => {
      tooth.coord.map(function (coord) {
        if (coord.x == data.row && coord.y == data.col) {
          setInfoTooth(tooth);
          setCoordSelected({
            x: data.row,
            y: data.col,
          });
        } else {
        }
      });
    });
  };

  useEffect(() => {
    tooths.forEach((tooth) => {
      const { coord } = tooth;
      // coord.forEach((element) => {
      //   document.querySelector(`div[x='${element.x}'][y='${element.y}']`).style["background"] =
      //     "red";
      // });
    });
  }, [tooths]);

  useEffect(() => {
    if (requerido.length && vistaOdontograma === "requerido") {
      requerido.forEach((element) => {
        const { coord } = element;
        coord.forEach((c) => {
          const divElement = document.querySelector(`div[x='${c.x}'][y='${c.y}']`);
          divElement.style.backgroundImage = `url('${element.minipicture}')`;
          divElement.style.backgroundSize = "80% 80%";
          divElement.style.backgroundRepeat = "no-repeat";
        });
      });
    }
  }, [requerido, vistaOdontograma]);

  useEffect(() => {
    if (realizado.length && vistaOdontograma === "realizado") {
      realizado.forEach((element) => {
        console.log("element", element.coord);
        const { coord } = element;
        coord.forEach((c) => {
          const divElement = document.querySelector(`div[x='${c.x}'][y='${c.y}']`);
          divElement.style.backgroundImage = `url('${element.minipicture}')`;
          divElement.style.backgroundSize = "80% 80%";
          divElement.style.backgroundRepeat = "no-repeat";
        });
      });
    }
  }, [realizado, vistaOdontograma]);

  useEffect(() => {
    if (caracteristicas.length && vistaOdontograma === "caracteristicas") {
      caracteristicas.forEach((element) => {
        const { coord } = element;
        coord.forEach((c) => {
          const divElement = document.querySelector(`div[x='${c.x}'][y='${c.y}']`);
          divElement.style.backgroundImage = `url('${element.minipicture}')`;
          divElement.style.backgroundSize = "80% 80%";
          divElement.style.backgroundRepeat = "no-repeat";
        });
      });
    }
  }, [caracteristicas, vistaOdontograma]);

  return (
    <>
      <Head>
        <title>Odontograma</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          background: "white",
        }}
      >
        <Container maxWidth={false} style={{ display: "inline-block", width: width }}>
          <div
            style={{
              width: 615,
              backgroundImage:
                'url("https://i1.wp.com/fabianvillena.cl/blog/wp-content/uploads/2019/11/fdi-1.png?fit=580%2C908&ssl=1")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              float: "left",
            }}
          >
            <RenderBox rows={rows} columns={columns} cllickTooth={(e) => findTooth(e)} />
          </div>
          <div
            style={{
              width: width - 700,
              display: "inline-block",
              float: "right",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card>
                  <Grid container>
                    <Grid item xs={12} sm={1} md={1}>
                      <img src={infoTooth.renderimg} width="60px" />
                    </Grid>
                    <Grid item xs={12} sm={7} md={7}>
                      {!!infoTooth.name && `${infoTooth.name} #${infoTooth.id}`}
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      {!!infoTooth.name && <SwitchTooth />}
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <OpcionOdontograma toothSelected={infoTooth} coordSelected={coordSelected} />
              </Grid>
            </Grid>
          </div>
        </Container>
      </Box>
    </>
  );
};

// Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
