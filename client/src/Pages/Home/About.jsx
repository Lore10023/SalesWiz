import { useNavigate } from 'react-router-dom';

function About(){
  const navigate = useNavigate();

  const handleBackButton=()=>{
    navigate("/");
  };

  return (
    <div className="about--page">
      <div className="first--container">
        <button onClick={handleBackButton} className="back--button--about">Back to Home Page</button>
        <h2 className="title--style">Get To Know Us Better</h2>
      <p className="discription--container">We’re a team of innovators passionate about helping sales teams work smarter with AI. Our mission is to simplify sales processes, uncover insights, and drive growth—faster and more efficiently.</p>
      </div>
      <div className="image--container">
        <img src="../img/Picture1.png" className="image--style" alt="about"/>
      </div>

      <div className="second--page">
      <div className="text--container">
        <h2 className="title">Who we are</h2>
        <p className="description">
          SalesWiz was founded by a passionate team of AI enthusiasts, sales professionals, and entrepreneurs on a mission to revolutionize the way companies sell.
          <br /><br />
          We built SalesWiz to bring intelligent, accessible, and real-time insights to sales teams—so they can close more deals, faster.
          <br /><br />
          After years of struggling with slow analysis, scattered data, and unreliable forecasts, we knew there had to be a smarter way. SalesWiz uses AI to automate manual work, uncover opportunities, and provide crystal-clear forecasting—so your team can focus on what matters most: selling.
        </p>
      </div>
      <div className="image--container">
        <img src="../img/Picture2.png" alt="Sales Team" className="about--image" />
      </div>
      </div>

      <div className="mission--section">
      <h2 className="mission--title">Mission</h2>
      <p className="mission--text">
        To empower sales teams with intelligent, data-driven tools that simplify workflows, 
        enhance decision-making, and unlock growth—through the power of AI.
      </p>
    </div>

    <div className="whatwedo--section">
      <div className="whatwedo--text">
        <h2 className="whatwedo--title">What we do</h2>
        <p className="whatwedo--description">
          Today, sales teams are buried under spreadsheets, juggling disconnected tools, and struggling to turn messy data into meaningful action. 
          Prospecting, forecasting, and staying ahead of the curve shouldn't feel like guesswork—or a full-time job.
          <br /><br />
          We felt that pain, too.
          <br /><br />
          Now, imagine a world where AI helps you instantly analyze your sales data, spot trends, predict outcomes, and act faster—all in one place.
          <br /><br />
          We imagined it. So we built it. Welcome to SalesWiz.
        </p>
        <button className="btn btn-primary" onClick={()=> navigate('/signup')}>Get Started</button>
      </div>
    </div>

    <div className="mission--section">
      <h2 className="mission--title">Vision</h2>
      <p className="mission--text">
      To become the leading AI sales assistant platform that transforms the way businesses understand, forecast, and drive sales success worldwide.
      </p>
    </div>

    </div>
  );
}

export default About;