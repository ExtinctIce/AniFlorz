import { Link } from "react-router-dom";

interface IntegrationProps {
  to: string;
  text: string;
  className: string;
}

const Integration = ({ to, text, className }: IntegrationProps) => {
  return (
    <Link to={to} className={className}> 
      <div className="z-20 py-36 px-1 text-transparent bg-gradient bg-neutral-900 opacity-80 hover:bg-neutral-900 transition-colors hover:opacity-75 duration-200 rounded-sm cursor-pointer bg-opacity-30">
        <p className="text-white hover:text-gray-300 font-bold">{text}</p>
      </div>
    </Link>
  );
};

export default Integration;
