import { FC } from 'react';
import { IClassName } from 'src/types';

const Hamburger: FC<IClassName> = ({ className, width, height }): JSX.Element => {
    return (
        <>
            <svg
                stroke="currentColor"
                width={width}
                height={height}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                className={className}>
                <path
                    xmlns="http://www.w3.org/2000/svg"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16 "></path>
            </svg>
        </>
    );
};
export default Hamburger;
