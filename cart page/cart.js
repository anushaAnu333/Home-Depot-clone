var arr= JSON.parse(localStorage.getItem("sofaitems"))
console.log(arr)


var obj1 = 
{
    image : "https://images.thdstatic.com/productImages/eae74a6b-eb71-47b8-ba02-96417d55ca13/svn/wooster-paint-brushes-0q32110020-64_400.jpg",
    name : "The Home Depot 5 Gal. Homer Bucket",
    price : 4.98
}

var obj2 = 
{
    image : "https://images.thdstatic.com/productImages/eae74a6b-eb71-47b8-ba02-96417d55ca13/svn/wooster-paint-brushes-0q32110020-64_400.jpg",
    name : "Wooster 2 in. Shortcut Polyester Angle Sash Brush",
    price : 5.87
}

var obj3 = 
{
    image : "https://images.thdstatic.com/productImages/bcfba23c-2563-424e-a452-04cee8da52d9/svn/white-lutron-dimmers-stcl-153mr-wh-64_400.jpg",
    name : "Lutron Sunnata Touch Dimmer with LED+ Advanced Technology, for LED, Incandescent and Halogen, 3 Way/Multi Location, White",
    price : 7
}
var obj4 = 
{
    image : "https://images.thdstatic.com/productImages/bcfba23c-2563-424e-a452-04cee8da52d9/svn/white-lutron-dimmers-stcl-153mr-wh-64_400.jpg",
    name : "Lutron Sunnata Touch Dimmer with LED+ Advanced Technology, for LED, Incandescent and Halogen, 3 Way/Multi Location, White",
    price : 7
}



function display(arr)
{
    document.querySelector(".resshow").innerHTML=""
    arr.map(function(x,index)
    {
        var box = document.createElement("div")
        box.className="cartbox"

        var rimage = document.createElement("img")
        rimage.src = x.imgSrc
        rimage.className="mimg"

        var lastbox = document.createElement("div")
        lastbox.textContent=`$ ${x.price}`
        lastbox.className = "price"

        var rightbox = document.createElement("div")
        rightbox.className="rightbox"

        var name = document.createElement("p")
        name.textContent = x.Name
        name.style.fontSize="20px"

        var three = document.createElement("div")
        three.className = "three"

        var three1 = document.createElement("div")
        three1.className = "threebox"
        var smallimage = document.createElement("img")
        smallimage.className="smallimage"
        smallimage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx7oV1SnUOjAeSoKx8y1Q4egjGj91JjLxnPA&usqp=CAU"
        var t1sm1 = document.createElement("p")
        t1sm1.className="intext"
        t1sm1.textContent = "Store Pickup"
        t1sm1.style.marginTop="7px"
        var t1sm2 = document.createElement("p")
        t1sm2.className="intext2"
        t1sm2.textContent="100 in stock at"
        var t1sm3 = document.createElement("p")
        t1sm3.className="intext"
        t1sm3.textContent="Guam - Tauming"
        var t1sm4 = document.createElement("p")
        t1sm4.className="intext2"
        t1sm4.textContent="96913"
        var green = document.createElement("p")
        green.textContent="FREE"
        green.style.color="green"
        green.style.fontWeight="bold"
        green.style.marginTop="10px"
        three1.append(smallimage,t1sm1,t1sm2,t1sm3,t1sm4,green)


        var three2 = document.createElement("div")
        three2.className = "threebox"
        var smallimage2 = document.createElement("img")
        smallimage2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4HNQyXYaJ4CESTF5NK-MHWFfbSUHAvXkIw&usqp=CAU"
        smallimage2.className="smallimage"
        var t2t1 = document.createElement("p")
        t2t1.textContent="Ship To Home"
        t2t1.className="intext"
        var green2 = document.createElement("p")
        green2.textContent="FREE"
        green2.style.color="green"
        green2.style.fontWeight="bold"
        green2.style.marginTop="68px"
        three2.append(smallimage2,t2t1,green2)
        

        var three3 = document.createElement("div")
        three3.className = "threebox"
        var smallimage3 = document.createElement("img")
        smallimage3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6kN8xMafV7KcGNa2Q9bcLODMf--MnGp4eUA&usqp=CAU"
        smallimage3.className="smallimage"
        var t3sm1 = document.createElement("p")
        t3sm1.className="intext"
        t3sm1.textContent = "Scheduled DElivery"
        t3sm1.style.marginTop="7px"
        var t3sm2 = document.createElement("p")
        t3sm2.className="intext2"
        t3sm2.textContent="Starting at $8.99 for"
        var t3sm3 = document.createElement("p")
        t3sm3.className="intext2"
        t3sm3.textContent="delivery as asoon as"
        var t3sm4 = document.createElement("p")
        t3sm4.className="intext"
        t3sm4.textContent="tommorow"
        var gery = document.createElement("p")
        gery.textContent="How it Works"
        gery.style.color="grey"
        gery.style.fontSize="12px"
        gery.style.marginTop="13px"
        three3.append(smallimage3,t3sm1,t3sm2,t3sm3,t3sm4,gery)

        three.append(three1,three2,three3)

        var line = document.createElement("hr")

        var emailline = document.createElement("p")
        emailline.textContent = "Receive an email when this item is back in stock."
        emailline.style.color = "#8f8c98"

        var emailbox = document.createElement("div")
        emailbox.className="emailbox"

        var resemail = document.createElement("input")
        resemail.placeholder="Email address"
        resemail.className = "resemail"
        var resbutton = document.createElement("div")
        resbutton.textContent="Notify ME"
        resbutton.className="noti"

        emailbox.append(resemail,resbutton)

        var line2 = document.createElement("hr")

        var lastdiv = document.createElement("div")
        lastdiv.className = "lastdiv"

        var lasttext1 = document.createElement("div")
        lasttext1.textContent = "Save for Later"
        lasttext1.className = "bottomtxt"

        var lasttext2 = document.createElement("div")
        lasttext2.textContent = "Save for Favourites"
        lasttext2.className = "bottomtxt"

        var lasttext3 = document.createElement("div")
        lasttext3.textContent = "Remove"
        lasttext3.style.color="#507ba1"
        lasttext3.addEventListener("click",function(index)
        {
            itemdelete(index)
        })

        lastdiv.append(lasttext1,lasttext2,lasttext3)

        rightbox.append(name,three,line,emailline,emailbox,line2,lastdiv)

        box.append(rimage,rightbox,lastbox)

        document.querySelector(".resshow").append(box)
    })
}

display(arr)

function restotalitems()
{
    var totalitems = arr.length
    // console.log(totalitems)
    document.querySelector(".noitems").textContent=`(${totalitems})`
}

restotalitems()

function subtotal()
{
    var sum = 0
    for(var i=0 ; i<arr.length ; i++)
     {
         sum = sum + arr[i].price
     }
     // console.log(sum)
    
     return sum   
}

var y = subtotal()
showing(y)


function showing(y)
{
    document.querySelector(".amount").textContent=`$${y}`
    document.querySelector(".pay").textContent=`$${y}`
}

var code = document.querySelector(".promocode")
code.addEventListener("keypress",function(e)
{
    if(e.key=="Enter")
    {
        var input = document.querySelector(".promocode").value
        if(input=="masai30")
        {
            var sum = subtotal()
            alert("Promo code applied Sucessfully")
            var temp = sum
            temp= Math.round(sum*0.7)
            // console.log(temp)
            var discount = Math.round(sum*0.3)
            // console.log(discount)
            document.querySelector(".promovalue").textContent= `-$${discount}`
            var last = (sum - discount).toFixed(2)
            // console.log(last)
            document.querySelector(".pay").textContent=`$${last}`
            localStorage.setItem("total",last)
           

        }
        else
        {
            alert("Wrong promocode")
        }
    }
})

var alldelete = document.querySelector(".delete")
alldelete.addEventListener("click",function()
{
    alert("All items deleted")
    arr.splice(0,arr.length)
    localStorage.setItem("sofaitems",JSON.stringify(arr))
    display(arr)
    var y= subtotal()
    showing(y)
    restotalitems()
})


function itemdelete(index)
{
    alert(`Product removed successfully`)
    arr.splice(index,1)
    localStorage.setItem("sofaitems",JSON.stringify(arr))
    display(arr)
    var y = subtotal()
    showing(y)
    restotalitems()
}