import { Box, IconButton, ListItem, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useMain } from "../../hooks/main";
import { useNavigate } from "react-router-dom";
import { formatDateBr } from "../../utils/formatDate";

const textEllipsis = {
  width: "100%",
  maxWidth: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "block",
};

const ListEstoque = ({ item }) => {
  const navigate = useNavigate();

  const {
    setEstoqueDeleteId,
    setEstoqueUpdateId,
    setModalDeleteOpen,
    setModalUpdateOpen
  } = useMain();

  return (
    <ListItem
      sx={{
        backgroundColor: "#f5f5f5",
        marginBottom: 2,
        borderRadius: "4px",
        paddingY: 1.5,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: 2,
        width: "100%",
      }}
    >
      <Typography variant="body1" fontWeight="bold" sx={textEllipsis}>
        {item?.nome}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={textEllipsis}>
        <span style={{ fontWeight: 800, marginRight: 8 }}>Data:</span>
        {formatDateBr(item?.createdAt)}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={textEllipsis}>
        <span style={{ fontWeight: 800, marginRight: 8 }}>Produtos:</span>
        {item?.produtos?.length}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 0.5,
          alignSelf: { xs: "flex-end", md: "center" },
        }}
      >
        <IconButton size="small" aria-label="visualizar" onClick={() => navigate(`${item?.id}/produtos`)}>
          <VisibilityIcon fontSize="small" />
        </IconButton>

        <IconButton size="small" aria-label="editar" onClick={() => { 
          setEstoqueUpdateId(item?.id);
          setModalUpdateOpen(true);
        }}>
          <EditIcon fontSize="small" />
        </IconButton>

        <IconButton size="small" aria-label="excluir" onClick={() => { 
          setEstoqueDeleteId(item?.id);
          setModalDeleteOpen(true);
        }}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default ListEstoque;
