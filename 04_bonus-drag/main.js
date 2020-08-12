document.addEventListener("DOMContentLoaded", function(){
  let circle = document.querySelector('#circle')
  let target = document.querySelector('#target')
  
  //source
  circle.addEventListener('drag', function(event){
    const touched = event.target
    console.log('drag')
    touched.style.opacity = .5
  })

  circle.addEventListener('dragstart', function(event){
    console.log('dragstart')
  })

  circle.addEventListener('dragend', function(event){
    const touched = event.target
    console.log('dragend')
    touched.style.opacity = ""
    if (touched.className == 'in_target') {
      target.insertAdjacentElement("beforeend",circle)
    }

    // 直接指定到框框裡，拖不回來
  })

  //target
  target.addEventListener('dragenter', function(){
    console.log('dragenter target')
    circle.classList.add('in_target')
  })

  target.addEventListener('dragover', function(){
    console.log('dragover target')
  })

  target.addEventListener('dragleave', function(){
    console.log('dragleave target')
    circle.classList.remove('in_target')

  })

  target.addEventListener('drop', function(){
    console.log('drop')
  })
})
