import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getEstoque, getEstoqueById } from "../services/estoqueService";
import { getUsuario } from "../services/usuarioService";
import { getProdutoById } from "../services/produtoService";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [modalCreateOpen, setModalCreateOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);
  const [modalCreateProdutoOpen, setModalCreateProdutoOpen] = useState(false);
  const [modalDeleteProdutoOpen, setModalDeleteProdutoOpen] = useState(false);
  const [modalUpdateProdutoOpen, setModalUpdateProdutoOpen] = useState(false);
  const [modalUpdateUsuarioOpen, setModalUpdateUsuarioOpen] = useState(false);
  const [estoques, setEstoques] = useState([]);
  const [estoque, setEstoque] = useState([]);
  const [produto, setProduto] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [loadingBase, setLoadingBase] = useState(false);
  const [loadingSupremo, setLoadingSupremo] = useState(false);
  const [estoqueDeleteId, setEstoqueDeleteId] = useState(null);
  const [estoqueUpdateId, setEstoqueUpdateId] = useState(null);
  const [produtoDeleteId, setProdutoDeleteId] = useState(null);
  const [produtoUpdateId, setProdutoUpdateId] = useState(null);
  const [estoqueAtualId, setEstoqueAtualId] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    obterEstoques();
  }, []);

  const obterEstoques = async () => {
    try {
      setLoadingSupremo(true)
      const res = await getEstoque();
      setEstoques(res?.data);
    } catch (error) {
      console.error();
      toast.error("Erro ao obter os estoques, recarregue e tente novamente");
    } finally {
      setLoadingSupremo(false)
    }
  };

  const obterEstoquePorId = async (id) => {
    try {
      const res = await getEstoqueById(id);
      setEstoque(res?.data);
    } catch (error) {
      toast.error("Erro ao obter os estoques, recarregue e tente novamente");
    }
  };

    const obterProdutoPorId = async (id) => {
    try {
      const res = await getProdutoById(id);
      setProduto(res?.data);
    } catch (error) {
      toast.error("Erro ao obter o produto, recarregue e tente novamente");
    }
  };

  const obterUsuario = async () => {
    try {
      const res = await getUsuario();
      setUsuario(res?.data);
    } catch (error) {
      toast.error("Erro ao obter o usuário, recarregue e tente novamente");
    }
  };

  return (
    <MainContext.Provider
      value={{
        modalCreateOpen,
        setModalCreateOpen,
        obterProdutoPorId,
        produto,
        setProduto,
        estoques,
        setEstoques,
        estoque,
        setEstoque,
        loadingBase,
        setLoadingBase,
        obterEstoques,
        modalDeleteOpen,
        modalCreateProdutoOpen, 
        setModalCreateProdutoOpen,
        modalDeleteProdutoOpen, 
        setModalDeleteProdutoOpen,
        modalUpdateProdutoOpen, 
        setModalUpdateProdutoOpen,
        produtoDeleteId, 
        setProdutoDeleteId,
        produtoUpdateId, 
        setProdutoUpdateId,
        setModalDeleteOpen,
        estoqueDeleteId,
        setEstoqueDeleteId,
        estoqueAtualId, 
        setEstoqueAtualId,
        modalUpdateOpen,
        setModalUpdateOpen,
        estoqueUpdateId,
        obterEstoquePorId,
        anchorEl, 
        setAnchorEl,
        setEstoqueUpdateId,
        loadingSupremo,
        setLoadingSupremo,
        modalUpdateUsuarioOpen,
        setModalUpdateUsuarioOpen,
        obterUsuario,
        usuario,
        setUsuario
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => {
  return useContext(MainContext)
};
