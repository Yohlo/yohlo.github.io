import React from 'react';
import './styles.css';
import BoxColumn from '../../Box/BoxColumn';
import Section from '../../Section';
import Box from '../../Box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

// importing the files (used for resume pdf download)
import files from '../../../files';

// Style that is applied to the font-awesome icon in the download button
const iconSpanStyle = {fontSize: "8rem"};

/**
 * Resume Section Component
 */
const Resume = () => (
    
    <Section id="resume" className="home-section" title="Resume">
        <Section id="work-experience" className="resume-section" title="Work Experience" headerLevel={2}>
            <div className="resume-section-body">
                <article className="resume-section-item">
                    <h3>Exxon Mobil Corporation</h3>
                    <h4><i>Software Engineering Intern</i>, May 2019 - August 2019</h4>
                </article>
                <article className="resume-section-item">
                    <h3>Exxon Mobil Corporation</h3>
                    <h4><i>Software Engineering Intern</i>, May 2018 - August 2018</h4>
                    <ul>
                        <li>Worked on rewriting large web application used by business line to manage employees and contractors.</li>
                        <li>Applied full-stack web development skills in order to develop a Web API using .Net Core and a modern front-end using React.js</li>
                        <li>Exercised user-centered design practices to improve user performance.</li>
                        <li>Handled sensitive employee data.</li>
                        <li>Presented project to leadership and senior technical professionals on multiple occasions.</li>
                    </ul>
                </article>
                <article className="resume-section-item">
                    <h3>Indiana Secretary of State's Office</h3>
                    <h4><i>Summer Fellow (CS Intern)</i>, April 2017 - Present</h4>
                    <ul>
                        <li>Worked on modernizing the front-end look of older ASP.NET web applications.</li>
                        <li>Implemented changes to the back-end of an application used by hundreds of Notary Publics such as an administrative dashboard, a new payment process, automated usage reports, etc.</li>
                        <li>Managed large databases with critical data used by the Secretary’s business, auto dealer and elections divisions.</li>
                        <li>Learned and exercised the processes of the development life-cycle: Development, UAT, QA and Production.</li>
                        <li>Working remotely to assist in finalizing changes made to certain web applications and other projects</li>
                    </ul>
                </article>
                <article className="resume-section-item">
                    <h3>Indiana University School of Informatics, Computing, and Engineering</h3>
                    <h4><i>Undergraduate Instructor</i>, August 2017 - Present</h4>
                    <ul>
                        <li>Assisted in teaching game theory course with heavy Python programming components, CSCI-C290 Games and Puzzles.</li>
                        <li>Currently assisting in teaching AI course with heavy Python programming components, CSCI-B351 Intro to Artificial Intelligence.</li>
                        <li>Holding office hours twice a week to work closely with students on topics discussed in class.</li>
                    </ul>
                </article>
                <article className="resume-section-item">
                    <h3>Indiana University School of Informatics, Computing, and Engineering</h3>
                    <h4><i>Service Desk Consultant</i>, March 2017 - Present</h4>
                    <ul>
                        <li>Accountable for resolution of user requests and incident management</li>
                        <li>Prioritize requests submitted by faculty, staff, students and partners</li>
                        <li>Communicate with IT professionals in order to provide outstanding support</li>
                        <li>Create and maintain documentation for resolving common issues.</li>
                    </ul>
                </article>
                <article className="resume-section-item">
                    <h3>Indiana University School of Informatics, Computing, and Engineering</h3>
                    <h4><i>Research Intern</i>, August 2016 - August 2017</h4>
                    <ul>
                        <li>Developed Twitter bot using Python, SQLite and Redis.</li>
                        <li>Handled data obtained from Twitter and IU’s OSoMe resources.</li>
                        <li>Programmed system to produce complicated network graphs that are automatically published onto Twitter.</li>
                        <li>Used multithreading in order to make and publish graphs more efficiently.</li>
                    </ul>
                </article>
            </div>
        </Section>

        <Section id="education" className="resume-section" title="Education" headerLevel={2}>
            <div className="resume-section-body">
                <article className="resume-section-item">
                    <h3>Indiana University</h3>
                    <h4><i>Bachelors of Science in Computer Science</i>, May 2019</h4>
                    <p>Specialization: Programming Languages</p>
                    <p>Minors: Informatics, Human-Centered Computing, and Mathematics.</p>
                    <p>Honors: Academic Deans List, Founders Scholar Acedemic Achievment Award</p>
                </article>
                <article className="resume-section-item">
                    <h3>Indiana University</h3>
                    <h4><i>Masters of Science in Computer Science</i>, May 2020</h4>
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