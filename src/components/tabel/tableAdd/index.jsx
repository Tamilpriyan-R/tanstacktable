import AddIcon from "@mui/icons-material/Add";
import IconBox from "../components/IconBox";

const TableAdd = ({ path, title }) => {
  const handleAdd = () => {};
  return <IconBox title={title} IconName={AddIcon} onClick={handleAdd} />;
};

export default TableAdd;
