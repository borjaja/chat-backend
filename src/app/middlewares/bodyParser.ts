import bodyParser from "body-parser";

// Parses the body of POST/PUT request
// to JSON
const useBodyParse = () => {
  return bodyParser.json();
};

export default useBodyParse;
