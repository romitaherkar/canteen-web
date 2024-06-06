// let submit = document.getElementById('submitForm')



function runCheck() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let popup = document.getElementById("popup")
   

    if (name === "" || email === "") {
        alert("please fill all details")
    }

    popup.classList.add('open-pop')
    event.preventDefault();

}

function closePopup() {
    let popup = document.getElementById("popup")
    popup.classList.remove("open-pop")
}

// function checkOrder() {
//     // alert("Order is placed")
//     // alert("Go to orders")

//     let order1 = document.getElementById('order1').innerText

//     alert("go to orders")
//     console.log(order1)
//     localStorage.setItem("textvalue" , order1)
//     return false; 
// }

// function checkOrder1() {
//     // alert("Order is placed")
//     // alert("Go to orders")

//     let order2 = document.getElementById('order1').innerText
//     alert("go to orders")
//     console.log(order2)
//     localStorage.setItem("textvalue" , order2)
//     return false; 
// }


function checkOrder(val) {
    console.log(val)
    
    popup.classList.add('open-pop')
    let order = document.getElementById('title').innerText = val.innerText

    localStorage.setItem("textvalue", order)

}