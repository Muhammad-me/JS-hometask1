let welcome = prompt("Welcome to class. Please write your name.");
const students = ["Jakhongir", "Murodjon", "Boburjon", "Azimjon" ,"Akmalxon", "Farruhbek", "Kamoldin", "Muhammad", "MuhammadYusuf", "Vorisxon", "Hikmatillo"];
if (welcome == students[0]){
    alert(`Welcome ${students[0]} teacher`);
}else if (welcome == students[1]){
    alert(`Welcome ${students[1]}`);  
}else if (welcome == students[2]) {   
     alert(`Welcome ${students[2]}`);
}else if (welcome == students[3]) {   
    alert(`Welcome ${students[3]}`);
}else if (welcome == students[4]) {   
    alert(`Welcome ${students[4]}`);
}else if (welcome == students[5]) {   
    alert(`Welcome ${students[5]}`);
}else if (welcome == students[6]) {   
    alert(`Welcome ${students[6]}`);
}else if (welcome == students[7]) {   
    alert(`Welcome ${students[7]}`);
}else if (welcome == students[8]) {   
    alert(`Welcome ${students[8]}`);
}else if (welcome == students[9]) {   
    alert(`Welcome ${students[9]}`);
}else if (welcome == students[10]){   
    alert(`Welcome ${students[10]}`);
}
const studentlar = ["Murodjon; none ", "Boburjon; none ", "Azimjon; none ", "Akmalxon; none ", "Farruhbek; 11 ", "Kamoldin; 10 ", "Muhammad; 11 ", "MuhammadYusuf; 9 ", "Vorisxon; 9 ", "Hikmatillo; 9 "];
const button = document.querySelector(`#btn`);
const btnbosilganda = function newuser(ism) {
    button.classList.add(`.btn`);
    let newuser = prompt(`Please enter your name.`);
    alert(`Thank you and enter your class.`);
    let sinf = prompt(`Please enter your class.`);
    alert(`Thank you for all.`);
    studentlar.push(newuser);
    studentlar.push(sinf);
    alert(studentlar);
}       
button.addEventListener(`click`, btnbosilganda);







