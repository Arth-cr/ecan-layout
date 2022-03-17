import { useState } from "react"

interface MenuLinkProps {
  name: string
}

export const MenuLink = ({ name }: MenuLinkProps) => {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div>
      <div
        className={!active ? `link_menuOpen` : `link_menuClose`}
        onClick={() => setActive(!active)}
      >
        <h2>{name}</h2>
        <img src="/arrow-close.svg" alt="arrow" />
      </div>

      <div className={active ? `linksOpen` : `linksClose`}>
        <a>Vestido Longo</a>
        <a>Vestido Midi</a>
        <a>Vestido Curto</a>
        <a>Vestido Plus Size</a>
        <a>Vestido Branco</a>
      </div>
    </div>
  )
}
