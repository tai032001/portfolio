import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>Tai Quach</span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="html5" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="html5" />
          </a>
          <a href="#">
            <img src="/github.jpg" alt="html5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
