const field_regexp = {
  name: /^[A-Z]{3,30}$/,// minimal 3 huruf dan harus huruf kapital semuanya
  age: /^\d{2}$/, // 2 digit angka
  username: /^([a-z]{4})[\._](\d{3})$/, // kombinasi dari 4 huruf kecil lalu diikuti garis bawah "_" atau titik "." dan 3 digit angka
}

function is_name_valid(name = '') {
  let regexp = new RegExp(field_regexp['name']);
  return regexp.test(name);
}

function is_age_valid(age = '') {
  let regexp = new RegExp(field_regexp['age']);
  return regexp.test(age);
}

function is_username_valid(username = '') {
  let regexp = new RegExp(field_regexp['username']);
  return regexp.test(username);
}

// console log output
console.log(is_name_valid('Yusfa')); // return false
console.log(is_name_valid('YUSFA')); // return true
console.log(is_age_valid('2')); // return false
console.log(is_age_valid('23')); // return true
console.log(is_username_valid('yus_fa')); // return false
console.log(is_username_valid('yusf.996')); // return true

