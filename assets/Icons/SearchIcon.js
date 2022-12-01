import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const SearchIcon = props => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
            {...props}
        >
            <Circle cx={11} cy={11} r={8} />
            <Path d="m21 21-4.35-4.35" />
        </Svg>
    );
};
