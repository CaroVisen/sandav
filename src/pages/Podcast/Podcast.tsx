import React from "react";
import usePodcast from "./usePodcast";
import PodcastCardDetails from "../../componentes/PodcastCardDetail/PodcastCardDetails";
import BasicCard from "../../componentes/BasicCard/BasicCard";
import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./styles";
import { format } from "date-fns";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Podcast = (props: any) => {
  const { podcastSelected, episodes } = usePodcast();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "5% 10%",
        gap: "5%",
      }}
    >
      <PodcastCardDetails />
      <div
        style={{
          width: "60%",
          gap: "5%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BasicCard>
          <h3 style={{ textAlign: "left", margin: "2%" }}>Episodes: 66</h3>
        </BasicCard>
        <br />
        <BasicCard>
          <Table
            sx={{ width: "90%", margin: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Duration</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {episodes.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    <a
                      href={"episode/" + row.id}
                      style={{ textDecoration: "none" }}
                    >
                      {row.name}
                    </a>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {format(new Date(), "yyyy-MM-dd HH:mm:ss")}
                  </StyledTableCell>
                  <StyledTableCell align="right">1:30.20</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </BasicCard>
      </div>
    </div>
  );
};

export default Podcast;
