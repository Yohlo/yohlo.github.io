import React from 'react';
import TerminalPrompt from './TerminalPrompt';
import './style.css';

const Terminal = () => (
    <div className="info">
        <div className="info-header">
        </div>
        <div className="info-body">
            <TerminalPrompt />
        </div>
    </div>
)

export default Terminal;