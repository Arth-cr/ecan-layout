import "../../styles/Header.scss"
import { Menu } from "./Menu"
import { SearchButton } from "./SearchButton"

export const HeaderMobile = () => {
  return (
    <header>
      <section className="headerMobile">
        <Menu />
        <div>
          <img className="logo" src="/Logo.svg" alt="E Fashion" />
        </div>

        <SearchButton />

        <div className="minicart">
          <button>
            <img src="/icon-bag.svg" alt="minicart" />
            <span>2</span>
          </button>
        </div>
      </section>
    </header>
  )
}
