import React from 'react';
import './styles.css';

interface Props {
    className?: string,
    children?: React.ReactNode
}

/**
 * BoxColumn :: Column / element in the box.
 * @param props See Props type definition above
 */
const BoxColumn: React.FC<Props> = ({ className, children }) => (
    <article className={className}>
        {children}
    </article>
)

export default BoxColumn;