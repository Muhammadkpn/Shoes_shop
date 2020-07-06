
let sym =/[!@#$%^&*;]/

let at = /[abc]/
let str ='bcd'
let str2 ='bcd3'
let str3 ='bcd3'
let pass = /^\w+[!@#$%^&*;]/
// console.log(pass.test('sfrsf'))
// console.log(at.test('gdwfc'))
// console.log(letter.test(str))
// console.log(number.test(str2))
// console.log(sym.test(str3))

//test username
let letterUser = /([a-z]|[A-Z])/
let numberUser = /[0-9]/
let symbolUser = /[!@#$%^&*;]/
// console.log(letterUser.test('daf'))
// console.log(numberUser.test('s3rwf'))
// console.log(!symbolUser.test('srwf'))

//test password
let upperCase = /[a-z]/
let lowerCase = /[A-Z]/
let numberPass = /[0-9]/
let symbolPass = /[!@#$%^&*;]/
let symbolPass2 = /([a-z]|[A-Z]|[0-9])$/
// console.log(upperCase.test('Adafewo23'))
// console.log(symbolPass2.test('23srv2A'))

/*
syarat email:
- karakter pertama minimal terdapat 1 karakter huruf besar/kecil/angka => ^([a-z]|[0-9]|[A-Z])+
- karakter '.' dan '-' maksimal 1 karakter dan karakter setelahnya minimal terdapat 1 karakter huruf besar/kecil/angka => ([\.-]?([a-z]|[0-9]|[A-Z])+)* (notes:jumlah kejadian >= 0)
- Karakter '@' maksimal hanya ada satu karakter => @
- Setelah karakter '@' minimal harus ada 2 huruf kecil => ([a-z]){2,}
- Setelah karakter '.' minimal harus ada 2 huruf kecil => ([\.]?([a-z]){2,})* (notes:jumlah kejadian >= 0)
- Akhir dari karakter dengan '.' dan dilanjutkan dengan huruf kecil antara 2 atau 3 => (\.[a-z]{2,3})+$
*/

function ValidateEmail(mail) {
if (/^([a-z]|[0-9]|[A-Z])+([\.-]?([a-z]|[0-9]|[A-Z])+)*@([a-z]){2,}([\.]?[a-z]{2,})*(\.[a-z]{2,3})+$/.test(mail)){
    console.log('Correct email')
  }else{
      console.log("Incorrect email")
  }
}

// ValidateEmail('9.ammadkpnddgm@ddwd')


let users = [
  {
    "id": 1,
    "username": "admin",
    "password": "admin",
    "role": "admin",
    "email": "admin@shoes.com"
  },
  {
    "id": 2,
    "username": "user",
    "password": "user",
    "role": "user",
    "email": "user@gmail.com"
  },
  {
    "username": "Muhammadkpn1308",
    "password": "Mkpn34#12",
    "role": "user",
    "email": "Muhammadkpn@gmail.com",
    "id": 3
  },
  {
    "username": "mkpn1104",
    "password": "Mkpn31%3",
    "role": "user",
    "email": "mkpn1304@gmail.com",
    "id": 4
  },
  {
    "role": "user",
    "username": "Mks*h22",
    "email": "mksrfh@gafs.cpd.com",
    "password": "Dd3!@$%^*;3",
    "id": 5
  }
]

// console.log(users.filter(item => item.username == 'admin'))

let tempCart = [
  {
    "id": 8,
    "images": "https://kickz.akamaized.net/en/media/images/p/1200/JORDAN_WESTBROOK_ONE_TAKE-WHITE_WHITE_BLACK_RAGE_GREEN-1.jpg",
    "name": "JORDAN WESTBROOK ONE TAKE",
    "brand": "JORDAN",
    "color": "WHITE/WHITE-BLACK-RAGE GREEN",
    "size": 40,
    "qty": 3,
    "price": 3000000
  },
  {
    "id": 12,
    "images": "https://kickz.akamaized.net/en/media/images/p/1200/vans-UA_Classic_Slip_On_Breast_Cancer-Breast_Cancer_nude_check_true_white-1.jpg",
    "name": "VANS UA CLASSIC SLIP-ON (BREAST CANCER)",
    "brand": "VANS",
    "color": "cadmium yellow/tidepool",
    "size": 41,
    "qty": 1,
    "price": 543786
  },
]

// for(let i = 0 ; i < tempCart.length ; i++){
//     for(let j = 0 ; j < tempCart.length ; j++){
//         if(tempCart[j] > tempCart[j+1]){
//             let count = tempCart[j]
//             tempCart[j] = tempCart[j+1]
//             tempCart[j+1] = count
//         }
//     }
// }
// console.log("after sort: ",tempCart)
// console.log("after sort: ",tempCart.sort((a,b) => a.color > b.color ? -1 : 1))
// console.log("after sort: ", tempCart.sort((a,b) => (a.brand > b.brand) ? 1 : ((b.brand > a.brand) ? -1 : 0)))
let a = [6,5,1,2,1,6]
console.log(a.sort((a,b) => a < b ? -1 :  a > b ? 1 : 0 ))
