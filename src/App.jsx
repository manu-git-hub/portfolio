// import Hero from "./components/hero/Hero";
// import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact";

import { Suspense } from "react";
import LazyLoad from "react-lazyload";
// import Contact from "./components/contact/contact";

const Hero = React.lazy(() => import("./components/hero/Hero"));
const Services = React.lazy(() => import("./components/services/Services"));
const Portfolio = React.lazy(() => import("./components/portfolio/Portfolio"));
// const Contact = lazy(() => import("./components/contact/Contact"));


const App = () => {
  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#home">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#services">
            <Services />
          </section>{" "}
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"600vh"} offset={-100}>
          <section id="#portfolio">
          <Portfolio />
          </section>{" "}
        </LazyLoad>
      </Suspense>
      <Contact />
      {/* <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}> */}
          {/* <section id="#contact">
            <Contact />
          </section>{" "} */}
        {/* </LazyLoad>
      </Suspense> */}
    </div>
  );
};

export default App;