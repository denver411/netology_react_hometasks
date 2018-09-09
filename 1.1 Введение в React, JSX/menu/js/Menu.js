function Menu(list) {
  let navMenu = null;
  let containerClass = "menu";

  if (list.opened) {
    const items = list.items.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.href}> {item.title} </a>
        </li>
      );
    });
    navMenu = (
      <nav>
        <ul> {items} </ul>
      </nav>
    );
    containerClass = "menu menu-open";
  }

  return (
    <div className={containerClass}>
      <div className="menu-toggle">
        <span> </span>
      </div>
      {navMenu}
    </div>
  );
}
