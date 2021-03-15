const DataValidation = (values) => {
  const errors = {};

  if (!values.id || values.id === "") {
    errors.id = "ID must be filled!";
  }

  if (!values.firstName || values.firstName === "") {
    errors.firstName = "First Name must be filled!";
  }

  if (!values.lastName || values.lastName === "") {
    errors.lastName = "Last Name must be filled!";
  }

  if (!values.age || values.id === "") {
    errors.age = "Age must be filled!";
  }

  return errors;
};

export default DataValidation;
