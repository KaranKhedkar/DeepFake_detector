import { useState } from 'react';
import { 
  Newspaper, 
  Shield, 
  Share2, 
  ArrowRight, 
  X 
} from 'lucide-react';
import './NewsHeadlines.css';

const newsData = [
  {
    id: 1,
    title: "Major Tech Company Announces AI Revolution",
    detail: "Today, one of the leading tech giants unveiled a revolutionary new AI technology that promises to transform the industry. Experts are already debating its implications on society.",
    source: "TechCrunch",
  },
  {
    id: 2,
    title: "Global Markets React to Political Turmoil",
    detail: "Stocks around the globe dipped after unexpected political events shook major economies. Investors remain cautious amid ongoing uncertainties.",
    source: "BBC News",
  },
  {
    id: 3,
    title: "Championship Game Ends in Overtime Thriller",
    detail: "In one of the most dramatic finishes in sports history, the underdog team clinched victory in overtime, sending fans into a frenzy.",
    source: "ESPN",
  }
];

const NewsHeadlines = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleHeadlineClick = (news) => {
    setSelectedNews(news);
    setAnalysisResult(null);
  };

  const handleCloseModal = () => {
    setSelectedNews(null);
    setAnalysisResult(null);
  };

  const handleAnalyzeNews = () => {
    const result = Math.random() > 0.5 ? "Real News" : "Fake News";
    setAnalysisResult(result);
  };

  const handleShareNews = () => {
    const text = `${selectedNews.title}\n\n${selectedNews.detail}`;
    navigator.clipboard.writeText(text);
    alert("News details copied to clipboard!");
  };

  return (
    <section className="feature-section news-headlines-section">
      <div className="container">
        <header className="feature-header">
          <h2 className="feature-title">Breaking News Insights</h2>
          <p className="feature-subtitle">
            Curated news collection with advanced authenticity verification. 
            Stay informed with our AI-powered news analysis platform.
          </p>
        </header>

        <div className="news-grid">
          {newsData.map((news) => (
            <div 
              key={news.id} 
              className="feature-card news-card"
              onClick={() => handleHeadlineClick(news)}
            >
              <div className="feature-icon-wrapper blue">
                <Newspaper />
              </div>
              <div className="feature-content">
                <h3>{news.title}</h3>
                <p className="feature-description">
                  {news.detail.substring(0, 100)}...
                </p>
                <div className="news-footer">
                  <span className="news-source">{news.source}</span>
                  <button className="feature-link blue">
                    Read More <ArrowRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedNews && (
          <div className="news-modal-overlay">
            <div className="feature-card news-modal">
              <button 
                className="modal-close" 
                onClick={handleCloseModal}
              >
                <X />
              </button>

              <div className="feature-icon-wrapper teal">
                <Shield />
              </div>

              <div className="news-modal-content">
                <h2>{selectedNews.title}</h2>
                <p className="feature-description">{selectedNews.detail}</p>
                <p className="feature-extra">Source: {selectedNews.source}</p>

                <div className="news-modal-actions">
                  <button 
                    className="feature-link blue" 
                    onClick={handleAnalyzeNews}
                  >
                    Analyze News <Shield className="arrow-icon" />
                  </button>
                  <button 
                    className="feature-link teal" 
                    onClick={handleShareNews}
                  >
                    Share News <Share2 className="arrow-icon" />
                  </button>
                </div>

                {analysisResult && (
                  <div className="news-analysis-result">
                    Authenticity: <span>{analysisResult}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsHeadlines;



