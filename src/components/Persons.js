import React from "react";

function Persons({ filtered }) {
  return (
    <div>
      {filtered.map((person) => {
        return (
          <p key={person.name}>
            {person.name} - {person.number}
          </p>
        );
      })}
    </div>
  );
}

export default Persons;
