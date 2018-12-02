import React from 'react';
import './styles.css';

/**
 * A stylized "box" component that utilizes flex-box
 * @param props see Props type definition above
 */
const Box = (props) => (
    <section className={"box " + props.className || ""}>
        {props.children}
    </section>
)

export default Box;