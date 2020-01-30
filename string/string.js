//Создайте из четных символов строки st1 строку str2 и из нечетных символов - строку str3.

let str1 = '11223344556677889900';
let str2, str3 = '';

for (let i = 0; i < str1.length; i++) {
    i % 2 === 0  ?  ((str2 !== undefined) ? str2 = str2 + str1[i] : str2 = str1[i]) : str3 = str3 + str1[i];
}
console.log(str1);
console.log(str2);
console.log(str3);


//Перевернуть строку, т.е. последние символы должны стать первыми, а первые последними.

for (let j = 0; j < str1.length / 2; j++) {
    let startTemporary = str1[j];
    str1[j] = str1[str1.length - 1 - j];
    str1[str1[length - 1 -j]] = startTemporary;
}
console.log(str1);