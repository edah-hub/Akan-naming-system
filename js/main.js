
let form = document.getElementById("form");
let yearOfBirth = document.getElementById("year");
let monthOfBirth = document.getElementById("month");
let dateOfBirth = document.getElementById("date");
let akinName = document.getElementById("display-name");
// let myResult = document.querySelector("#result")
let year;
let month;
let day;

form.addEventListener("submit", (event) =>{
  event.preventDefault();

    year = Number(yearOfBirth.value);
    month = Number(monthOfBirth.value);
    day = Number(dateOfBirth.value)
    if(year<1900 || month>12){
      let invalid = document.getElementById("invalidDate");
      invalid.innerHTML = `kindly make sure you put valid date!!`
    
    }
    var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleGender = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleGender = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var date = new Date(year, (--month) ,day)
   
    var dayOfWeek = weekDay[date.getDay()];
    let akanName1= maleGender[date.getDay()];
    let akanName2 = femaleGender[date.getDay()]
    if (document.getElementById("male").checked){
        
     akinName.innerHTML=  ` you were born on${dayOfWeek} your akan name is ${akanName1}`

    }
    if(document.getElementById("female").checked)
    {
      akinName.innerHTML=  ` you were born on${dayOfWeek} your akan name is ${akanName2}`

    }
  });


   