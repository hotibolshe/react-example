// const Header = (props) => {
//   const isSmall = props.isSmall
//   const links = props.links
  
//   return (
//     <header>Header</header>
//   )
// }

import './index.css'

const Header = ({isSmall, links}) => {
  return (
    <header className={`header ${isSmall ? 'header--small' : ''}`}>
      {
        links.map(link => (
          <div
            key={link.href}
          >
            {link.text}
          </div>
        ))
      }
    </header>
  )
}


export default Header
