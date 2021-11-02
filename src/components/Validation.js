export default function validateInfo(values) {
    let errors = {};
  
    if (!values.name) {
      errors.name = 'Name required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.contact) {
      errors.contact = 'Contact is required';
    } else if (values.contact.length < 10) {
      errors.contact = 'Invalid Number';
    }
    if (!values.place) {
      errors.place = 'State not selected';
    }
    if (!values.gender) {
      errors.gender = 'Gender is not selected';
    } 
    
    return errors;
  }