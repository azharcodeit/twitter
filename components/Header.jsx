function Header({ children, border }) {
  return (
    <div className={`sticky z-20 top-0 border-darker-gray-bg bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 ${border ? 'border-b' : ''}`}>
      {children}
    </div>
  );
}

export default Header;