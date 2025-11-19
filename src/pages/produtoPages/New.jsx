import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMain } from "../../hooks/main";
import { createEstoque } from "../../services/estoqueService";
import { useParams } from "react-router-dom";
import { createProduto } from "../../services/produtoService";

const New = () => {

    const { estoqueId } = useParams();

    const {
        setModalCreateProdutoOpen,
        setLoadingBase,
        setLoadingSupremo,
        obterEstoques,
        obterEstoquePorId
    } = useMain()

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        preco: 0,
        quantidade: 0,
        estoqueId: estoqueId || 0
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setLoadingBase(true)
        if (!formData?.nome || !formData?.descricao || formData?.preco === null || formData?.quantidade === null) {
            toast.error("Preencha todos os campos!");
            setLoadingBase(false);
            setIsLoading(false);
            return;
        }
        try {
            await createProduto(formData)
            setModalCreateProdutoOpen(false);
            setLoadingSupremo(true)
            await obterEstoquePorId(estoqueId);
            setLoadingSupremo(false)
            toast.success("Produto criado com sucesso!")
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
            <form
                onSubmit={handleSubmit}
                style={{
                    width: "100%",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="primary.main"
                    sx={{
                        textAlign: 'center',
                        mb: 2
                    }}
                >
                    Novo Produto
                </Typography>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Nome"
                    name="nome"
                    id="nome-new-produto"
                    value={formData.nome}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    label="Descrição"
                    name="descricao"
                    id="descricao-new-produto"
                    value={formData.descricao}
                    onChange={handleChange}
                    maxRows={4}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Preço"
                    name="preco"
                    type="number"
                    id="preco-new-produto"
                    value={formData.preco}
                    onChange={handleChange}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Quantidade"
                    name="quantidade"
                    type="number"
                    id="quantidade-new-produto"
                    value={formData.quantidade}
                    onChange={handleChange}
                />

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
                        onClick={() => setModalCreateProdutoOpen(false)}
                        sx={{ fontSize: 12, width: 'auto', backgroundColor: "gray" }}
                    >
                        Voltar
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        id="button-registrar-produto"
                        disabled={isLoading}
                        sx={{ fontSize: 12, width: 'auto' }}
                    >
                        {isLoading ? "Registrando..." : "Registrar"}
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default New;