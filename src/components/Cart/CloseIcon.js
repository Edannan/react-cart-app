import classes from "./CloseIcon.module.css";

const CloseIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      width="30"
      height="30"
      className={props.className}
      onClick={props.onClose}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          className={classes.path}
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          d="M7,7 L17,17 M7,17 L17,7"
        ></path>
      </g>
    </svg>
  );
};

export default CloseIcon;
