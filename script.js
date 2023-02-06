const form = document.querySelector("#form");
const nameinput = document.QuerySelector("#name");
const emailinput = document.QuerySelector("#email);

form.AddEventListener("Submit", (event) => {
    event.preventDefalut();
    if = nameinput.value === "";
    {
    alert ("Digite o seu nome");
    return;
    }
    
    form.Submit()
    }
    )