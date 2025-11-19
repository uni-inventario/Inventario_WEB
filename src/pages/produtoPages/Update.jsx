import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMain } from "../../hooks/main";
import { createEstoque, updateEstoque } from "../../services/estoqueService";
import { useParams } from "react-router-dom";
import { updateProduto } from "../../services/produtoService";

const Update = () => {
    const { estoqueId } = useParams();

    const {
        setModalUpdateProdutoOpen,
        setLoadingBase,
        obterEstoquePorId,
        obterProdutoPorId,
        produtoUpdateId,
        setLoadingSupremo,
        produto
    } = useMain();

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: produtoUpdateId || 0,
        nome: "",
        descricao: "",
        preco: "",
        quantidade: "",
        estoqueId: estoqueId || 0
    });

    useEffect(() => {
        const carregar = async () => {
            setLoadingBase(true);
            await obterProdutoPorId(produtoUpdateId);
            setLoadingBase(false);
        };

        carregar();
    }, []);

    useEffect(() => {
        if (produto) {
            setFormData({
                id: produto.id ?? 0,
                nome: produto.nome ?? "",
                descricao: produto?.descricao ?? "",
                preco: produto?.preco ?? "",
                quantidade: produto?.quantidade ?? "",
                estoqueId: estoqueId
            });
        }
    }, [produto]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setLoadingBase(true);

        if (!formData?.nome || !formData?.descricao || formData?.preco === null || formData?.quantidade === null) {
            toast.error("Preencha todos os campos!");
            setIsLoading(false);
            setLoadingBase(false);
            return;
        }

        try {
            await updateProduto(formData);
            setModalUpdateProdutoOpen(false);
            setLoadingSupremo(true)
            await obterEstoquePorId(estoqueId);
            setLoadingSupremo(false)
            toast.success("Produto atualizado com sucesso!");
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="primary.main"
                    sx={{ textAlign: "center", mb: 2 }}
                >
                    Atualizar Produto
                </Typography>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Nome"
                    name="nome"
                    id="nome-editar-produto"
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
                    id="descricao-editar-produto"
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
                    id="preco-editar-produto"
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
                    id="quantidade-editar-produto"
                    value={formData.quantidade}
                    onChange={handleChange}
                />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        width: "100%",
                        mt: 4,
                    }}
                >
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => setModalUpdateProdutoOpen(false)}
                        sx={{ width: "auto", backgroundColor: "gray" }}
                    >
                        Voltar
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isLoading}
                        id="button-editar-produto"
                        sx={{ width: "auto" }}
                    >
                        {isLoading ? "Atualizando..." : "Salvar"}
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default Update;
