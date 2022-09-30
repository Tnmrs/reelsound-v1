function NavItem({ classes, children: label, icon }) {
  return (
    <a href="/" className={classes}>
      {icon}
      <span className="m1-4 text-sm font-semibold">{label}</span>
    </a>
  );
}

export default NavItem;
