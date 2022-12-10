import { useEffect, useState } from "react";
import Head from "next/head";
import { Box, Container, Card, Grid, ButtonGroup, Button } from "@mui/material";
import { tooths } from "./data/tooths";
import useWindowDimensions from "../../lib/windowDimensions";
import OpcionOdontograma from "./opcionOdontograma";

const RenderChild = ({ columns, actualRow, cllickTooth }) => {
  const child = [];
  for (let iCol = 1; iCol <= columns; iCol++) {
    child.push(
      <div
        style={{ width: 15, height: 15, border: ".5px gray solid", fontSize: 8 }}
        x={actualRow}
        y={iCol}
        onClick={() => cllickTooth({ row: actualRow, col: iCol })}
      >
        {iCol}
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
  const [infoTooth, setInfoTooth] = useState([]);
  const rows = 41;
  const columns = 65;

  const findTooth = (data) => {
    tooths.forEach((tooth) => {
      tooth.coord.map(function (coord) {
        if (coord.x == data.row && coord.y == data.col) {
          console.log("found", tooth);
          setInfoTooth(tooth);
        } else {
        }
      });
    });
  };

  useEffect(() => {
    tooths.forEach((tooth) => {
      const { coord } = tooth;
      coord.forEach((element) => {
        document.querySelector(`div[x='${element.x}'][y='${element.y}']`).style["background"] =
          "red";
      });
    });
  }, [tooths]);

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
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}>
                      {!!infoTooth.name && `${infoTooth.name} #${infoTooth.id}`}
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <OpcionOdontograma />
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
