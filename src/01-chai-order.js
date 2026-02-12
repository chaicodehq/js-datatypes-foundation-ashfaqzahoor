/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu ki chai tapri hai college ke bahar. Customers order dete hain,
 * aur Guddu ko string methods use karke orders handle karne hain.
 * Tu Guddu ka helper hai — basic string methods seekh aur orders process kar!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 *   1. getChaiOrderLength(order)
 *      - Pehle .trim() se extra spaces hatao, phir .length se count karo
 *      - Agar order string nahi hai, return -1
 *      - Example: getChaiOrderLength("  masala chai  ") => 11
 *
 *   2. shoutChaiOrder(order)
 *      - Guddu apne helper ko UPPERCASE mein order shout karta hai
 *      - Pehle .trim() karo, phir .toUpperCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 *
 *   3. whisperChaiOrder(order)
 *      - Jab koi secretly order karta hai, lowercase mein likho
 *      - Pehle .trim() karo, phir .toLowerCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 *
 *   4. hasSpecialIngredient(order, ingredient)
 *      - Check karo ki order mein koi special ingredient hai ya nahi
 *      - Dono ko .toLowerCase() karo, phir .includes() use karo
 *      - Agar koi bhi string nahi hai, return false
 *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 *
 *   5. getFirstAndLastChar(order)
 *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
 *      - Pehle .trim() karo
 *      - Return: { first, last }
 *      - Agar order string nahi hai ya trim ke baad empty hai, return null
 *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }
 *
 * @example
 *   getChaiOrderLength("  masala chai  ")  // => 11
 *   shoutChaiOrder("masala chai")          // => "MASALA CHAI"
 *   hasSpecialIngredient("Elaichi Chai", "elaichi")  // => true
 */
export function getChaiOrderLength(order) {
  // Your code here
//   getChaiOrderLength(order)
//  *      - Pehle .trim() se extra spaces hatao, phir .length se count karo
//  *      - Agar order string nahi hai, return -1
//  *      - Example: getChaiOrderLength("  masala chai  ") => 11

if(typeof order!=="string"){
  return -1;
}
  const trimmer=order.trim();
  return trimmer.length;
}



export function shoutChaiOrder(order) {
  // Your code here
//   shoutChaiOrder(order)
//  *      - Guddu apne helper ko UPPERCASE mein order shout karta hai
//  *      - Pehle .trim() karo, phir .toUpperCase()
//  *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
//  *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
if(typeof order!=="string"){
return "";
}
const trimmer=order.trim();


if(trimmer===""){
  return "";
}
return trimmer.toUpperCase();
}


export function whisperChaiOrder(order) {
  // Your code here
//    whisperChaiOrder(order)
//  *      - Jab koi secretly order karta hai, lowercase mein likho
//  *      - Pehle .trim() karo, phir .toLowerCase()
//  *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
//  *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
if(typeof order!=="string"){
return "";
}

const secret=order.trim();
if(secret===""){
  return "";
}
return secret.toLowerCase();


}

export function hasSpecialIngredient(order, ingredient) {
  // Your code here
//    hasSpecialIngredient(order, ingredient)
//  *      - Check karo ki order mein koi special ingredient hai ya nahi
//  *      - Dono ko .toLowerCase() karo, phir .includes() use karo
//  *      - Agar koi bhi string nahi hai, return false
//  *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 if(typeof order!=="string" ||typeof ingredient!=="string"){
  return false;
 }
 const order1=order.toLowerCase();
 const ingredient1=ingredient.toLowerCase();
 return order1.includes(ingredient1);
}

export function getFirstAndLastChar(order) {
  // Your code here
//   getFirstAndLastChar(order)
//  *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
//  *      - Pehle .trim() karo
//  *      - Return: { first, last }
//  *      - Agar order string nahi hai ya trim ke baad empty hai, return null
//  *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }


if(typeof order!=="string" ){
  return null;
}

const t=order.trim();
if(t===""){
  return null;
}


return {first:t.charAt(0),
last:t.at(-1)};

}
