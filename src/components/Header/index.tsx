import "../../styles/Header.scss"
import { HeaderLinks } from "./HeaderLinks"
import { Login } from "./Login"

export const Header = () => {
  return (
    <header className="container_header">
      <section className="main_headerContainer">
        <section className="main_header">
          <div>
            <img src="/Logo.svg" alt="E Fashion" />
          </div>

          <div className="header_content">
            <div className="busca">
              <label htmlFor="busca">
                <input
                  type="text"
                  id="busca"
                  placeholder="O que você está buscando?"
                />
              </label>

              <button type="submit">
                <img src="/icon-lupa.svg" alt="Buscar" />
              </button>
            </div>

            <div className="header_buttons">
              <div className="login">
                <Login />
              </div>

              <div className="minicart">
                <button>
                  <img src="/icon-bag.svg" alt="minicart" />
                  <span>2</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="header_linksCategorys">
        <ul>
          <HeaderLinks name="New In" />
          <HeaderLinks name="Blusas" />
          <HeaderLinks name="Saias e Shorts" />
          <HeaderLinks name="Vestidos" />
          <HeaderLinks name="Calças" />
          <HeaderLinks name="Macacões" />
          <HeaderLinks name="Casacos" />

          <li className="off">
            <a href="">OFF</a>
          </li>
        </ul>
      </section>
    </header>
  )
}
