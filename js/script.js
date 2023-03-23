const a = document.querySelector('a')
// const a = document.getElementsByTagName('a')
// console.log(a);
a.setAttribute('href','https://www.google.co.th')
a.setAttribute('target','_blank')

const crru = document.getElementsByTagName('crru')
console.log(crru);
crru.innerHTML = `<br> go to crru`
crru.setAttribute('href','https://www.crru.co.th')
crru.setAttribute('target','_blank')

const result={frist_Name:"Pang",Last_Name:"Santa"}
const fullName =`${result.frist_Name} ${result.Last_Name}`

const p = document.querySelector('p')
p.innerHTML = fullName
