import React from "react"
import { Header } from "./components/Header"
import { HeaderMobile } from "./components/HeaderMobile"

function App() {
  const isMobile = window.innerWidth < 1025

  if (isMobile) {
    return (
      <>
        <HeaderMobile />
      </>
    )
  }
  return (
    <>
      <Header />
    </>
  )
}

export default App
