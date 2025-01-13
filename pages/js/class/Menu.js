import { getURL, makeRequest } from '../config/http.js';

export class Menu {
    descricao;

    async create() {
        const data = {
            descricao: this.descricao
        }
        return await makeRequest(getURL('menu'), 'POST', data);
    }

    async findById(id) {
        try {
            const response = await makeRequest(getURL(`menu/${id}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao receber o conteúdo:', error);
        }
    }

    async updateById(id) {
        const data = {
            menuId: this.menuId,
            descricao: this.descricao
        }
        try {
            const response = await makeRequest(getURL(`menu/${id}`), 'PUT', data);
            return response;
        } catch (error) {
            console.error('Erro ao atualizar o conteúdo:', error);
        }
    }

    async deleteById(id) {
        try {
            const response = await makeRequest(getURL(`menu/${id}`), 'DELETE');
            return response;
        } catch (error) {
            console.error('Erro ao deletar o conteúdo:', error);
        }
    }
}
