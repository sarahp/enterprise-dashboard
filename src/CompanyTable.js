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
    { field: 'number_payments', headerName: 'Total Paid', type: 'number', width: 300, ...usdPrice},
    { field: 'number_paid', headerName: '# of Payments', type: 'number', width: 130}
];



export default function CompanyTable() {
    return (
        <div className='company-table' style={{ height: 400, width: '100%' }}>
            <h2>Perpay Companies</h2>
            <DataGrid
                className="company"
                rows={CustomerData.company.map(company => {
                    return {id: company.number, name: company.name, total_users: company.total_users, number_payments: company.total_payments, number_paid: company.number_paid}
                    },
                    )} columns={columns} autoPageSize={true} />

        </div>
    );
}
