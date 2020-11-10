import React from 'react';
import BoxColumn from '../../Box/BoxColumn';
import Section from '../../Section';
import Box from '../../Box';
import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

// importing the files (used for resume pdf download)
import files from '../../../files';

// Style that is applied to the font-awesome icon in the download button
const iconSpanStyle = {fontSize: "8rem"};

/**
 * Resume Section Component
 */
const Resume: React.FC = () => (
    <Section id="resume" className="home-section" title="Resume" headerLevel={1}>
        <Section id="work-experience" className="resume-section" title="Work Experience" headerLevel={2}>
            <div className="resume-section-body">
                <article className="resume-section-item">
                    <h3>Exxon Mobil Corporation</h3>
                    <h4><i>Software Developer</i>, July 2020 - Present</h4>
                    <ul>
                        <li>Help design, develop and maintain React.js implementation of company-branded design system.</li>
                        <li>Mentoring whole teams and individual developers on general React.js development alongside internal tools.</li>
                        <li>Assist development of content distribution system with social engagement and collaboration features.</li>
                    </ul>
                </article>
                <article className="resume-section-item">
                    <h3>Exxon Mobil Corporation</h3>
                    <h4><i>Software Developer Intern</i>, May 2019 - August 2019</h4>
                    <ul>
                        <li>Worked on large-scale application that provides competitive insight for the business line.</li>
                        <li>Create and maintain cloud-based API using MuleSoft, ensured integrity of critical data.</li>
                        <li>Worked with developers around the company in order to deliver onboarding materials, DevOps practice tutorials and brand styling tools.</li>
                        <li>Co-lead community of React developers and gave tech demo on new library features.</li>
                    </ul>
                </article>
                <article className="resume-section-item">
                    <h3>Exxon Mobil Corporation</h3>
                    <h4><i>Software Engineering Intern</i>, May 2018 - August 2018</h4>
                    <ul>
                        <li>Worked on rewriting large web application used by business line to manage employees and contractors. </li>
                        <li>Applied full-stack web development skills in order to develop a Web API using .NET Core and a modern front-end using React.js. </li>
                        <li>Exercised user-centered design practices to improve user performance.</li>
                    </ul>
                </article>
                <article className="resume-section-item">
                    <h3>Indiana University School of Informatics, Computing, and Engineering</h3>
                    <h4><i>Undergraduate Instructor</i>, August 2017 - May 2020</h4>
                    <ul>
                        <li>Assisted in teaching AI course with heavy Python programming components, CSCI-B351 Intro to Artificial Intelligence.</li>
                        <li>Head associate instructor for multiple semesters, lead collaboration between team of instructors.</li>
                        <li>Developed an online autograding system with heavy focus on teaching basics of git, CI/CD and DevOps to students as they submit assignments.</li>
                    </ul>
                </article>
                <article className="resume-section-item">
                    <h3>Indiana Secretary of State's Office</h3>
                    <h4><i>Summer Fellow (CS Intern)</i>, April 2017 - Present</h4>
                    <ul>
                        <li>Worked on modernizing the front-end look of older ASP.NET web applications. </li>
                        <li>Implemented changes to the back-end of an application used by hundreds of state officials such as an administrative dashboard, digital payment processes, automated usage reports, etc.</li>
                        <li>Managed large databases with critical data used by the Secretary’s business, auto dealer and elections divisions.</li>
                        <li>Worked remotely in order to deliver updates to key projects.</li>
                    </ul>
                </article>
                <article className="resume-section-item">
                    <h3>Indiana University School of Informatics, Computing, and Engineering</h3>
                    <h4><i>Service Desk Consultant</i>, March 2017 - Present</h4>
                    <ul>
                        <li>Accountable for resolution of user requests and incident management for faculty, staff, students and partners.</li>
                        <li>Communicate with IT professionals in order to provide outstanding support.</li>
                        <li>Create and maintain documentation for resolving common issues.</li>
                    </ul>
                </article>
                <article className="resume-section-item">
                    <h3>Indiana University School of Informatics, Computing, and Engineering</h3>
                    <h4><i>Research Intern</i>, August 2016 - August 2017</h4>
                    <ul>
                        <li>Developed Twitter bot that would automatically produce complicated network graphs and  publish them to Twitter.</li>
                        <li>Handled large-scale data from social media, analyzed trends and patterns during a key moment in the growth of social media.</li>
                    </ul>
                </article>
            </div>
        </Section>

        <Section id="education" className="resume-section" title="Education" headerLevel={2}>
            <div className="resume-section-body">
                <article className="resume-section-item">
                    <h3>Indiana University</h3>
                    <h4><i>Masters of Science in Computer Science</i>, May 2020</h4>
                </article>
                <article className="resume-section-item">
                    <h3>Indiana University</h3>
                    <h4><i>Bachelors of Science in Computer Science</i>, May 2019</h4>
                    <p>Specialization: Programming Languages</p>
                    <p>Minors: Informatics, Human-Centered Computing, and Mathematics.</p>
                    <p>Honors: Academic Deans List, Founders Scholar Acedemic Achievment Award</p>
                </article>
            </div>
        </Section>

        <Section id="projects" className="resume-section" title="Notable Projects" headerLevel={2}>
            <div className="resume-section-body">
                <article className="resume-section-item">
                    <h3>Grading Tool/Autograder</h3>
                    <p><i>An autograder created for IU's CSCI-B351 Intro to AI course</i></p>
                    <p><a href="https://github.com/Yohlo/grading-tool-site">Front-end with React.js on GitHub</a></p>
                    <p><a href="https://github.com/Yohlo/grading-tool-server">Back-end with Python+Flask on GitHub</a></p>
                </article>
                <article className="resume-section-item">
                    <h3>React Hooks Demo</h3>
                    <p><i>React Hooks demo given, by me, to ExxonMobil's React developer community</i></p>
                    <p><a href="https://github.com/Yohlo/react-hooks-demo">Available on GitHub</a></p>
                </article>
                <article className="resume-section-item">
                    <h3>kyleyohler.dev</h3>
                    <p><i>This site! Built from scratch with React.js</i></p>
                    <p><a href="https://github.com/Yohlo/yohlo.github.io/tree/source">Available on GitHub</a></p>
                </article>
                <article className="resume-section-item">
                    <h3>Everything Else</h3>
                    <p><i>More is available on my <a href="https://github.com/Yohlo">GitHub</a></i></p>
                </article>
            </div>
        </Section>

        <a className="resume-button-link" href={files.resume}>
            <Box className="resume-button">
                <BoxColumn className="no-border">
                    <span style={iconSpanStyle}>
                        <FontAwesomeIcon icon={solidIcons.faDownload} />
                    </span>
                </BoxColumn>
                <BoxColumn className="resume-button-text no-border">
                    <h3>Download a PDF copy of my resume.</h3>
                </BoxColumn>
            </Box>
        </a>

    </Section>

)

export default Resume;