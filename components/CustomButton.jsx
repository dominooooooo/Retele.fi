import "@/styles/globals.css"

const CustomButton = ({
  title,
  otherStyles,
  onPress,
}) => {
  return (
    <button
      className={`bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-3 px-5 rounded-full shiny-green-button ${otherStyles}`}
      onClick={onPress}
    >
      {title}
    </button>
  );
};

export default CustomButton;