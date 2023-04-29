import "../styles/about.css";
function About() {
  return (
    <div className="container" data-aos={"fade-right"} id="about" class="about section">
      <div className="container__image">
        <div className="container__info container__author">Hi There!,</div>
        <div className="container__info container__location">
          <p>
            I am <em></em>
            <a href="https://www.instagram.com/aditya_pradhan23/" className="link">
              Aditya Pradhan
            </a>{" "}
            , With a passion for creating and a great deal of determination to
            improve. As a web developer, I love to build websites and
            applications that serve the world and always look for new ways to
            enhance my knowledge and gain exposure to new technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
