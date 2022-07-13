//CREATE, READ, UPDATE, DELETE

const miniTwitter = {
    usuarios:  [
        {
            username:'danieleolivs'
        }
    ],
    posts:[
        {
            id:1,
            owner: 'danieleolivs',
            content:'Meu primeiro tweet'
        }
    ]
};

//CREATE
function criaPost(dados){
    miniTwitter.posts.push({
        id:miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    })
}

criaPost({owner:'danieleolivs',content:'segundo tweet'})

//READ

function pegaPost(){
    return miniTwitter.posts;
}

//UPDATE
function atualizaContentPost(id, novoConteudo){
    const postAtualizado = pegaPost().find((post) => {
        return post.id === id;
    })
    postAtualizado.content = novoConteudo
}
atualizaContentPost(1, 'Novo conteúdo do tweet')

//console.log(miniTwitter.posts)

//DELETE

function apagaPost(id){
    const listaAtualizada = pegaPost().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = listaAtualizada;
}

apagaPost(2)