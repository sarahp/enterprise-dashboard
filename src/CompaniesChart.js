import React from "react";
import { Cell, PieChart, Pie, Tooltip } from "recharts";
import CustomerData from "./data";

const data01 = CustomerData.company.map(company => ({name: company.name, value: company.total_payments}));


const colors = [
    "#ff8035",  // bright orange
    "#f548b5",  // vibrant pink
    "#00c1f3",  // sky blue
    "#a862ff",  // purple
    "#00f5b1",  // aqua green
    "#009245",  // medium green
    "#33b5ff",  // light blue
    "#007eff",  // strong blue
    "#f28d00"   // orange-yellow
];

const CompanyPie = () => {
    return (
        <>
            <div className="company-pie">
            <h2>Payments by Company</h2>
            <PieChart width={800} height={400}>
                <Pie data={data01} dataKey="value" nameKey="name" outerRadius={150}>
                    {data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
            </div>
        </>
    );
}

export default CompanyPie;