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
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'total_users', headerName: 'Total Users', type: 'number', width: 130},
    { field: 'number_payments', headerName: 'Number of Payments', type: 'number', width: 200, ...usdPrice},
];



export default function CompanyTable() {
    return (
        <div className='company-table' style={{ height: 400, width: '80%' }}>
            <h2>Perpay Companies</h2>
            <DataGrid
                // getRowId={(row) => CustomerData.users.map(customer => customer.id)}
                rows={CustomerData.company.map(company => {
                    return {id: company.number, name: company.name, total_users: company.total_users, number_payments: company.total_payments}
                    },
                    )} columns={columns} autoPageSize={true} />

        </div>
    );
}
