import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css"; // Ensure you have appropriate styles in your CSS file

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2024", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2024", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2024", "Approved"),
  createData("Cupcake", 18908421, "2 March 2024", "Delivered"),
  createData("Apple smart watch", 18908421, "2 March 2024", "Delivered"),
  createData("Exide Battery", 18908421, "2 March 2024", "Approved"),
  createData("Samsung Gadget", 18908421, "2 March 2024", "Delivered"),
  createData("Titan Watch", 18908421, "2 March 2024", "Pending"),
  createData("Pancake", 18908421, "2 March 2024", "Delivered"),
  createData("Vanilla syrup", 18908421, "2 March 2024", "Approved"),
  createData("Hanky Panky", 18908421, "2 March 2024", "Pending"),
  createData("Soya Sauce", 18908421, "2 March 2024", "Delivered"),
];

const makeStyle = (status) => {
  if (status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  } else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    }
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          maxHeight: 400, // Set the desired height here
          overflowY: 'auto' // Enable vertical scrolling
        }}
      >
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell align="left" className="Details">Details</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
