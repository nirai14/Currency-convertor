let btn=document.getElementById("btn")
let input=document.getElementById("input")
let select=document.querySelectorAll(".currency")
let result=document.getElementById('result')
let curr1,curr2,inputVal;
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(data=>displayDropdown(data))

function displayDropdown(data){
    let curr=Object.entries(data)
   for(let i=0;i<curr.length;i++){
    let den=`<option value="${curr[i][0]}">${curr[i][0]}</option>`;
    console.log(den);
    select[0].innerHTML+=den
    select[1].innerHTML+=den
}
}
btn.addEventListener('click',()=>{
    curr1=select[0].value
    curr2=select[1].value
    inputVal=input.value
    if(curr1===curr2)
    alert("choose other currenencies")
else convert(curr1,curr2,inputVal)
})
function convert(){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
let lite=result.value=Object.values(data.rates)[0]
console.log(lite);
  });

}