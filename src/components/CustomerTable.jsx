import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Paper
} from '@material-ui/core';
import formatCurrency from "../utils/currencyFormatter";
import { fetchUsers } from "../api/users";
import LoadingSpinner from "../utils/loadingSpinner";

const CustomerTable = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await fetchUsers();
        setUsers(users);
      } catch (err) {
        console.error("Error loading user data:", err);
        setError("Failed to load data");
      }
    };
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!users.length) return <LoadingSpinner />;

  return (
    <div className='customer-table' style={{ width: '100%' }}>
      <h2>Users</h2>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="right">Payment</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell align="right">Total Paid</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell align="right">{formatCurrency(user.payment.amount)}</TableCell>
                <TableCell>{user.payment.payment_date}</TableCell>
                <TableCell align="right">{formatCurrency(user.payment.amount * user.payment.number_made)}</TableCell>
                <TableCell>{user.company.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default CustomerTable;
