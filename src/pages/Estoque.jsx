import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getEstoque } from "../services/estoqueService";

const EstoqueListItem = ({ item }) => (
  <ListItem
    sx={{
      backgroundColor: "#f5f5f5",
      marginBottom: 1,
      borderRadius: "4px",
      paddingY: 1.5,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <ListItemText
      primary={
        <Typography variant="body1" fontWeight="bold">
          {item.nome}
        </Typography>
      }
      sx={{ flex: "0 0 150px" }}
    />

    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ flex: "0 0 150px" }}
    >
      Data: {item.createdAt}
    </Typography>

    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ flexGrow: 1, textAlign: "left" }}
    >
      Produtos: {item.produtos?.length}
    </Typography>
    <Box sx={{ display: "flex", gap: 0.5 }}>
      <IconButton size="small" aria-label="visualizar">
        <VisibilityIcon fontSize="small" />
      </IconButton>
      <IconButton size="small" aria-label="editar">
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton size="small" aria-label="excluir">
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Box>
  </ListItem>
);

export const ListaEstoque = () => {
  const [estoque, setEstoque] = useState([]);

  useEffect(() => {
    obterEstoques();
  }, []);

  const obterEstoques = async () => {
    try {
      const res = await getEstoque();

      setEstoque(res?.data);
    } catch (error) {
      console.error();
      toast.error("Erro ao obter os estoques, recarregue e tente novamente");
    }
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 700, margin: "auto", padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <Typography variant="h4" component="h1" fontWeight="bold">
          Estoque
        </Typography>
        <IconButton size="large" aria-label="adicionar novo estoque">
          <AddIcon />
        </IconButton>
      </Box>

      <List sx={{ padding: 0 }}>
        {estoque?.map((item) => (
          <EstoqueListItem key={item.id} item={item} />
        ))}
      </List>
    </Box>
  );
};
