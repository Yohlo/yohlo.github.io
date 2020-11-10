import React, { useEffect, useRef } from 'react';
import './styles.css';
import Box from '../Box';
import Resume from './Resume';
import Footer from '../Footer';
import Section from '../Section';
import Terminal from '../Terminal';
import BoxColumn from '../Box/BoxColumn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import { useWindowScrollY } from '../../hooks';

// Style that is applied to the font-awesome icons in the skills section
const iconSpanStyle = {fontSize: "4rem"};

/**
 * Home page of the site
 */
const Portfolio: React.FC = () => {
    const scrollY = useWindowScrollY();
    const arrowRef  = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!arrowRef.current) return;
        if(scrollY > (arrowRef.current.offsetHeight + arrowRef.current.offsetTop)) {
            arrowRef.current.classList.add('no-display');
        }
    }, [scrollY])

    return <main>
        {/*
            Intro Section
            This section is just a little into :)
        */}
        <Section id="intro" className="home-section">
            <h1>Hi, I'm Kyle Yohler!</h1>
            <p className="short">I'm a full stack developer with a passion for React and DevOps. I am always looking for more challenges in order to improve these skills and learn new things.</p>
            <Terminal />
            <div ref={arrowRef}>
                <FontAwesomeIcon id="down-arrow" className="down-arrow bounce" icon={solidIcons.faArrowDown} size='2x'
                    onClick={() => setTimeout(() => {
                        document.getElementById('skills')!.scrollIntoView({behavior: 'smooth', block: 'start'});
                        arrowRef.current!.classList.add('no-display');
                    }, 100)}
                />
            </div>
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
                    <p>I have experience designing and building modern, user-centered front-end applications.</p>
                    <section>
                        <h3 className="skills-heading mid">
                            <strong>Languages:</strong>
                        </h3>
                        <p>HTML, CSS, JavaScript, TypeScript</p>
                    </section>
                    <section>
                        <h3 className="skills-heading">
                            <strong>Tools:</strong>
                        </h3>
                        <ul>
                            <li>React.js, Angular, ASP</li>
                            <li>Node.js and npm</li>
                            <li>Experience using and creating design frameworks</li>
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
                        <h3 className="skills-heading mid">
                            <strong>Languages:</strong>
                        </h3>
                        <p>C, C#, Java, Python, Rust, SQL, NoSQL</p>
                    </section>
                    <section>
                        <h3 className="skills-heading">
                            <strong>Tools:</strong>
                        </h3>
                        <ul>
                            <li>.NET Core, django, Flask and Express</li>
                            <li>ORMs like EF Core and SQLAlchemy</li>
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
                        <h3 className="skills-heading mid">
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
                            <li>CI/CD, ADO, GitHub Actions</li>
                            <li>Docker</li>
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
        <Footer />

    </main>;
}

export default Portfolio;