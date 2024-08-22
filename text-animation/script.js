// it works normally without different animations

// function breakTheText() {
//   var h1 = document.querySelector("h1");
//   var h1Text = h1.textContent;
//   // console.log(h1Text)

//   var splittedText = h1Text.split("");
//   // console.log(splittedText)

//   var clutter = "";
//   splittedText.forEach(function (elem) {
//     clutter+=`<span>${elem}</span>`
//   })
//   h1.innerHTML=clutter
// }

// breakTheText()

// gsap.from("h1 span",{
//     y:70,
//     opacity:0,
//     duration:0.8,
//     delay:0.5,
//     stagger:0.15,
//     stagger:-0.15  //if we give value in minus .... from last to first letters wll be displayed
// })

//with different animations
function breakTheText() {
  var h1 = document.querySelector("h1")
  var h1Text = h1.textContent

  var splittedText = h1Text.split("")
  var halfValue = Math.floor(splittedText.length / 2)

  var clutter = ""

  splittedText.forEach(function (elem, index) {
    if (index < halfValue) {
      clutter += `<span class="a">${elem}</span>`
    } else {
      clutter += `<span class="b">${elem}</span>`
    }
  });
  h1.innerHTML = clutter
}

breakTheText()

gsap.from("h1 .a", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.15,
  repeat:-1
})
gsap.from("h1 .b", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: -0.15, //if we give value in minus .... from last to first letters wll be displayed
  repeat:-1
})
