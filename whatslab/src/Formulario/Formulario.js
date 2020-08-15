import React from 'react'
import styled from 'styled-components'

class Formulario extends React.Component {
    state = {
        comentarios : [],
        inputUsuario: '',
        inputMensagem:''
    }

    //pegar o texto do input do usuario
    onChangeUsuario = (event) => {
        this.setState({inputUsuario: event.target.value})
    }

    //pegar o texto do input da mensagem
    onChangeMensagem = (event) => {
        this.setState({ inputMensagem: event.target.value})
    }

    //cria um novo objeto e adiciona no array de comentarios
    enviarComentario = (event) => {

        event.preventDefault()
        //criando novo objeto
        const novoComentario = {
            
            usuario: this.state.inputUsuario,
            mensagem: this.state.inputMensagem
        }
        //atualizando o array com o novo objeto
        const novoArray = [...this.state.comentarios, novoComentario]
        this.setState({ comentarios: novoArray})

        //limpando os campos de input
        this.setState({inputUsuario: ''})
        this.setState({inputMensagem: ''})
    }
    apagarComentario = (event) => {
        const dados = event.target.innerHTML
        const dados2 = dados.split('_')
        const array = this.state.comentarios.filter((obj)=>{
           if(obj.usuario === dados2[0] && obj.mensagem === dados2[1]){
               return false
           } else {
               return true
           }
       })

       this.setState({comentarios: array})

    } 
    

    render(){
        
        const listaDeComentarios = this.state.comentarios
        .map((comentario)=> {
            return (
                <p onDoubleClick={this.apagarComentario}>{comentario.usuario}_{comentario.mensagem}</p>
                
                )
            })
                       

        //componente enviado para o APP.js
        return (
            <Contanier>
                <form onSubmit={this.enviarComentario}>
                    <input 
                    value={this.state.inputUsuario}
                    onChange={this.onChangeUsuario}
                    placeholder={'Usuário'}
                    />

                    <input 
                    value={this.state.inputMensagem}
                    onChange={this.onChangeMensagem}
                    placeholder={'Mensagem'}
                    />

                    <button type={'submit'} onClick={this.enviarComentario}>Enviar</button>
                </form>
                    <h3>{listaDeComentarios}</h3>
            
                  
                </Contanier>
        )
    }
}

export default Formulario


const Contanier = styled.div `
border: 1px solid black; 
height: 100vh;
width: 40vw;
padding: 10px;
margin: 0 auto;
display: flex;
flex-direction: column-reverse;
`
