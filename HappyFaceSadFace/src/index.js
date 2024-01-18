const circle = document.querySelector('.circle')
const mouth = document.querySelector('#mouth')

function control(e) {
  switch (e.key) {
    case 'ArrowUp':
      console.log('pressed up')
      mouth.classList.add('happy-mouth')
      mouth.classList.remove('sad-mouth')
      break
    case 'ArrowDown':
      console.log('pressed down')
      mouth.classList.add('sad-mouth')
      mouth.classList.remove('happy-mouth')
      break
    default:
      console.log('key not recognized')
  }
}

document.addEventListener('keydown', control)
