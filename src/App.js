import React, { useState, useEffect } from "react";
import FilterForm from "./components/FilterForm";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled", response.data);
      setPersons(response.data);
    });
  }, []);

  const handleAdd = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    console.log(newName, "haloo");
    const checkDuplicates = persons.find((p) => p.name === newName);
    if (!checkDuplicates) {
      setPersons((person) => {
        return [...person, { name: newName, number: newNumber }];
      });
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtered = !search
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );
  console.log(filtered, "filt");

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm search={search} handleSearch={handleSearch} />
      <PersonForm
        addName={addName}
        handleAdd={handleAdd}
        handleNumber={handleNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>

      <Persons filtered={filtered} />
    </div>
  );
};

export default App;
