import React from 'react';

interface Props {
    id: string;
    title?: string;
    className: string;
    headerLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
}

/**
 * Simple component for the sections of the site using HTML5 elements. 
 * @param props : see Props type definition
 */
const Section: React.FC<Props> = ({ id, title, className, headerLevel, children }) => 
    <section id={id} className={className || ""}>
        <div className="section-body">
            {
                title && React.createElement(
                    `h${headerLevel}`, {},
                    title
                )
            }
            {children}
        </div>
    </section>

export default Section;
