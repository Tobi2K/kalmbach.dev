<template>
  <header
    class="fixed bg-white shadow-sm z-10 top-0 w-full px-5 py-2 flex justify-center md:justify-between items-center font-roboto"
  >
    <a href="#" class="text-2xl font-thin hidden md:block">kalmbach.dev</a>
    <div class="flex space-x-2 justify-center font-medium text-xs uppercase">
      <a
        href="#home"
        class="inline-block px-2 md:px-6 py-2.5 bg-transparent rounded hover:underline nav-link active"
      >
        Home
      </a>
      <a
        href="#about-me"
        class="inline-block px-2 md:px-6 py-2.5 bg-transparent uppercase rounded hover:underline nav-link"
      >
        About me
      </a>
      <a
        href="#projects"
        class="inline-block px-2 md:px-6 py-2.5 bg-transparent rounded hover:underline nav-link"
      >
        Projects
      </a>
      <a
        href="#contact"
        class="inline-block px-2 md:px-6 py-2.5 bg-transparent rounded hover:underline nav-link"
      >
        Contact
      </a>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // smooth scrolling for anchor tag
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const element = document.querySelector(this.getAttribute('href'))
      const topOfElementWithOffset =
        element.getBoundingClientRect().top + window.pageYOffset - 50

      window.scrollTo({
        top: topOfElementWithOffset,
        behavior: 'smooth',
      })
    })
  })

  if (document.readyState !== 'loading') {
    addScrolling()
  } else {
    document.addEventListener('DOMContentLoaded', addScrolling(), false)
  }
})

// add automatic section highlighting. Parts taken from https://medium.com/p1xts-blog/scrollspy-with-just-javascript-3131c114abdc
const addScrolling = () => {
  const sections = document.querySelectorAll('.section-header')
  const links = document.querySelectorAll('.nav-link')

  // functions to add and remove the active class from links as appropriate
  const makeLinkActive = (linkIndex) =>
    links[linkIndex].classList.add('active')
  const deactivateLink = (linkIndex) =>
    links[linkIndex].classList.remove('active')
  const deactivateAllLinks = () =>
    [...Array(sections.length).keys()].forEach((linkIndex) =>
      deactivateLink(linkIndex)
    )

  let activeIndex = 0

  // listen for scroll events
  window.addEventListener('scroll', () => {
    const indexInView =
      sections.length -
      [...sections].reverse().findIndex(
        (section) =>
          window.scrollY >= section.offsetTop - window.innerHeight / 2 // offset so that active section is switch before section reaches top
      ) -
      1

    if (indexInView !== activeIndex) {
      deactivateAllLinks()
      activeIndex = indexInView
      makeLinkActive(indexInView)
    }
  })
}
</script>
