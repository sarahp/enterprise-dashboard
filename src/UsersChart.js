import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import CustomerData from "./data";


const data = CustomerData.users.map(customer => ({date: customer.firstName, payment: customer.payment.amount}));

const UsersChart = () => (
    <div className="bar-chart">
        <h2>Payment Amounts</h2>
        <BarChart width={500} height={300} data={data}>
            <XAxis dataKey="date" />
            <YAxis dataKey="payment" />
            <Bar dataKey="payment"/>
        </BarChart>
    </div>
);

export default UsersChart;

