import { cn } from "../../utils";

const Loader = ({ className }) => {
  return <div className={cn("lds-dual-ring", className)}></div>;
};

export default Loader;
