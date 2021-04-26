import React from 'react';
import CustomerData from "./data";
import {Table, TableRow, TableBody, TableHead} from "@material-ui/core";
import CustomerTable from "./CustomerTable"
import CompanyTable from "./CompanyTable";

const AllTables = () => {

    //TODO Total the number of payments, you'll need to wrap it in a function without it affecting the other placements.
    //TODO setup company calculations to come from the user data and vice versa.






    return (
        <>
    <main className="main-tables">
        <CustomerTable />

        <CompanyTable />


    </main>
        </>

    );

};

export default AllTables;