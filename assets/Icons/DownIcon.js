import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const DownIcon = props => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill={props.fill}
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down"
            {...props}
        >
            <Path d="m6 9 6 6 6-6" />
        </Svg>
    );
};


