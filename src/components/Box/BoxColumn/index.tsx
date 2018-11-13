import React, { ReactNode } from 'react';
import './styles.css';

type Props = {
    className?: string,
    children: ReactNode
}

/**
 * BoxColumn :: Column / element in the box.
 * @param props See Props type definition above
 */
const BoxColumn = (props: Props) => (
    <article className={props.className || ""}>
        {props.children}
    </article>
)

export default BoxColumn;