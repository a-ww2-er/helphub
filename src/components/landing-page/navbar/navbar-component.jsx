import './navbar-component.css';

export default function Navbar() {
  // create an array of nav items
  const navItems = [
    {
      id: 0,
      link: "Home",
      path: "/",
    },
    {
      id: 1,
      link: "About",
      path: "/About",
    },
    {
      id: 2,
      link: "Orphanage homes",
      path: "/Orphanage homes",
    },
    {
      id: 3,
      link: "Contact us",
      path: "/Contact us",
    },
  ];

  // loop through the array of nav items

  const navItem = navItems.map((item) => {
    return (
      <a href={item.path} key={item.id}>
        <li>{item.link}</li>
      </a>
    );
  });

  return(
     <nav className="nav">
      <aside className='nav-aside'>
        {navItem}
        <button className='menu-icon'>Donate Now</button>
      </aside>
     </nav>
  );
}
