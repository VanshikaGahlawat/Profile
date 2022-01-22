import React, {useEffect, useRef} from "react"
import Typed from "typed.js";

const Home = ({info}) =>{

  const el = useRef(null);
  const country = "from " + info.location.country;
  const city = "from " + info.location.city;
  const member = "a member since " + info.registered.date.split("-")[0]
  console.log(country, city, member);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [country, city, member],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
    return(
        <section id="home" className="d-flex flex-column justify-content-center align-items-center">
        <div className="home-container">
          <h1>{info.name.first} {info.name.last} {info.gender=='female' ? <i class="bi bi-gender-female"></i>: <i class="bi bi-gender-male"></i>}</h1>
          <p>I'm <span ref={el} className="typed" ></span></p>
        </div>
      </section>
    )
}

export default Home