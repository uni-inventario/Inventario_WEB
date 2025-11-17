import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMain } from "../hooks/main";
import { updateUsuario } from "../services/usuarioService";

const Usuario = () => {
    const {
        setModalUpdateUsuarioOpen,
        setLoadingBase,
        usuario,
        obterUsuario
    } = useMain();

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        nome: "",
        email: ""
    });

    useEffect(() => {
        const carregar = async () => {
            setLoadingBase(true);
            await obterUsuario();
            setLoadingBase(false);
        };

        carregar();
    }, []);

    useEffect(() => {
        if (usuario) {
            setFormData({
                id: usuario.id ?? 0,
                nome: usuario.nome ?? "",
                email: usuario.email ?? "",
            });
        }
    }, [usuario]);

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
            await updateUsuario(formData);
            toast.success("Usuário atualizado com sucesso!");
            setModalUpdateUsuarioOpen(false);
        } catch (error) {
            toast.error("Erro ao atualizar o usuário, tente novamente!");
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
                    Perfil Usuário
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

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
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
                        onClick={() => setModalUpdateUsuarioOpen(false)}
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

export default Usuario;
