import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contador: 0,
        tarefas: [
            
        ]
    },
    getters:{
        tarefasConcluidas:(state) =>{
            return state.tarefas.filter(t => t.concluido)
        },
        tarefasAFazer:(state) =>{
            return state.tarefas.filter(t => !t.concluido)
        },
        totalTarefasConcluidas: (state,getters) => getters.tarefasConcluidas.length,
        buscarTarefaId: (state) => {
            return (id) => {
                return state.tarefas.find(t => t.id === id)
            }
        }
    },
    mutations:{
        listaTarefas: state => {
            state.tarefas =[
                { id: 1, titulo: 'Aprender Vue', concluido: true },
                { id: 2, titulo: 'Aprender Vue Router', concluido: true },
                { id: 3, titulo: 'Aprender Vuex', concluido: false }
            ]
        }
    }
})