import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMain } from "../../hooks/main";
import { createEstoque, updateEstoque } from "../../services/estoqueService";

const Update = () => {
    const {
        setModalUpdateOpen,
        setLoadingBase,
        obterEstoquePorId,
        estoqueUpdateId,
        estoque,
        obterEstoques
    } = useMain();

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: estoqueUpdateId || 0,
        nome: "",
    });

    useEffect(() => {
        const carregar = async () => {
            setLoadingBase(true);
            await obterEstoquePorId(estoqueUpdateId);
            setLoadingBase(false);
        };

        carregar();
    }, []);

    useEffect(() => {
        if (estoque) {
            setFormData({
                id: estoque.id ?? 0,
                nome: estoque.nome ?? "",
            });
        }
    }, [estoque]);

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

        if (!formData.nome) {
            toast.error("Preencha todos os campos!");
            setIsLoading(false);
            setLoadingBase(false);
            return;
        }

        try {
            await updateEstoque(formData);
            setModalUpdateOpen(false);
            await obterEstoques();
            toast.success("Estoque atualizado com sucesso!");
        } catch (error) {
            toast.error("Erro ao atualizar o estoque, tente novamente!");
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
                    Atualizar Estoque
                </Typography>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Nome"
                    name="nome"
                    value={formData.nome}
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
                        onClick={() => setModalUpdateOpen(false)}
                        sx={{ width: "auto", backgroundColor: "gray" }}
                    >
                        Voltar
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isLoading}
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
