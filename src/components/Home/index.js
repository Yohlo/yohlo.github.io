import React from 'react';
import './styles.css';

import Box from '../Box';
import Resume from './Resume';
import Section from '../Section';
import BoxColumn from '../Box/BoxColumn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import Terminal from '../Terminal';

// Style that is applied to the font-awesome icons in the skills section
const iconSpanStyle = {fontSize: "4rem"};

/**
 * Home page of the site
 */
const Home = () => (
    <main>
        {/*
            Intro Section
            This section is just a little into :)
        */}
        <Section id="intro" className="home-section">
            <h1>Hi, I'm Kyle Yohler.</h1>
            <p>I'm a full stack developer pursuing a Masters degree in Computer Science at Indiana University. By applying myself both academically and professionally, I've become a confident developer with a diverse skillset. I am always looking for more challenges in order to improve these skills and learn new things.</p>
            <Terminal />
            <FontAwesomeIcon id="down-arrow" className="down-arrow bounce" icon={solidIcons.faArrowDown} size='2x'
                onClick={() => setTimeout(() => {
                    document.getElementById('skills').scrollIntoView({behavior: 'smooth', block: 'start'});
                    document.getElementById('down-arrow').classList.add('no-display');
                }, 100)}
            />
        </Section>

        {/*
            Skills Section
            A section to showcase/include my skills as a developer.
            Utilizes the Box component
        */}
        <Section id="skills" className="home-section">
            <Box>
                <BoxColumn>
                    <span style={iconSpanStyle}>
                        <FontAwesomeIcon icon={solidIcons.faCode} />
                    </span>
                    <h3>Front-end</h3>
                    <p>I have professional experience designing and building modern, user-centered front-end applications.</p>
                    <section>
                        <h3 className="skills-heading">
                            <strong>Languages:</strong>
                        </h3>
                        <p>HTML, CSS, JavaScript, TypeScript</p>
                    </section>
                    <section>
                        <h3 className="skills-heading">
                            <strong>Tools:</strong>
                        </h3>
                        <ul>
                            <li>React.js</li>
                            <li>Redux</li>
                            <li>Node.js and npm</li>
                            <li>Bootstrap</li>
                            <li>ASP</li>
                        </ul>
                    </section>
                </BoxColumn>
                <BoxColumn>
                    <span style={iconSpanStyle}>
                        <FontAwesomeIcon icon={solidIcons.faCogs} />
                    </span>
                    <h3>Back-end</h3>
                    <p>I am fluent in back-end development through both my academic and professional career.</p>
                    <section>
                        <h3 className="skills-heading">
                            <strong>Languages:</strong>
                        </h3>
                        <p>C, C#, Java, Python, SQL</p>
                    </section>
                    <section>
                        <h3 className="skills-heading">
                            <strong>Tools:</strong>
                        </h3>
                        <ul>
                            <li>.NET Core</li>
                            <li>Entity Framework Core</li>
                            <li>APIs</li>
                            <li>Visual Studio</li>
                            <li>gcc</li>
                        </ul>
                    </section>
                </BoxColumn>
                <BoxColumn className="no-border">
                    <span style={iconSpanStyle}>
                        <FontAwesomeIcon icon={solidIcons.faLayerGroup} />
                    </span>
                    <h3>Full Stack</h3>
                    <p>I can utilize my skillsets in order to contribute to all parts of a development project.</p>
                    <section>
                        <h3 className="skills-heading">
                            <strong>Platforms:</strong>
                        </h3>
                        <p>Windows, MacOS, Linux and Android.</p>
                    </section>
                    <section>
                        <h3 className="skills-heading">
                            <strong>Tools:</strong>
                        </h3>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Team Foundation Server</li>
                            <li>CI/CD Pipelines</li>
                            <li>Microsoft IIS</li>
                        </ul>
                    </section>
                </BoxColumn>
            </Box>
        </Section>

        {/*
            Resume Section
            A section that includes a stylized version of my resume.
            I decided to put the Resume in it's own component to simplify
                this file.
        */} 
        <Resume />

        {/*
            Footer Section
            A footer section with links
        */}
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
                    <FontAwesomeIcon icon={regularIcons.faCopyright} /> me, 2018.
                </p>
            </Section>
        </footer>

    </main>
)

export default Home;