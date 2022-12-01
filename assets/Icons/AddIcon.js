import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export const AddIcon = props => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={45}
            height={45}
            viewBox="0 0 24 24"
            fill="#3BB896"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus-circle"
            {...props}
        >
            <Circle cx={12} cy={12} r={10} />
            <Path d="M12 8v8M8 12h8" />
        </Svg>
    );
};
