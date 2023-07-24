import React, { useState } from "react";

function Form() {
  //state that holds the first name
  const [firstName, setFirstName] = useState("");

  //state that holds the last name
  const [lastName, setLastName] = useState("");

  //state that holds data that is submitted by the form
  //default is an empty array
  const [submittedData, setSubmittedData] = useState([]);

  //state that holds the errors to come
  //default is an empty array
  const [errors, setErrors] = useState([]);

  //function that gets first name value and 
  //adjusts the firstName variable by passing it into the firstName function
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  //function that gets last name value and 
  //adjusts the lastName variable by passing it into the lastName function
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

//function that handles the onSubmit on the form
function handleSubmit(event) {
  event.preventDefault();
  //checks if the firstName and lastName length is greater than 0 or if not passes else 
  if (firstName.length > 0 && lastName.length > 0) {
    const formData = { 
      firstName: firstName, 
      lastName: lastName };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setErrors([]);
    } else {
      setErrors(["Fullnames are required!"]);
        }
    }

  //function that iterates through the submittedData array and passes the respective data
  //for each 
  const listOfSubmissions = submittedData.map((data, index) => {
  return (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
    );
  });

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} placeholder="Sylvia"/>
      <input type="text" onChange={handleLastNameChange} value={lastName} placeholder="Woods"/>
      <button type="submit">Submit</button>
    </form>
    {/* checks if there is an error that has been passed */}
    {/* then for each error does the listed function */}
    {errors.length > 0 ? 
    errors.map((error, index) => (<p key={index} style={{ color: "red" }}>{error}</p>)) 
    : 
    null}
    {/* passes the submissions */}
    <h3>Submissions</h3>
    {listOfSubmissions}
  </div>
);
}

export default Form;
