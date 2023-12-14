
var imglist = [
    'https://gharana.pk/wp-content/uploads/2021/08/Saylani-Web-and-Mobile-App-Development-Course-SMIT-Courses-2021-1.jpg',  //0
    './im2.jpg', //1
    './im3.jpg', //2
    'https://i.ytimg.com/vi/dANtJgS11VU/maxresdefault.jpg' //3
]

var imageShow = 0 //
var image = document.getElementById("img")
var previousbtn = document.getElementById("pre")
var next = document.getElementById("next")

function Next() {
    if (imageShow == 0) {
        img.src = imglist[1]
        previousbtn.style.display = "inline"
        imageShow += 1
    }
    else if (imageShow == 1) {
        img.src = imglist[2]
        imageShow += 1
    }
    else if (imageShow == 2) {
        img.src = imglist[3]
        next.style.display = "none"

    }

}
function Previous() {
       
    if (imageShow == 0) {
        img.src = imglist[0]
        previousbtn.style.display = "none"
        imageShow = 0

    }
    else if (imageShow == 1) {
        img.src = imglist[1]
        next.style.display = "inline"

        imageShow -= 1

    }
    else if (imageShow == 2) {
        img.src = imglist[2]
        next.style.display = "inline"
        imageShow -= 1

    }




}