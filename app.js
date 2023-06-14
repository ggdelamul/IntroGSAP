gsap.to ('.circle' ,
{ 
y : -300,
backgroundColor :"blue",
delay: 2,
duration: 3,
ease: "bounce",

onUpdate : ()=>{
    document.querySelector('.circle img').setAttribute("src", "./image/icons8-effacer-48.png");
},
stagger: {
    each:0.15,
    repeat:2,
yoyo:true,
}
});

