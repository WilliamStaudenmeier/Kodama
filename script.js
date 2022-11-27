number = 4
function smoke() {
  var b = document.createElement('div')
  var size = (Math.random()*75) + 75
  var skew = Math.random()*50
  b.style.width = size +'px'
  b.style.height = size +'px'
  b.style.filter = 'blur(20px)'
  b.style.transform = Math.random() < .5 ? 'skew('+skew*(-1)+'deg)' : 'skew('+skew+'deg)'
  b.style.borderRadius = '50%'
  b.style.background = 'rgb(230, 255, 255)'
  b.style.opacity = '.1'
  b.style.position = 'absolute'
  b.style.top = '0px'
  b.style.left = Math.random()*(window.innerWidth - 75)-70 + 'px'
  b.style.animationDelay = Math.random()*10 + 's'
  b.style.animationDuration = (Math.random()*30) + 2 + 's'
  document.body.appendChild(b)
}

setTimeout(function() {
  for(var i=0;i<number;i++) { smoke() }
},100)



function toggleText(element, texts, delay) {
  let i = 0;
  
  const work = () => {
    element.innerHTML = texts[i].text;

    setTimeout(work, (texts[i].delay * 3000))

    i = (i < texts.length - 1) ? i + 1 : 0;
  }

  setTimeout(work, (delay * 1000))
}