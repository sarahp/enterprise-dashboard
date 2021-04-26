import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import CustomerData from "./data";

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const usdPrice = {
    type: 'number',
    width: 130,
    valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
    cellClassName: 'font-tabular-nums',
};


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'payment', headerName: 'Payment', type: 'money', width: 130},
    { field: 'payment_date', headerName: 'Payment Date', type: 'date', width: 200},
    { field: 'payment_total', headerName: 'Payment Total', type: 'money', width: 200, ...usdPrice}
];



export default function CustomerTable() {
    return (
        <div className='customer-table' style={{ height: 400, width: '100%' }}>
            <h2>Perpay Users</h2>
            <DataGrid
                // getRowId={(row) => CustomerData.users.map(customer => customer.id)}
                rows={CustomerData.users.map(customer => {
                    return {id: customer.id, firstName: customer.firstName, lastName: customer.lastName,
                        payment: customer.payment.amount, payment_date: customer.payment.payment_date, payment_total: customer.payment.amount * customer.payment.number_made}
                    },
                    )} columns={columns} autoPageSize={true} />

        </div>
    );
}
