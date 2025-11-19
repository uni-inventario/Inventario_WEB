import { Box, Button, TextField, Typography } from "@mui/material";
import { space } from "postcss/lib/list";
import { useState } from "react";
import toast from "react-hot-toast";
import LinearIndeterminate from "../../components/LoadingTop";
import { useMain } from "../../hooks/main";
import { deleteEstoque } from "../../services/estoqueService";

const Delete = () => {
    const {
        setModalDeleteOpen,
        setLoadingBase,
        obterEstoques,
        estoqueDeleteId
    } = useMain()

    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setLoadingBase(true)
        try {
            await deleteEstoque(estoqueDeleteId)
            setModalDeleteOpen(false);
            await obterEstoques();
            toast.success("Estoque excluído com sucesso!")
        } catch (error) {
            toast.error("Erro ao excluir o estoque, tente novamente!")
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
                Exlusão de Estoque
            </Typography>
            <Typography
                fontWeight="bold"
                sx={{
                    textAlign: 'center',
                    mb: 2,
                    width: '100%'
                }}
            >
                Essa ação excluirá todos os produtos relacionados ao estouqe. Deseja prosseguir com está ação?
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
                    onClick={() => setModalDeleteOpen(false)}
                    sx={{ fontSize: 12, width: 'auto', backgroundColor: "gray" }}
                >
                    Voltar
                </Button>
                <Button
                    onClick={(e) => handleDelete(e)}
                    fullWidth
                    variant="contained"
                    id="button-confirm-delete-estoque"
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