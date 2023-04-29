import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./animation.css";
import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about";
import TechStack from "./components/techstack";
import Toproject from "./components/topProject";
import Projects from "./components/project";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    setTimeout(function () {
      AOS.refresh();
    }, 500);
  }, []);
  return (
    <div id="top">
      <Navbar />
      <Header />

      <div id="about" data-aos={"fade-left"} style={{ height: "15vh" }}>
        <div className="stack-header">
          <p className="highlight">To Know</p>
          <h2 className="head">About me</h2>
        </div>
      </div>
      <About />

      <div id="tech" style={{ height: "15vh" }}></div>
      <TechStack />

      <div id="projects" style={{ height: "15vh" }}></div>
      <div>
        <div className="stack-header" data-aos={"zoom-in"}>
          <p className="highlight">My projects</p>
          <h2 className="head">Top Project</h2>
        </div>
        <div className="top_right mt" data-aos={"zoom-in-down"}>
          <Toproject
            projectdata={"Stylecraze Website Clone"}
            description={
              "stylecraze is a informative website,that provides you the information about the best products around the world realted to our daily lifestyle i.e haircare,skin care,makeup,health and wellness etc and how to use it & it also compared the best product in their product section,then if u want to buy these product then you will redirect to ecommerce websites like amazon or flipkart etc.as it is group project,my role is to build make up and product part and we completed this project in 6 days."
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
            ]}
            imges={["landing-page.png", "mens-page.png", "cart-page.png"]}
            links={[
              "https://happy-feynman-648783.netlify.app/",
              "https://github.com/sangamk04/Stylecraze-home-.git",
              // "https://player.vimeo.com/video/689858253?h=1744dc5262",
            ]}
          />
        </div>
        <div className="top_left" data-aos={"zoom-in-up"}>
          <Toproject
            projectdata={"kimaye Website Clone"}
            description={
              "kimaye is website that deliver fresh fruits to our doorsteps.in this project my role is to build login page and as it is a group project we just build it in 5 days."
            }
            techStack={[
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
              "tech/express.png",
              "tech/node.webp",
              "tech/mongo.png",
              "tech/postman.png",
            ]}
            imges={["lybrate-landing-page.png", "lybrate-product-page.png", "lybrate-cart-page.png"]}
            links={[
              "https://stately-lolly-fadbeb.netlify.app/",
              "https://github.com/SankalpJaiswal/kimaye-clone.git",
              // "https://player.vimeo.com/video/689858338?h=1e538fdf27",
            ]}
          />
        </div>

        
        {/* <div
          className="stack-header"
          style={{ marginBottom: "45px" }}
          data-aos={"fade-right"}
        >
          <p className="highlight">Mini Project's</p>
        </div>
        <div className="project_div">
          <Projects />
        </div> */}
      </div>
      <div id="contact" style={{ height: "15vh" }}></div>
      <Footer />
    </div>
  );
}

export default App;
