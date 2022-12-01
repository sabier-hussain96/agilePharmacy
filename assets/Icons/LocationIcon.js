import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const LocationIcon = props => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            viewBox="0 0 24 24"
            fill="none"
            stroke={props.stroke}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-map-pin"
            {...props}
        >
            <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <Circle cx={12} cy={10} r={3} />
        </Svg>
    );
};

