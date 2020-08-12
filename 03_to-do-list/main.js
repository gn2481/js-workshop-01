// TO DO
window.addEventListener('DOMContentLoaded', function () {

  // 新增任務
  document.querySelector('.addBtn').addEventListener('click', function () {
    // 新增任務
    const task = document.createElement('li')
    task.textContent = document.querySelector('#input').value

    const closeBtn = document.createElement('span')
    closeBtn.textContent = "x"
    closeBtn.classList.add('close')

    document.querySelector('ul').appendChild(task)
    document.querySelector('li:last-child').appendChild(closeBtn)

  })

  document.querySelector('ul').addEventListener('click', function (params) {
    // console.log(e.target)
    const target =  params.target
    if (target.className == 'close') {
      // 移除任務
      target.parentNode.remove()
    } else {
      // 完成任務
      target.classList.toggle('checked')
    }
  })
// 監聽在ul上，然後用環境參數params中的target把滑鼠點在哪裡抓出來，再去做判斷















})
