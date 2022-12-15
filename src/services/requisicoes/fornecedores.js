import api from "../api"

export async function buscarFornecedores() {
    try {
        const resultado = await api.get("/companies")
        return resultado.data
    } catch (error) {
        console.log(error)
        return {}
    }
}