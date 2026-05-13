function Header() {
  return (
    <header style={{ background: "black", color: "white", padding: "10px" }}>
      <h2>Smart Store</h2>

      {/* ✅ Click → moves to section */}
      <nav>
        <a href="#home" style={{ margin: "10px", color: "white" }}>
          Home
        </a>
        <a href="#products" style={{ margin: "10px", color: "white" }}>
          Products
        </a>
        <a href="#cart" style={{ margin: "10px", color: "white" }}>
          Cart
        </a>
        <a href="#contact" style={{ margin: "10px", color: "white" }}>
          Contact
        </a>
        <a
          href="#login-form"
          style={{ margin: "10px", color: "white", textAlign: "right" }}
        >
          Login
        </a>
      </nav>
    </header>
  );
}

export default Header;
