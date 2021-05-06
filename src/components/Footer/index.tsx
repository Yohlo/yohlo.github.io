import React from 'react';
import Section from '../Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import './styles.css';

const Footer: React.FC = () => (
    <footer>
        <Section id="footer" className="home-section">
            <a href="https://github.com/Yohlo">
                <FontAwesomeIcon icon={brandIcons.faGithubAlt} />
            </a>
            <a href="https://www.linkedin.com/in/kyle-yohler-a41066138/">
                <FontAwesomeIcon icon={brandIcons.faLinkedinIn} />
            </a>
            <a href="mailto:yohlerkyle@gmail.com">
                <FontAwesomeIcon icon={regularIcons.faEnvelope} />
            </a>
            <p>
                <i>May 2021</i>
            </p>
        </Section>
    </footer>
);

export default Footer;