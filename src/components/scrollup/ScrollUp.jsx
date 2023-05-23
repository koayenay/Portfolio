// import React from "react"
// import "./scrollup.css"

// const ScrollUp = () => {
//   window.addEventListener("scroll", function () {
//     const scrollUp = document.querySelector(".scrollup")

//     if (this.scrollY >= 760) scrollUp.classList.add("show-scroll")
//     else scrollUp.classList.remove("show-scroll")
//   })
//   return (
//     <a href='#' className='scrollup'>
//       <i className='uil uil-arrow-up scrollup__icon'></i>
//     </a>
//   )
// }

// export default ScrollUp

import React, { useEffect, useState } from "react"
import "./scrollup.css"

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false)

  const handleScroll = () => {
    if (window.scrollY >= 760) {
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div>
      {showScroll && (
        <a href='#' className='scrollup' onClick={scrollToTop}>
          <i className='uil uil-arrow-up scrollup__icon'></i>
        </a>
      )}
    </div>
  )
}

export default ScrollUp
