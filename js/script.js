
const $ =selector => document.querySelector(selector);

const procesEntries = evt =>{
    const email1 =$("#email_1").value;
    const email2= $("#email2").value;

    let isValid = true;

    if(email1 =="")
    {
        $("#error1").textContent ="Email 1 is required.";
        isValid =false;
    }else{
        $("#error1").textContent ="";
    }

    if(email2 =="")
        {
            $("#error2").textContent ="Email 2 is required.";
            isValid =false;
        }else{
            $("#error2").textContent ="";
        }

    if(!isValid)
    {
        evt.preventDefault();
    }

};

document.addEventListener("DOMContentLoaded", () =>{

   $("#join_list").addEventListener("click",procesEntries);
});