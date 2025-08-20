import React from 'react';
import './NoticeBoard.css';
import noticePDF from '../assets/pdfs/Admission_Form.pdf';

function NoticeBoard() {
  return (
    <section className="notice-board" id="notice">
      <h2>Notice Board</h2>
      <ul>
        <li>
          <a href={noticePDF} target="_blank" rel="noopener noreferrer">
            Diploma Admission Form (PDF)
          </a>
        </li>
        {/* Add more notices as needed */}
      </ul>
    </section>
  );
}

export default NoticeBoard;
