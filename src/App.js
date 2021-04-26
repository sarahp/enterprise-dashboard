import './App.css';
import AllTables from './Table.js';
import React from "react";
import {Table, TableBody, TableRow, Typography, Link, Button} from "@material-ui/core";
import Logo from "./images/logo.png";


const App = () => {


    return (
    <div className="App">
        <header>
            <img className="logo" src={Logo} alt="Logo, green and blue letters spell perpay." />
            <h2>Number of Users up <span>6%</span> over past month</h2>
            <Table className="heads-up">
                <TableBody>
                    <TableRow>
                        <th>Total Paid</th>
                        <th>Number of Payments</th>
                        <th>Number of Users</th>
                        <th>Number of Companies</th>
                    </TableRow>
                    <TableRow>
                        <td>$3000</td>
                        <td>150</td>
                        <td>30</td>
                        <td>3</td>
                    </TableRow>
                </TableBody>
            </Table>
        </header>



        <AllTables />

        <footer>
            <Typography className="footer-menu">
                <Button href="#">
                    Dashboard Demo
                </Button>
                <Button href="#">
                    Marketing Dashboard
                </Button>
                <Button href="#">
                    Sales Info
                </Button>
                <Button href="#">
                    Growth Goals
                </Button>

            </Typography>
        </footer>


    </div>
  );
}

export default App;
