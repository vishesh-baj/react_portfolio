import "./Card.css";
const Card = ({ children, className }) => {
  const clases = "card " + className;
  return <div className={clases}>{children}</div>;
};

export default Card;
