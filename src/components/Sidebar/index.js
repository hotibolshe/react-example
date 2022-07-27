const Sidebar = ({links}) => (
  <div className='sidebar'>
    <ul>
      {
        links.map(link => (
          <li
            key={link.href}
          >
            <a
              href={link.href}
            >{link.text}</a>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Sidebar
