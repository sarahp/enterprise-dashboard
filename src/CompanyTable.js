import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import CustomerData from "./data";

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const formatCurrency = (value) => currencyFormatter.format(Number(value));

const CompanyTable = () => {
    return (
        <div className='company-table' style={{ width: '100%' }}>
            <h2>Companies</h2>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Total Users</TableCell>
                            <TableCell align="right">Total Paid</TableCell>
                            <TableCell align="right"># of Payments</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {CustomerData.company.map((company) => (
                            <TableRow key={company.number}>
                                <TableCell>{company.number}</TableCell>
                                <TableCell>{company.name}</TableCell>
                                <TableCell align="right">{company.total_users}</TableCell>
                                <TableCell align="right">{formatCurrency(company.total_payments)}</TableCell>
                                <TableCell align="right">{company.number_paid}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

export default CompanyTable;
