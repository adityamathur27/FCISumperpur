import React from 'react';
import './NewsTicker.css';

const news = [
  {
    text: 'Download Admissions Form for 2025-26!',
    url: require('../assets/pdfs/Admission_Form.pdf')
  },
  {
    text: 'Download the latest Academic Calendar.',
    url: require('../assets/pdfs/Academic_Calendar_2025-26.pdf')
  }
];
function NewsTicker() {
  return (
    <div className="news-ticker">
      <span className="news-label">Notice:</span>
      <div className="ticker-wrap" aria-label="News Ticker">
        <div className="ticker-move">
          {news.map((item, idx) => (
            <span key={idx} style={{marginRight: 24}}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                {item.text}
              </a>
              {idx !== news.length - 1 && <span style={{color:'#1976d2',margin:'0 8px'}}>|</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsTicker;
