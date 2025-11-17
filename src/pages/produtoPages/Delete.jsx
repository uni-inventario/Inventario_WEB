import { Box, Button, TextField, Typography } from "@mui/material";
import { space } from "postcss/lib/list";
import { useState } from "react";
import toast from "react-hot-toast";
import LinearIndeterminate from "../../components/LoadingTop";
import { useMain } from "../../hooks/main";
import { deleteEstoque } from "../../services/estoqueService";
import { deleteProduto } from "../../services/produtoService";
import { useParams } from "react-router-dom";

const Delete = () => {

    const { estoqueId } = useParams();

    const {
        setModalDeleteProdutoOpen,
        setLoadingBase,
        setLoadingSupremo,
        obterEstoquePorId,
        produtoDeleteId
    } = useMain()

    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setLoadingBase(true)
        try {
            await deleteProduto(produtoDeleteId)
            setModalDeleteProdutoOpen(false);
            setLoadingSupremo(true);
            await obterEstoquePorId(estoqueId);
            setLoadingSupremo(false)
            toast.success("Produto excluído com sucesso!")
        } catch (error) {
            error?.response?.data?.message &&
                error?.response?.data?.message?.forEach(msg => toast.error(msg))
        } finally {
            setIsLoading(false);
            setLoadingBase(false);
        }
    };

    return (
        <Box>
            <Typography
                variant="h5"
                fontWeight="bold"
                color="primary.main"
                sx={{
                    textAlign: 'center',
                    mb: 2
                }}
            >
                Exlusão de Produto
            </Typography>
            <Typography
                fontWeight="bold"
                sx={{
                    textAlign: 'center',
                    mb: 2,
                    width: '100%'
                }}
            >
                Essa ação excluirá o produto permanentemente. Deseja prosseguir com está ação?
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    width: '100%',
                    fontSize: 12,
                    mt: 4
                }}
            >
                <Button
                    fullWidth
                    variant="contained"
                    onClick={() => setModalDeleteProdutoOpen(false)}
                    sx={{ fontSize: 12, width: 'auto', backgroundColor: "gray" }}
                >
                    Voltar
                </Button>
                <Button
                    onClick={(e) => handleDelete(e)}
                    fullWidth
                    variant="contained"
                    disabled={isLoading}
                    sx={{ fontSize: 12, width: 'auto', bgcolor: 'red' }}
                >
                    {isLoading ? "Excluindo..." : "Excluir"}
                </Button>
            </Box>
        </Box>
    )
}

export default Delete;