import "./app.scss";
const App = () => {
  return (
    <div className='container'>
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
      {/* SERVICES CARDS */}
      <section className='services flex'>
        <div className='card flex-col' id='graphicDesign'>
          <div className='text flex-col'>
            <h2 className='title'>Graphic Deign</h2>
            <p className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              dolorum officiis fugit, sapiente itaque ut dignissimos eos, neque,
              possimus quaerat tempore ea debitis sit! Incidunt dolores
              distinctio voluptates consequatur sit?
            </p>
          </div>
        </div>
        <div className='card flex-col' id='photography'>
          <div className='text flex-col'>
            <h2 className='title'>Photography</h2>
            <p className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              dolorum officiis fugit, sapiente itaque ut dignissimos eos, neque,
              possimus quaerat tempore ea debitis sit! Incidunt dolores
              distinctio voluptates consequatur sit?
            </p>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className='testimonials'>
        <h2 className='title'>Client Testimonials</h2>
        <div className='wrapper flex'>
          {/* Client 0 */}
          <div className='clientCard flex-col'>
            <img id='EmilyB'></img>
            <p className='clientComment'>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>

            <h2 className='clientName'>Emily B.</h2>
            <h4 className='clientRole'>Marketing Director</h4>
          </div>
          {/* Client 1 */}
          <div className='clientCard flex-col'>
            <img id='ThomasS'></img>
            <p className='clientComment'>
              SunnySides's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>

            <h2 className='clientName'>Thomas S.</h2>
            <h4 className='clientRole'>Chief Operating Officer</h4>
          </div>
          {/* Client 2 */}
          <div className='clientCard flex-col'>
            <img id='JennieF'></img>
            <p className='clientComment'>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>

            <h2 className='clientName'>Jennie F.</h2>
            <h4 className='clientRole'>Bussiness Owner</h4>
          </div>
        </div>
      </section>
      {/* GALLERY */}
      <section className='gallery grid'></section>
      {/* FOOTER */}
      <footer class='footer'></footer>
    </div>
  );
};

export default App;
