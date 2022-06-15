<template>
  <header
    class="fixed bg-white shadow-sm z-10 top-0 w-full px-5 py-2 flex justify-between items-center"
  >
    <div>
      <a href="#" class="text-2xl mr-5">kalmbach.dev</a>
      <a
        href="https://github.com/Tobi2K"
        target="_blank"
        class="px-3 rounded py-1 text-3xl"
      >
        <FAIcon icon="fa-brands fa-github" />
      </a>
      <a
        href="https://stackoverflow.com/users/8338614/tobi2k"
        target="_blank"
        class="px-3 rounded py-1 text-3xl"
      >
        <FAIcon icon="fa-brands fa-stack-overflow" />
      </a>
      <a
        href="https://www.linkedin.com/in/tobiaskalmbach/"
        target="_blank"
        class="px-3 rounded py-1 text-3xl"
      >
        <FAIcon icon="fa-brands fa-linkedin" />
      </a>
    </div>
    <div class="flex space-x-2 justify-center">
      <a
        href="#home"
        class="inline-block px-6 py-2.5 bg-transparent font-medium text-xs uppercase rounded hover:text-white hover:bg-blue-500 hover:shadow-lg nav-link active"
      >
        Home
      </a>
      <a
        href="#about-me"
        class="inline-block px-6 py-2.5 bg-transparent font-medium text-xs uppercase rounded hover:text-white hover:bg-blue-500 hover:shadow-lg nav-link"
      >
        About me
      </a>
      <a
        href="#projects"
        class="inline-block px-6 py-2.5 bg-transparent font-medium text-xs uppercase rounded hover:text-white hover:bg-blue-500 hover:shadow-lg nav-link"
      >
        Projects
      </a>
      <a
        href="#contact"
        class="inline-block px-6 py-2.5 bg-transparent font-medium text-xs uppercase rounded hover:text-white hover:bg-blue-500 hover:shadow-lg nav-link"
      >
        Contact
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  mounted() {
    // smooth scrolling for anchor tag
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        })
      })
    })

    // add automatic section highlighting. Parts taken from https://medium.com/p1xts-blog/scrollspy-with-just-javascript-3131c114abdc
    document.addEventListener(
      'DOMContentLoaded',
      function () {
        const sections = document.querySelectorAll('.section-header')
        const links = document.querySelectorAll('.nav-link')

        // functions to add and remove the active class from links as appropriate
        const makeLinkActive = (linkIndex) => links[linkIndex].classList.add('active')
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
            [...sections]
              .reverse()
              .findIndex(
                (section) => window.scrollY >= section.offsetTop - 300 // offset so that active section is switch before section reaches top 
              ) -
            1

          if (indexInView !== activeIndex) {
            deactivateAllLinks()
            activeIndex = indexInView
            makeLinkActive(indexInView)
          }
        })
      },
      false
    )
  },
}
</script>

<style scoped>
.nav-link.active {
  background-color: rgb(59 130 246);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  color: white;
}
</style>
