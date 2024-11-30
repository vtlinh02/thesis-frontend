const Button = ({ content, handleOnclick }) => {
  return (
    <button
      onClick={handleOnclick}
      className="flex justify-center items-center w-[150px] h-[65px] bg-coral-red  rounded-full text-white"
    >
      {content}
    </button>
  );
};

export default Button;
