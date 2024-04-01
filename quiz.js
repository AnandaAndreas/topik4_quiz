function cekEven(number) {
    return number % 2 == 0
}
function cekOdd(number) {
    return number % 2 != 0
}
function reverseString(text){
    const textString = text.split("")
    const reversingText = textString.reverse()
    const joinText = reversingText.join("")
    return joinText
}
function textUpperCase(text){
    return text.toUpperCase()
}
function luasLingkaran(jariJari){
    return 3.14 * jariJari * jariJari
}
console.log(cekEven(12), " ==> genap")
console.log(cekOdd(11), " ==> bukan genap")
console.log(reverseString("Hello"))
console.log(textUpperCase("test"))
console.log(luasLingkaran(12))