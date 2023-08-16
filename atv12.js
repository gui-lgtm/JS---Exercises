function ehPalindromo(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    var reversedStr = str.split('').reverse().join(''); 
    return str === reversedStr; 
}

console.log(ehPalindromo("radar")); 
console.log(ehPalindromo("hello")); 
console.log(ehPalindromo("A man, a plan, a canal, Panama")); 
