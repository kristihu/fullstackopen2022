import React from "react";

function PersonForm({ addName, handleAdd, handleNumber, newName, newNumber }) {
  return (
    <div>
      {" "}
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleAdd} />
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
