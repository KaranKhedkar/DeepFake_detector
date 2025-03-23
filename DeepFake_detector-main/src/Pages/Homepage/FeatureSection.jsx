import { Link } from "react-router-dom";
import { ArrowRight, Shield, Newspaper, LineChart } from "lucide-react";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="container">
        <header className="feature-header">
          <h2 className="feature-title">Our AI Detection Solutions</h2>
          <p className="feature-subtitle">
            Empowering you with advanced tools to combat deepfakes, fake news, and misinformation.
            Our solutions offer deep analysis and real-time insights to keep you informed.
          </p>
        </header>

        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon-wrapper blue">
              <Shield />
            </div>
            <div className="feature-content">
              <h3>Deepfake Image Detection</h3>
              <p className="feature-description">
                Our advanced algorithms scrutinize every pixel to identify subtle anomalies in images.
              </p>
              <p className="feature-extra">
                By leveraging neural networks and digital forensics, we detect facial inconsistencies, 
                unnatural lighting, and other artifacts that betray a deepfake.
              </p>
              <Link to="/deepfake" className="feature-link blue">
                Learn More <ArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>


          <div className="feature-card">
            <div className="feature-icon-wrapper teal">
              <Newspaper />
            </div>
            <div className="feature-content">
              <h3>Fake News Detection</h3>
              <p className="feature-description">
                We verify content by cross-referencing multiple trusted sources and assessing context.
              </p>
              <p className="feature-extra">
                Our AI-driven contextual analysis and source verification help you separate fact from fiction, 
                ensuring you stay informed with accurate news.
              </p>
              <Link to="/fakenews" className="feature-link teal">
                Learn More <ArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>


          <div className="feature-card">
            <div className="feature-icon-wrapper purple">
              <LineChart />
            </div>
            <div className="feature-content">
              <h3>Real-time Analysis</h3>
              <p className="feature-description">
                Monitor online trends instantly with our dynamic analysis dashboard.
              </p>
              <p className="feature-extra">
                Our platform continuously scans digital content and delivers real-time alerts on 
                emerging misinformation, empowering you with timely insights.
              </p>
              <Link to="/analysis" className="feature-link purple">
                Learn More <ArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
