import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import CustomerData from "./data";

export default function CustomerTable() {

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
        { field: 'payment', headerName: 'Payment', type: 'money', width: 130, ...usdPrice},
        { field: 'payment_date', headerName: 'Due Date', type: 'date', width: 130},
        { field: 'payment_total', headerName: 'Total Paid', type: 'money', width: 400, ...usdPrice},
        { field: 'company', headerName: 'Company', width: 130 }
    ];

    return (
        <div className='customer-table' style={{ height: 400, width: '100%' }}>
            <h2>Perpay Users</h2>
            <DataGrid
                className="users"
                rows={CustomerData.users.map(customer => {
                    return {id: customer.id, firstName: customer.firstName, lastName: customer.lastName,
                        payment: customer.payment.amount, payment_date: customer.payment.payment_date, payment_total: customer.payment.amount * customer.payment.number_made, company: customer.company.name }
                    }
                    )} columns={columns} autoPageSize={true} />

        </div>
    );
}
