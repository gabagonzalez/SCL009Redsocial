// Validation of registration fields

// HU2 Validation Email Registry.
export const validationUser = user => {
  if (user === "") {
    
    

    
    return false;
  }
  if (typeof user === "undefined") {
    

    return false;
  }

  return true;
};

export const validationAge = age => {
  if (age === "") {
    
    
    return false;
  }
  if (age < 16) {
  

    ;
    return false;
  }
  if (typeof age === "undefined") {
   
    return false;
  }


  return true;
};

export const validationEmail = email => {
  if (email === "") {
    
    return false;
  }
  if (typeof email === "undefined") {
   
    return false;
  }

 
  return true;
};

export const validationPassword = password => {
  if (password === "") {
    
    return false;
  }
  if (typeof password === "undefined") {
   
    return false;
  }
  if (password.length < 6) {
   
    return false;
  }

 
  return true;
};

export const validationExpRegEmail = email => {
 
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
 
  return re.test(email);
  
};

export const validationFormRegistre = (user, age, email, password) => {
  if (validationUser(user) === false || validationAge(age) === false || validationEmail(email) === false || validationPassword(password) === false || !validationExpRegEmail(email)) {

    
    return false;
  }
  else {

    return true;

  }

};


// HU3 Validation Login Email
// export const resultValidationForm = validationForm(email, password);

export const validationEmailSign = email => {
  if (email === "") {
   
    return false;
  }
}

export const validationPasswordSign = password => {
  if (password === "") {
    
    return false;
  }
}
export const validationFormSignLogin = (email, password) => {
  if (validationEmailSign(email) === false || validationPasswordSign(password) === false || !validationExpRegEmail(email)) {

   
    return false;
  }
  else {

    return true;

  }

};

//HU4 Validation Post Publication.


export const validationEvent = event => {
  if (event === "") {
  

   
    return false;
  }
  
    return true;
};

export const validationDate = date => {
  if (date === "") {
    
    return false;
  }
  if (typeof date === "undefined") {
    
    return false;
  }
 
  return true;
};

export const validationAddress = address => {
  if (address === "") {
    
    return false;
  }
  if (typeof address === "undefined") {
    
    return false;
  }
 
  return true;
};

export const validationSubway = subway => {
  if (subway === "") {
  
    return false;
  }
  if (typeof subway === "undefined") {
  
  }
 
  return true;
};

export const validationMessage = message => {
  if (message === "") {
    
    return false;
  }
    
    return true;
};

export const validationFormPublication = (event, address, subway, date, message) => {
  if (validationEvent(event) === false || validationAddress(address) === false || validationSubway(subway) ===false || validationDate(date) === false || validationMessage(message) ===false ) {

  
    return false;
  }
  else {

    return true;

  }

};