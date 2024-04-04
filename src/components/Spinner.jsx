import { ClipLoader } from "react-spinners";
import { bool } from "prop-types";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#9ca3af"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;

Spinner.propTypes = {
  loading: bool,
};
