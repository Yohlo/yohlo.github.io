import React, { ReactNode } from 'react';
import './styles.css';

type Props = {
    className?: string,
    children: ReactNode
}

/**
 * A stylized "box" component that utilizes flex-box
 * @param props see Props type definition above
 */
const Box = (props: Props) => (
    <section className={"box " + props.className || ""}>
        {props.children}
    </section>
)

export default Box;