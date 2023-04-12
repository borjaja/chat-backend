import cors from "cors";

const useCors = () => {
  return cors({ origin: true });
};

export default useCors;
