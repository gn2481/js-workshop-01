// TO DO
window.addEventListener('DOMContentLoaded', function () {
  var ulist = document.querySelector('ul')
  // 新增任務
  document.querySelector('.addBtn').addEventListener('click', function () {
    // 新增任務
    const task = document.createElement('li')
    task.textContent = document.querySelector('#input').value
    task.setAttribute('draggable', 'true')

    const closeBtn = document.createElement('span')
    closeBtn.textContent = "x"
    closeBtn.classList.add('close')

    ulist.appendChild(task)
    document.querySelector('li:last-child').appendChild(closeBtn)

  })

  ulist.addEventListener('click', function (params) {
    // console.log(e.target)
    const target = params.target
    if (target.className == 'close') {
      // 移除任務
      target.parentNode.remove()
    } else {
      // 完成任務
      target.classList.toggle('checked')
    }
    
  })
  // 監聽在ul上，然後用環境參數params中的target把滑鼠點在哪裡抓出來，再去做判斷

  document.querySelectorAll('li').forEach(function (draggedList) {
    draggedList.addEventListener('drag', function (event) {
      // console.log(event.screenX)
      // console.log(event.clientX)

      const current_elm = document.elementFromPoint(event.clientX, event.clientY)
      
      const last_elm = document.querySelector('ul li:last-child')


      if (current_elm.parentNode.tagName == "UL") {
        current_elm.insertAdjacentElement('beforebegin', draggedList)
      }




      // 將滑鼠移到的地方，與draggedList換

    })
  })














})
