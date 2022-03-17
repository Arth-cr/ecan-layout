interface HeaderLinksProps {
  name: string
}

export const HeaderLinks = ({ name }: HeaderLinksProps) => {
  return (
    <li className="header_links">
      <a href="">{name}</a>

      <div className="link_container">
        <p>Vestido Longo</p>
        <p>Vestido Midi</p>
        <p>Vestido Curto</p>
        <p>Vestido Plus Size</p>
        <p>Vestido Branco</p>
      </div>
    </li>
  )
}
