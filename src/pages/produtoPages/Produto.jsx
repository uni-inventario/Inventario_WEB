import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ModalPage from "../../components/ModalPage";
import { useMain } from "../../hooks/main";
import New from "./New";
import Delete from "./Delete";
import Update from "./Update";
import LinearIndeterminate from "../../components/LoadingTop";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ListProduto from "./ListProduto";

export const ListaProduto = () => {

  const navigate = useNavigate();

  const {
    modalCreateProdutoOpen,
    setModalCreateProdutoOpen,
    modalDeleteProdutoOpen,
    setModalDeleteProdutoOpen,
    modalUpdateProdutoOpen,
    setModalUpdateProdutoOpen,
    estoque,
    loadingBase,
    loading,
    loadingSupremo,
    setLoadingSupremo,
    obterEstoquePorId,
    estoqueAtualId
  } = useMain()

  const { estoqueId } = useParams();

  useEffect(() => {
    const carregar = async () => {
      setLoadingSupremo(true);
      await obterEstoquePorId(estoqueId);
      setLoadingSupremo(false);
    };

    carregar();
  }, []);

  return (
    <Box sx={{ width: "100%", marginTop: "64px", padding: {md: '40px 80px', xs: '40px 20px'}, height: 'calc(100dvh - 64px)' }}>
      <LinearIndeterminate status={loadingSupremo} />
      <ModalPage open={modalCreateProdutoOpen} handleClose={() => setModalCreateProdutoOpen(false)} loading={loadingBase}>
        <New />
      </ModalPage>
      <ModalPage open={modalDeleteProdutoOpen} handleClose={() => setModalDeleteProdutoOpen(false)} loading={loadingBase}>
        <Delete />
      </ModalPage>
      <ModalPage open={modalUpdateProdutoOpen} handleClose={() => setModalUpdateProdutoOpen(false)} loading={loadingBase}>
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
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary.main">
          {estoque?.nome && `Estoque - ${estoque?.nome}`}
        </Typography>

        <IconButton
          size="large"
          aria-label="adicionar novo estoque"
          onClick={() => setModalCreateProdutoOpen(!modalCreateProdutoOpen)}
        >
          <AddIcon />
        </IconButton>
      </Box>

      <List sx={{ padding: 0, maxHeight: '65dvh', overflowY: 'auto' }}>
        {estoque?.produtos?.map((item) => (
          <ListProduto key={item.id} item={item} />
        ))}
      </List>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ fontSize: 12, width: 'auto', mt: 4 }}
        onClick={() => navigate('../../estoques')}
      >
        Voltar
      </Button>
    </Box>
  );
};
