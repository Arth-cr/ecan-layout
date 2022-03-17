import { useState } from "react"
import { MenuLink } from "./MenuLink"

export const Menu = () => {
  const [active, setActive] = useState<boolean>(false)
  return (
    <>
      <button className="menu-ham" onClick={() => setActive(!active)}>
        <img src="/icon-menu.svg" alt="menu" />
      </button>

      {active && (
        <>
          <div
            className="backgroundMenu"
            onClick={() => setActive(!active)}
          ></div>
          <div className="menuOpen">
            <section className="header_menuOpen">
              <button>
                <img src="/icon-login.svg" alt="user" />
                <span>Login</span>
              </button>

              <button onClick={() => setActive(!active)}>
                <img src="/icon-fechar.svg" alt="fechar" />
              </button>
            </section>

            <section className="links_menuOpen">
              <MenuLink name="New In" />
              <MenuLink name="Blusas" />
              <MenuLink name="Saias e Shorts" />
              <MenuLink name="Vestidos" />
              <MenuLink name="Calças" />
              <MenuLink name="Macacões" />
              <MenuLink name="Casacos" />
            </section>
          </div>
        </>
      )}
    </>
  )
}
