import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/transactions')
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the transactions!', error);
      });
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      {/* <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction.message}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default TransactionList;
