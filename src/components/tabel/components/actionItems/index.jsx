import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";
import { tableActionStyles } from "../../tableStyles/styles";

const TableActionItems = ({
  row,
  isEdit = true,
  isView = true,
  isDelete = true,
  isExtra = false, 
  onView,
  onEdit,
  onDelete,
  extraActions = [], 
}) => {

  //   extraActions={[
  //   { icon: CustomIcon1, title: "Approve", onClick: handleApprove },
  //   { icon: CustomIcon2, title: "Reject", onClick: handleReject },
  // ]}
  return (
    <div style={{ ...tableActionStyles.container }}>
      {isView && (
        <Tooltip title="View" arrow>
          <VisibilityIcon
            sx={{ ...tableActionStyles.icon }}
            onClick={() => onView(row?.row?.original)}
          />
        </Tooltip>
      )}
      {isEdit && (
        <Tooltip title="Edit" arrow>
          <CreateIcon
            sx={{ ...tableActionStyles.icon }}
            onClick={() => onEdit(row?.row?.original)}
          />
        </Tooltip>
      )}
      {isDelete && (
        <Tooltip title="Delete" arrow>
          <DeleteIcon
            sx={{ ...tableActionStyles.icon }}
            onClick={() => onDelete(row?.row?.original)}
          />
        </Tooltip>
      )}

    
      {isExtra &&
        extraActions.map(({ icon: Icon, title, onClick }, i) => (
          <Tooltip key={i} title={title} arrow>
            <Icon
              sx={{ ...tableActionStyles.icon }}
              onClick={() => onClick(row?.row?.original)}
            />
          </Tooltip>
        ))}
    </div>
  );
};

export default TableActionItems;
