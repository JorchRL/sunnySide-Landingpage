import "./app.scss";
const App = () => {
  return (
      {/* HERO */}
      <header className='hero'>
        <div className='navbar flex'>
          <h2 className='logo'>sunnyside</h2>
          <div className='menuContainer'>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
        <div className='title'>
          <h2>WE ARE CREATIVES</h2>
          <div className='arrow'></div>
        </div>
      </header>
      {/* INFO CARDS */}
      <section className='info flex'>
        <div className='tile text'>
          <h2>Transform your brand</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            suscipit voluptates, consequuntur aspernatur ab quidem cum aliquid
            officiis ad vel nisi rem nihil. Ab consequuntur nisi incidunt fuga
            nihil officiis.
          </p>
        </div>
        <div className='tile img' id='eggImg'></div>
        <div className='tile img' id='cupImg'></div>
        <div className='tile text'>
          <h2>Stand out to the right audience</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            corporis, facere illo cupiditate libero soluta, cum et iste eveniet
            doloremque vitae? Cupiditate quas est quam quisquam reiciendis
            praesentium beatae fugit.
          </p>
        </div>
      </section>
      </section>
      <section className='testimonials flex'></section>
      <section className='pics grid'></section>
      <footer class='footer'></footer>
