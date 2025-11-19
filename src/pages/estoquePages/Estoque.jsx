import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ModalPage from "../../components/ModalPage";
import { useMain } from "../../hooks/main";
import New from "./New";
import ListEstoque from "./ListEstoque";
import Delete from "./Delete";
import Update from "./Update";
import LinearIndeterminate from "../../components/LoadingTop";

export const ListaEstoque = () => {
  const {
    modalCreateOpen,
    setModalCreateOpen,
    modalDeleteOpen,
    setModalDeleteOpen,
    modalUpdateOpen,
    setModalUpdateOpen,
    estoques,
    loadingBase,
    loading,
    loadingSupremo, 
    setLoadingSupremo
  } = useMain()
  return (
    <Box sx={{ width: "100%", marginTop: "64px", padding: {md: '40px 80px', xs: '40px 20px'}, height: 'calc(100dvh - 64px)' }}>
      <LinearIndeterminate status={loadingSupremo} />
      <ModalPage open={modalCreateOpen} handleClose={() => setModalCreateOpen(false)} loading={loadingBase}>
        <New />
      </ModalPage>
      <ModalPage open={modalDeleteOpen} handleClose={() => setModalDeleteOpen(false)} loading={loadingBase}>
        <Delete />
      </ModalPage>
      <ModalPage open={modalUpdateOpen} handleClose={() => setModalUpdateOpen(false)} loading={loadingBase}>
        <Update />
      </ModalPage>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <Typography id="titulo-estoque" variant="h4" sx={{fontSize: {xs: '1.5rem' , md: '2.2rem'}}} component="h1" fontWeight="bold" color="primary.main">
          Estoque
        </Typography>

        <IconButton
          size="large"
          id="button-new-estoque"
          aria-label="adicionar novo estoque"
          onClick={() => setModalCreateOpen(!modalCreateOpen)}
        >
          <AddIcon />
        </IconButton>
      </Box>

      <List id="lista-estoque" sx={{ padding: 0, maxHeight: '70dvh', overflowY: 'auto' }}>
        {estoques?.map((item) => (
          <ListEstoque key={item.id} item={item} />
        ))}
      </List>
    </Box>
  );
};
