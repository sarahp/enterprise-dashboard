import React, { useEffect, useState } from "react";
import { Table, TableBody, TableRow, TableCell, TableHead, Paper } from "@material-ui/core";
import { fetchCompanies } from "../api/companies";
import formatCurrency from "../utils/currencyFormatter";
import LoadingSpinner from "../utils/loadingSpinner";

const CompanyTable = () => {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companies = await fetchCompanies();
        setCompanies(companies);
      } catch (err) {
        console.error("Error loading company data:", err);
        setError("Failed to load data");
      }
    };
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!companies.length) return <LoadingSpinner />;

  return (
    <div className="company-table" style={{ width: '100%' }}>
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
            {companies.map((company) => (
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
};

export default CompanyTable;
