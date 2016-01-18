var userWord = prompt("enter any word and I will tell you things about it");

document.write('You entered ' + userWord + " ")
document.write('There are ' + userWord.length + ' letters in ' + userWord )
document.write(' The third character in ' + userWord + ' is ' + "'" + userWord.charAt(2) + "'")
document.write('lowercase: ' + userWord.toLowerCase() + " ")
document.write('uppercase: ' + userWord.toUpperCase() + " ")
document.write('Do you desire, I mean think about ' + userWord + 'often?')
document.write('subword: ' + userWord.substr(1,4))