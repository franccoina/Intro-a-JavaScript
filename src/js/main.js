// const hey="Hola";
// let username="David Blandón";
// let age=20;
// let alive=true;
// let address="CL. 35 #16 A-5";
// let email="franccoina@gmail.com";
// let phone="3504691236";

// // alert(hey);
// console.log("Enhorabuena, es",alive,"que estas vivo. Tu nombre es",username,"y tu edad es",age,);
// console.warn(`Tu dirección es ${address}, tu email es ${email} y tu telefono es ${phone}`);
// console.error("Tu dirección es"+ address +"tu email es"+email+"y tu telefono es"+phone);

// console.log(email);
// console.warn(username);
// console.error(age);
// console.info(address);
// console.debug(phone);
// console.assert(alive);

// console.log(`%c${address}`, "background-color: #D9CEFF ;border-radius:20px; color:#00000F; padding: 10px")

// console.group("Info Básica")
// console.log(email);
// console.warn(username);
// console.error(age);
// console.groupEnd();

// list = ['ana','carlos','emma'];

// console.log(list);
// console.table(list);

// Swal.fire({
//     title: "Hey!",
//     text: "WELCOME TO OUR PAGE",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image"
//     });

let fav = prompt("Ingresa tu objeto favorito");
let username= prompt("Ingresa tu nombre");

let address=prompt("Ingresa tu dirección");
let email=prompt("Ingresa tu email");
let phone=prompt("Ingresa tu número de teléfono");

console.log(`Tu nombre es ${username} y tu objeto favorito es ${fav}`);
console.info("Tu dirección es "+ address +", tu email es "+ email +"y tu telefono es"+ phone);

