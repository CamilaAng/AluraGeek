export const tiposErrores = [
    "valueMissing",
    "typeMissmatch",
    "patternMissmatch",
    "tooShort",
    "customError"
];

export const mensajes = {
    nombre: {
        valueMissing: "PELIGRO! El campo nombre no puede estar vacío.",
        patternMismatch: "PELIGRO! Por favor, ingrese un nombre válido.",
        tooShort: "PELIGRO! Por favor, ingrese un nombre válido.",
    },
    precio: {
        valueMissing: "PELIGRO! El campo precio no puede estar vacío.",
        patternMismatch: "PELIGRO! Por favor, ingresa la cantidad correcta.",
        tooShort: "PELIGRO! El campo no tiene caracteres suficientes.",
    },
    imagen: {
        valueMissing: "PELIGRO! El campo imagen no puede estar vacío.",
        patternMismatch: "PELIGRO! Por favor, ingresa una imagen válida.",
        customError: "PELIGRO! La imagen ingresada no existe.",
    },
    email: {
        valueMissing: "PELIGRO! El campo email no puede estar vacío.",
        patternMismatch: "PELIGRO! Por favor, ingrese un email válido.",
        tooShort: "PELIGRO! Por favor, ingrese un e-mail válido.",
    },
};