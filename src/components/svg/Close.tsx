import { FC } from 'react';
import { IClassName } from 'src/types';

const Close: FC<IClassName> = ({ className, width, height }): JSX.Element => {
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
                    d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </>
    );
};
export default Close;
