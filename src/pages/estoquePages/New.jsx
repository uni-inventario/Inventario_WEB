import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMain } from "../../hooks/main";
import { createEstoque } from "../../services/estoqueService";

const New = () => {
    const {
        setModalCreateOpen,
        setLoadingBase,
        obterEstoques
    } = useMain()

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        nome: "",
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
        if (!formData.nome) {
            toast.error("Preencha todos os campos!");
            setIsLoading(false);
            return;
        }
        try {
            await createEstoque(formData)
            setModalCreateOpen(false);
            await obterEstoques();
            toast.success("Estoque criado com sucesso!")
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
                    Novo Estoque
                </Typography>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome-estoque"
                    label="Nome"
                    name="nome"
                    value={formData.nome}
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
                        onClick={() => setModalCreateOpen(false)}
                        sx={{ fontSize: 12, width: 'auto', backgroundColor: "gray" }}
                    >
                        Voltar
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        id="button-registrar-estoque"
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