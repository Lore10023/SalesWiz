import { useNavigate } from 'react-router-dom';

export default function HeroSection(){

  const navigate = useNavigate();

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">AI-Powered Sales Assistant</span>{" "}
          </h1>
          <p className="hero--section--description">Unlock smarter sales decisions with SalesWiz. Analyze your data, forecast performance, and get real-time advice from your AI sales companion — all in one intuitive platform.</p>
        </div>
        <button className="btn btn-primary" onClick={()=> navigate('/signup')}>Get Started</button>
      </div>
      <div className="hero-section-img">
        <img className="hero_img" src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}

