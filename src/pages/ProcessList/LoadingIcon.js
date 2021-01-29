import React from 'react';
import PropTypes from 'prop-types';

const LoadingIcon = props => {
  return (
    <svg
      className="lds-spin"
      width={props.size}
      height={props.size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{ background: 'none' }}
    >
      <g transform="translate(80,50)">
        <g transform="rotate(0)">
          <circle
            cx="0"
            cy="0"
            r="7"
            fill={props.color}
            fillOpacity="1"
            transform="scale(1.06142 1.06142)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.9166666666666666s"
              values="1.1 1.1;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.9166666666666666s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(75.98076211353316,65)">
        <g transform="rotate(29.999999999999996)">
          <circle
            cx="0"
            cy="0"
            r="7"
            fill={props.color}
            fillOpacity="0.9166666666666666"
            transform="scale(1.06976 1.06976)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.8333333333333334s"
              values="1.1 1.1;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.8333333333333334s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(65,75.98076211353316)">
        <g transform="rotate(59.99999999999999)">
          <circle
            cx="0"
            cy="0"
            r="7"
            fill={props.color}
            fillOpacity="0.8333333333333334"
            transform="scale(1.07809 1.07809)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.75s"
              values="1.1 1.1;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.75s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(50,80)">
        <g transform="rotate(90)">
          <circle
            cx="0"
            cy="0"
            r="7"
            fill={props.color}
            fillOpacity="0.75"
            transform="scale(1.08642 1.08642)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.6666666666666666s"
              values="1.1 1.1;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.6666666666666666s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(35.00000000000001,75.98076211353316)">
        <g transform="rotate(119.99999999999999)">
          <circle
            cx="0"
            cy="0"
            r="7"
            fill={props.color}
            fillOpacity="0.6666666666666666"
            transform="scale(1.09476 1.09476)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.5833333333333334s"
              values="1.1 1.1;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.5833333333333334s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(24.01923788646684,65)">
        <g transform="rotate(150.00000000000003)">
          <circle
            cx="0"
            cy="0"
            r="7"
            fill={props.color}
            fillOpacity="0.5833333333333334"
            transform="scale(1.00309 1.00309)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.5s"
              values="1.1 1.1;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.5s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(20,50.00000000000001)">
        <g transform="rotate(180)">
          <circle
            cx="0"
            cy="0"
            r="7"
            fill={props.color}
            fillOpacity="0.5"
            transform="scale(1.01142 1.01142)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.4166666666666667s"
              values="1.1 1.1;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.4166666666666667s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(24.019237886466836,35.00000000000001)">
        <g transform="rotate(209.99999999999997)">
          <circle
            cx="0"
            cy="0"
            r="7"
            fill={props.color}
            fillOpacity="0.4166666666666667"
            transform="scale(1.01976 1.01976)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.3333333333333333s"
              values="1.1 1.1;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.3333333333333333s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(34.999999999999986,24.019237886466847)">
        <g transform="rotate(239.99999999999997)">
          <circle
            cx="0"
            cy="0"
            r="7"
            fill={props.color}
            fillOpacity="0.3333333333333333"
            transform="scale(1.02809 1.02809)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.25s"
              values="1.1 1.1;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.25s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(49.99999999999999,20)">
        <g transform="rotate(270)">
          <circle
            cx="0"
            cy="0"
            r="7"
            fill={props.color}
            fillOpacity="0.25"
            transform="scale(1.03642 1.03642)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.16666666666666666s"
              values="1.1 1.1;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.16666666666666666s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(65,24.019237886466843)">
        <g transform="rotate(300.00000000000006)">
          <circle
            cx="0"
            cy="0"
            r="7"
            fill={props.color}
            fillOpacity="0.16666666666666666"
            transform="scale(1.04476 1.04476)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.08333333333333333s"
              values="1.1 1.1;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.08333333333333333s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(75.98076211353316,34.999999999999986)">
        <g transform="rotate(329.99999999999994)">
          <circle
            cx="0"
            cy="0"
            r="7"
            fill={props.color}
            fillOpacity="0.08333333333333333"
            transform="scale(1.05309 1.05309)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              values="1.1 1.1;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="0s"
            ></animate>
          </circle>
        </g>
      </g>
    </svg>
  );
};

LoadingIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

export default LoadingIcon;
