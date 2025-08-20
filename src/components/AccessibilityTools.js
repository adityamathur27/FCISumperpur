
import React, { useState } from 'react';
import './AccessibilityTools.css';

function AccessibilityTools() {
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState(false);
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    document.body.style.fontSize = fontSize + 'px';
    document.body.style.background = contrast ? '#222' : '#f5f6fa';
    document.body.style.color = contrast ? '#fff' : '#222';
  }, [fontSize, contrast]);

  return (
    <div className="accessibility-fab-container">
      <button className="accessibility-fab" onClick={() => setOpen(o => !o)} title="Accessibility Tools">
        <span role="img" aria-label="accessibility">♿</span>
      </button>
      {open && (
        <div className="accessibility-popover">
          <button onClick={() => setFontSize(f => Math.max(12, f - 2))}>A-</button>
          <button onClick={() => setFontSize(f => Math.min(24, f + 2))}>A+</button>
          <button onClick={() => setContrast(c => !c)}>{contrast ? 'Normal' : 'High Contrast'}</button>
        </div>
      )}
    </div>
  );
}

export default AccessibilityTools;
