let number;

let generate_number = ()=>{
let n1= Math.random();

let n2= n1 * 10;

n2 = Math.trunc(n2)

n2 = (n2 % 6 )+1;
number = n2
console.log(number);
}
generate_number()

const generate_number_btn_1 = () =>{
    document.querySelector('#section1').style.display = "none";
    document.querySelector('#section2').style.display = "none";
    document.querySelector('#section3').style.display = "block";
    
setTimeout(() => {
    generate_number_btn_1();
    
     document.querySelector("#user_input").value = "";

    document.querySelector('#section1').style.display = "none";
    document.querySelector('#section2').style.display = "block";
    document.querySelector('#section3').style.display = "none";
}, 3000)


};
// check number

const checknumber = () => {
    let value = document.querySelector("#user_input").value;
    if(value ==number){
        alert(" Congrats,your number is match")
    }else{
    alert("opps! your guess is wrong")};
    
    generate_number_btn_1();
    };























