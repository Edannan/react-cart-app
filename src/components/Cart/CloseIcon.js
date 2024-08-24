import classes from './CloseIcon.module.css'

const CloseIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      width="30"
      height="30"
      className={props.className}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
        className={classes.path}
          fill="none"
          stroke="#fff"
          stroke-width="2"
          d="M7,7 L17,17 M7,17 L17,7"
        ></path>
      </g>
    </svg>
  );
};

export default CloseIcon;
