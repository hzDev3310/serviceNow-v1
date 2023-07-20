import axios from 'axios';

// post data to api
export const handleSignup = async (user, password, name, number, city, job) => {
  try {
    const response = await axios.post('http://localhost:3001/signup', {
      user: "duser",
      password: "password",
      name: "name",
      number: "number",
      job: "job",
      city: "city",
    });
    console.log(response.data); // log the response data
    alert('created');
  } catch (error) {
    console.log(error);
    alert('error'); // show an error message to the user
  }
};

//test if string alphapetic or not
const isAlphabetic = str => {
  return /^[a-zA-Z]+$/.test(str);
};

//test if the input are empty or not

const isValid = (name, familyName, city, number, job, user, password) => {
  if (
    name === '' ||
    familyName === '' ||
    job === '' ||
    city === '' ||
    job === 'Please select your job' ||
    city === 'Please select your City' ||
    number === '' ||
    user === '' ||
    password === ''
  ) {
    return false;
  } else return true;
};

//vefication the correct inputs

export const testName = name => {
  if (!isAlphabetic(name)) {
    return false;
  } else {
    return true;
  }
};
export const testFamilyName = familyName => {
  if (!isAlphabetic(familyName)) {
    return false;
  } else return true;
};

export const testNum = number => {
  if (
    number.length != 8 ||
    !['2', '4', '5', '7', '9'].includes(number.charAt(0))
  ) {
    return false;
  } else return true;
};
export const testPassword = password => {
  if (password.length < 6) {
    return false;
  } else return true;
};
export const testUser = testUser => {
  if (!isAlphabetic(user.charAt(0)) || user.length < 6) {
    return false;
  } else return true;
};
