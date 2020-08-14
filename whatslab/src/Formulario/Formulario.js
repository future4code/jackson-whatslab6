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
    enviarComentario = () => {
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


    render(){
        const listaDeComentarios = this.state.comentarios
        .map((comentario)=> {
            return (
                <p>{comentario.usuario} {comentario.mensagem}</p>
                
            )
        })


        //componente enviado para o APP.js
        return (
            <Contanier>
                <div /*onSubmit={this.enviarComentario}*/>
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

                    <button onClick={this.enviarComentario}>Enviar</button>
                </div>
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
