import React from 'react';
// import './styles.css'; // Custom stylesheet for the component

/**
 * Simple component for the sections of the site using HTML5 elements. 
 * @param props : see Props type definition
 */
const Section = (props) => {

    // Declare header based on headerLevel prop
    var header = props.headerLevel && props.headerLevel > 0 && props.headerLevel <=6 ? `h${props.headerLevel}` : 'h1';

    // straight-forward: <section> element with given id and class, with a body <div>.
    return (
        <section id={props.id} className={props.className || ""}>
            <div className="section-body">
                {
                    props.title && React.createElement(
                        header, {},
                        props.title
                    )
                }
                {props.children}
            </div>
        </section>
    )
}

export default Section;