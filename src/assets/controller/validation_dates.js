
export const validationUser = user => {
  if (user === "") {
    swal.fire("Ingresa tu nombre");    
    return false;
  }
  if (typeof user === "undefined") {
    

    return false;
  }

  return true;
};

export const validationAge = age => {
  if (age === "") {
    swal.fire("Ingresa tu edad");    
    
    return false;
  }
  if (age < 16) {
    swal.fire("Debes ser mayor a 16 años");    

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
    swal.fire("Ingresa tu mail");    
    return false;
  }
  if (typeof email === "undefined") {
    swal.fire("Ingresa un email correcto");    
    return false;
  }

 
  return true;
};

export const validationPassword = password => {
  if (password === "") {
    swal.fire("Ingresa una contraseña");    
    return false;
  }
  if (typeof password === "undefined") {
    swal.fire("Ingresa una contraseña correcta");    
    return false;
  }
  if (password.length < 6) {
    swal.fire("La contraseña debe tener al menos 6 caracteres");    
    return false;
  }

 
  return true;
};

export const validationExpRegEmail = email => {
 
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
 
  return re.test(email);
  
};

export const validationFormRegistreDates = (user, age, email, password) => {
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
    swal.fire("Ingresa tu email correcto");    
    return false;
  }
}

export const validationPasswordSign = password => {
  if (password === "") {
    swal.fire("Ingresa tu contraseña");    
    return false;
  }
}

export const validationFormSignLoginDates = (email, password) => {
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

export const validationFormPublication = (event, date, address, subway, message) => {
  if (validationEvent(event) === false || validationDate(date) === false || validationAddress(address) === false || validationSubway(subway) ===false || validationMessage(message) ===false ) {

  
    return false;
  }
  else {
   
    return true;

  }

};