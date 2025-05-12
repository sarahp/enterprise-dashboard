import React from "react";
import { Cell, PieChart, Pie, Tooltip } from "recharts";
import CustomerData from "./data";

const data01 = CustomerData.company.map(company => ({name: company.name, value: company.total_payments}));


const colors = [
    "#70B0FA",
    "#3D6BD4",
    "#3D36B2",
    "#7DEBD9",
    "#00A7BD",
    "#017991",
    "#C996BF",
    "#850A4D",
    "#600336"
];

const CompanyPie = () => {
    return (
        <>
            <div className="company-pie">
            <h2>Payments by Company</h2>
            <PieChart width={800} height={400}>
                <Pie data={data01} outerRadius={150}>
                    {data01.map((entry, index) => (
                        <Cell fill={colors[index]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
            </div>
        </>
    );
}

export default CompanyPie;