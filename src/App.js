import './App.css';
import React from "react";
import {Table, TableBody, TableRow, Typography, Button} from "@material-ui/core";
import Logo from "./images/logo.svg";
import CustomerData from "./data";
import CustomerTable from "./CustomerTable";
import CompanyTable from "./CompanyTable";
import Chart from "./Chart";
import CompanyPie from "./PieChart";


const App = () => {

    //Calculating the Total Payment Amount

    const customerPaymentTotal = CustomerData.users.map(customer => {
        return customer.payment.amount * customer.payment.number_made
    } );

    const sumTotalPayment = customerPaymentTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const numberPayments = CustomerData.users.map((customer, index) => {
        return customer.payment.number_made
    });

    const sumNumberPayments = numberPayments.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


    //Calculating the number of users and companies

    const numberUsers = CustomerData.users.length;
    const numberCompanies = CustomerData.company.length;



    console.log();


    return (
    <div className="App">

        <header>
            <img className="logo" src={Logo} alt="Logo, green and blue letters spell perpay." />
            <h2 className="num-users-up">Number of Users up <span>6%</span> over past month</h2>
            <Table className="heads-up">
                <TableBody>
                    <TableRow>
                        <th>Total Paid</th>
                        <th>Number of Payments</th>
                        <th>Number of Users</th>
                        <th>Number of Companies</th>
                    </TableRow>
                    <TableRow className="hud-data">
                        <td>${sumTotalPayment}</td>
                        <td>{sumNumberPayments}</td>
                        <td>{numberUsers}</td>
                        <td>{numberCompanies}</td>
                    </TableRow>
                </TableBody>
            </Table>
        </header>
        <main>
            <div className="charts">
            <Chart />
            <CompanyPie />
            </div>

            <div className="main-tables">
            <CustomerTable />
            <CompanyTable />
            </div>
        </main>

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
