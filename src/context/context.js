import React, {useReducer, createContext} from 'react';

import contextReducer from 'context/contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":55,"category":"Travel","type":"Expense","date":"2020-12-29","id":"50965431-06b8-4947-aedf-0cb053b0db6a"},{"amount":50,"category":"Business","type":"Income","date":"2020-12-29","id":"fa6fa64d-50e5-4a26-94e3-7c104d19a499"},{"amount":100,"category":"Salary","type":"Income","date":"2020-12-28","id":"a5e2e318-bda7-4fe4-9ff5-f7eff3a4609a"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Action Creators
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id});
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance,
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}