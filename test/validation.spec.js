import { validationUser, validationFormSignLogin, validationEmailSign, validationPasswordSign } from "../src/assets/controller/validation.js";
import { validationAge } from "../src/assets/controller/validation.js";
import { validationEmail} from "../src/assets/controller/validation.js";
import { validationPassword } from "../src/assets/controller/validation.js";
import { validationFormRegistre} from "../src/assets/controller/validation.js";
import { validationEvent} from "../src/assets/controller/validation.js";
import { validationDate} from "../src/assets/controller/validation.js";
import { validationAddress} from "../src/assets/controller/validation.js";
import { validationSubway} from "../src/assets/controller/validation.js";
import { validationMessage} from "../src/assets/controller/validation.js";

import { validationFormPublication} from "../src/assets/controller/validation.js";
describe('', () => {

  it('debería retornarnos false si faltan campos', () => {

    expect(validationUser("")).toBe(false)
    
    expect(validationAge("")).toBe(false)
    expect(validationAge("10")).toBe(false)

    expect(validationEmail("")).toBe(false)
    expect(validationPassword("")).toBe(false)
    expect(validationPassword("1567")).toBe(false)
    expect(validationFormRegistre("")).toBe(false)
    expect(validationEmailSign("")).toBe(false)
  
    expect(validationPasswordSign("")).toBe(false)
    expect(validationFormSignLogin("")).toBe(false)
    expect(validationFormRegistre("ana","33","ana@hotmail.com","127")).toBe(false)
    expect(validationEvent("")).toBe(false)
    expect(validationDate("")).toBe(false)
    expect(validationAddress("")).toBe(false)
    expect(validationSubway("")).toBe(false)
    expect(validationMessage("")).toBe(false)
    expect(validationFormPublication("","","","")).toBe(false)
  });

  it('debería retornarnos true si están los campos', () => {
    expect(validationUser("ana")).toBe(true)
    expect(validationAge("33")).toBe(true)
    expect(validationEmail("ana@hotmail.com")).toBe(true)
    expect(validationPassword("1234567")).toBe(true)

    expect(validationFormRegistre("ana","33","ana@hotmail.com","1234567")).toBe(true)
    
    
    expect(validationEvent("arte y sanza")).toBe(true)
    expect(validationDate("2 de julio")).toBe(true)
    expect(validationAddress("avenida mata ")).toBe(true)
    expect(validationSubway("metro baquedano")).toBe(true)
    expect(validationMessage("a bailar al aire libre")).toBe(true)

  });
  
});

    