import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import CustomerData from "./data";

const CustomerTable = () => {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const formatCurrency = (value) => currencyFormatter.format(Number(value));

    return (
        <div className='customer-table' style={{ width: '100%' }}>
            <h2>Perpay Users</h2>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell align="right">Payment</TableCell>
                            <TableCell>Due Date</TableCell>
                            <TableCell align="right">Total Paid</TableCell>
                            <TableCell>Company</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {CustomerData.users.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell>{customer.id}</TableCell>
                                <TableCell>{customer.firstName}</TableCell>
                                <TableCell>{customer.lastName}</TableCell>
                                <TableCell align="right">{formatCurrency(customer.payment.amount)}</TableCell>
                                <TableCell>{customer.payment.payment_date}</TableCell>
                                <TableCell align="right">{formatCurrency(customer.payment.amount * customer.payment.number_made)}</TableCell>
                                <TableCell>{customer.company.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};

export default CustomerTable;
