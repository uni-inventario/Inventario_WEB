import { Box, IconButton, ListItem, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useMain } from "../../hooks/main";

const textEllipsis = {
  width: "100%",
  maxWidth: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "block",
};

const ListProduto = ({ item }) => {
  const {
    setProdutoDeleteId,
    setProdutoUpdateId,
    setModalDeleteProdutoOpen,
    setModalUpdateProdutoOpen
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
      <Box 
        sx={{ 
          flex: 1, 
          width: "100%", 
          minWidth: 0,  
          display: "grid", 
          gap: 0.5 
        }}
      >
        <Typography variant="body1" fontWeight="bold" sx={textEllipsis} title={item?.nome}>
          {item?.nome}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={textEllipsis} title={item?.descricao}>
          <span style={{ fontWeight: 800, marginRight: 8 }}>Sobre:</span>
          {item?.descricao}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={textEllipsis} title={`R$ ${item?.preco}`}>
          <span style={{ fontWeight: 800, marginRight: 8 }}>Preço:</span>
          R$ {item?.preco}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={textEllipsis} title={String(item?.quantidade)}>
          <span style={{ fontWeight: 800, marginRight: 8 }}>Quantidade:</span>
          {item?.quantidade}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 0.5,
          alignSelf: { xs: "flex-end", md: "center" },
        }}
      >
        <IconButton
          size="small"
          aria-label="editar"
          onClick={() => {
            setProdutoUpdateId(item?.id);
            setModalUpdateProdutoOpen(true);
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>

        <IconButton
          size="small"
          aria-label="excluir"
          onClick={() => {
            setProdutoDeleteId(item?.id);
            setModalDeleteProdutoOpen(true);
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default ListProduto;
