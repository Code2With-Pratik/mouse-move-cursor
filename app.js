var body = document.querySelector("body")
var cursor = document.querySelector("#cursor")
// var imageDiv = document.querySelector("#image")


body.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1.5,
        ease:"back.out"
    })
})

// imageDiv.addEventListener("mouseenter",function(){
//     cursor.innerHTML = "View More"
//     gsap.to(cursor,{
//         scale:2,
//         backgroundColor:"#ffffff8a"
        
//     })
// })
// imageDiv.addEventListener("mouseleave",function(){
//     cursor.innerHTML = ""
//     gsap.to(cursor,{
//         scale:1,
//         backgroundColor:"#ffff",
//     })
// })