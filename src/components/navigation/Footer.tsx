export default function Footer() {
  return (
    <>
      <div className="bar-grad" />
      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} ZENQUBIX. All rights reserved.</span>
          <nav aria-label="Footer">
            <a href="#build">What we build</a><a href="#services">Services</a><a href="#demos">Work</a><a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
