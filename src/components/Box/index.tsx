import React from 'react';
import './styles.css';

interface Props {
    className?: string,
    children?: React.ReactNode
}

/**
 * A stylized "box" component that utilizes flex-box
 * @param props see Props type definition above
 */
const Box: React.FC<Props> = ({ className, children }) => (
    <section className={"box " + className}>
        {children}
    </section>
)

export default Box;