var amount = localStorage.getItem("total")
console.log(amount)

document.querySelector(".totalamount").textContent=`$${amount}`
document.querySelector(".cost").textContent=`$${amount}`

var finalcost = amount - 89.15

document.querySelector(".savingcostnew").textContent=`$${finalcost}`

var arr = JSON.parse(localStorage.getItem("sofaitems"))
console.log(arr)

function orderplaced(){
    alert ("Your Order get placed sucessfully ");
    window.location.href="index.html"

}

arr.map(function(x){

    var box1 = document.createElement("div")
    // box1.style.border = "1px solid black"
    box1.style.display = "flex"
    box1.style.marginBottom = "7px"
    
    var tp = document.createElement("p")
    tp.textContent = "Expect it by Mon,Mar 08"
    tp.style.margin = "0px"
    tp.style.fontWeight = "bold"

    var free = document.createElement("p")
    free.textContent = "FREE"
    free.style.margin = "0px"
    free.style.marginLeft = "185px"
    free.style.color = "green"

    box1.append(tp,free)

    var box = document.createElement("div")
    box.style.borderBottom="1px solid grey"
    box.style.display = "flex"

    var image = document.createElement("img")
    image.src = x.imgSrc
    image.style.width = "100px"
    // image.style.border = "1px solid black"

    var price = document.createElement("p")
    price.textContent = `$${x.price}`
    price.style.marginLeft = "8px"

    var name = document.createElement("p")
    name.textContent = x.Name
    name.style.margin = "0px"
    name.style.fontWeight = "bold"
    name.style.fontSize = "13px"
    name.style.marginTop = "15px"
    name.style.width = "250px"
    name.style.marginLeft = "10px"
    

    box.append(image,name,price)
    document.querySelector(".mybox").append(box1,box)

})


