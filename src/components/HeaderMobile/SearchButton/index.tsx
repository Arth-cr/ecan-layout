import { useState } from "react"

export const SearchButton = () => {
  const [active, setActive] = useState<boolean>(false)
  return (
    <>
      <button
        className="search-button"
        onClick={() => setActive(!active)}
        type="submit"
      >
        <img
          src={active ? `/icon-fechar.svg` : `/icon-lupa.svg`}
          alt="Buscar"
        />
      </button>

      {active && (
        <div className="search-containerOpen">
          <input type="text" placeholder="O que você está buscando?" />
          <img src={`/icon-lupa.svg`} alt="Buscar" />
        </div>
      )}
    </>
  )
}
