import "../styles/tech.css";
import react_logo from "../img/tech/react-logo.svg";
function TechStack() {
  return (
    <div className="techstack">
      <div className="stack-header">
        <p className="highlight">Tech stack I know</p>
        <h2 className="head">Teach Stack</h2>
      </div>
      <div className="stack">
        <div className="front-back" data-aos={"fade-right"}>
          <h2>Frontend / Backend</h2>
          <div className="tech-list">
            {/* <div>
              <div className="tech">
                <img src={require("../img/tech/python.png")} alt="" />
              </div>
              <p>Python</p>
            </div> */}
            <div>
              <div className="tech">
                <img src={require("../img/tech/html_img.png")} alt="" />
              </div>
              <p>HTML</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/css.png")} alt="" />
              </div>
              <p>CSS</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/js.jpg")} alt="" />
              </div>
              <p>JavaScript</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/node.webp")} alt="" />
              </div>
              <p>Node.js</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/express.png")} alt="" />
              </div>
              <p>Express</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/mongo.png")} alt="" />
              </div>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
        <div className="lib-fram" data-aos={"fade-left"}>
          <h2>Framework / Tools</h2>
          <div className="tech-list">
            <div>
              <div className="tech">
                <img src={require("../img/tech/aws.png")} alt="" />
              </div>
              <p>AWS</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/bootstrap.png")} alt="" />
              </div>
              <p>Bootstrap</p>
            </div>
            <div>
              <div className="tech">
                <img src={react_logo} alt="" />
              </div>
              <p>React.js</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/redux.png")} alt="" />
              </div>
              <p>Redux</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/git.png")} alt="" />
              </div>
              <p>GIT</p>
            </div>
            <div>
              <div className="tech">
                <img src={require("../img/tech/postman.png")} alt="" />
              </div>
              <p>Postman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TechStack;
