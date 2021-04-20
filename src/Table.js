import React from 'react';
import CustomerData from "./data";
import Table from "@material-ui/core/Table";


const CustomerTable = () => {

    //TODO Create a table showing Company, Users by company, # of payments, $ total, # of users/employees
    //TODO


    return (

    <main className="App-header">
        <Table>
            <thead>
            <th>Name</th>
            <th>Company</th>
            <th>Payment</th>
            <th>Payment Date</th>
            </thead>
        {CustomerData.users.map((customer, index) => (
            <tbody key={index}>
            <tr>
                <td>{customer.firstName} {customer.lastName}</td>
                <td>{customer.company.name}</td>
                <td>{customer.payment.amount}</td>
                <td>{customer.payment.payment_date}</td>
            </tr>
            </tbody>
        ))
        }
        </Table>

    </main>
    );

};

export default CustomerTable;