window.addEventListener("DOMContentLoaded", (event) => {
  // console.log('loaded');
  const closeBtn = document.querySelector('.aside--close')
  const openBtn = document.querySelector('.aside--open')

  const container = document.querySelector('.container')
  const main = document.querySelector('main')
  const aside = document.querySelector('aside')


  const closeAside = (e) => {
    e.preventDefault()
    aside.classList.add("d--none");
    main.classList.remove("main--margin")
    container.classList.remove("container--smaller")
    
  }

  const openAside = (e) => {
    e.preventDefault()
    aside.classList.remove("d--none");
    main.classList.add("main--margin")
    container.classList.add("container--smaller")
    
  }

  closeBtn.addEventListener('click', closeAside)

  openBtn.addEventListener('click', openAside)
})