import React from "react";
import { startEditExpense } from "../actions/expenses";
import ExpenseForm from "./expenseForm";
import { connect } from "react-redux";
import { setRemoveExpense } from "../actions/expenses";

const Edit = props => {
  return (
    <div className="expense__add">
      <div className="expense__add_container">
        <h1>Edit Expense </h1>
        <ExpenseForm
          expense={props.expense}
          onSubmit={expense => {
            props.dispatch(startEditExpense(props.expense.id, expense));
            props.history.push("/main");
          }}
        />
        <button
          className="expense__add_container_remove"
          onClick={() => {
            props.dispatch(setRemoveExpense({ id: props.expense.id }));
            props.history.push("/main");
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const MapStateToProps = (state, props) => {
  return {
    expense: state.expense.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(MapStateToProps)(Edit);
