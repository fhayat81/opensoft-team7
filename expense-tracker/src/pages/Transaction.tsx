import React, { useState } from "react";

const Transaction = () => {
  const [type, setType] = useState("Income");
  const [title, setTitle] = useState("Untitled");
  const [name, setName] = useState("Unknown");
  return (
    <div className="dark:text-white p-3 flex justify-center">
      <div className="w-[900px] rounded-sm dark:shadow-[0_4px_10px_rgba(255,255,255,0.2)] shadow-lg p-2">
        <form className="flex flex-col gap-y-3">
          <div className="flex gap-x-3 items-center">
            <label className="font-bold">Type:</label>
            <label htmlFor="checkbox1">
              <input
                type="checkbox"
                id="checkbox1"
                checked={type == "Income"}
                onClick={() => {
                  setType("Income");
                }}
                className="form-checkbox mx-2 h-3 w-3 text-black border-gray-300 rounded"
              />
              <span>Income</span>
            </label>
            <label htmlFor="checkbox2">
              <input
                type="checkbox"
                id="checkbox2"
                checked={type == "Expense"}
                onClick={() => {
                  setType("Expense");
                }}
                className="form-checkbox mx-2 h-3 w-3 text-black border-gray-300 rounded"
              />
              <span>Expense</span>
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <label className="font-bold">Title: </label>
            <input
              type="text"
              placeholder="Untitled"
              className="border w-full text-right px-2 py-1 border-black rounded-sm dark:border-white dark:bg-slate-900"
              onChange={(e)=>{setTitle(e.target.value)}}
            />
          </div>
          <div className="flex items-center gap-x-3">
            <label className="font-bold w-[50px]">{type == "Income"? "From:":"To:"}</label>
            <input
              type="text"
              placeholder="Unknown"
              className="border w-full text-right px-2 py-1 border-black rounded-sm dark:border-white dark:bg-slate-900"
              onChange={(e)=>{setName(e.target.value)}}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transaction;
