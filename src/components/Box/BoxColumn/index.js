import React from 'react';
import './styles.css';

/**
 * BoxColumn :: Column / element in the box.
 * @param props See Props type definition above
 */
const BoxColumn = (props) => (
    <article className={props.className || ""}>
        {props.children}
    </article>
)

export default BoxColumn;