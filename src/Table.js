import React from 'react';
import CustomerData from "./data";
import Table from "@material-ui/core/Table";


const CustomerTable = () => {

    //TODO Create a table showing Company, Users by company, # of payments, $ total, # of users/employees
    //TODO Add a Filter to the table
    //TODO add a sort to each column
    //TODO Total the number of payments, you'll need to wrap it in a function. You also need to figure out how to get the data into a function outside of the table.


    return (

    <main className="App-header">
        <Table>
            <thead>
            <th>Name</th>
            <th>Company</th>
            <th>Payment</th>
            <th>Payment Date</th>
            <th>Payments Made</th>
            </thead>
        {CustomerData.users.map((customer, index) => (
            <tbody key={index}>
            <tr>
                <td>{customer.firstName} {customer.lastName}</td>
                <td>{customer.company.name}</td>
                <td>{customer.payment.amount}</td>
                <td>{customer.payment.payment_date}</td>
                <td>{customer.payment.number_made}</td>
                <td>{customer.payment.number_made} * {customer.payment.amount}</td>
            </tr>
            </tbody>
        ))
        }
        </Table>

    </main>
    );

};

export default CustomerTable;