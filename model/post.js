module.exports = {
    posts: [
        {
            id: 'Fsdasda',
            title: 'Teste Mural',
            description: 'Descrição teste'
        },
    ],

    getAll() {
        return this.posts;
    },
    newPost(title, description) {

        this.posts.push({ id: generationID(), title, description }); 

    },
    deletePost(id){
    }

}

function generationID() {

    return Math.random().toString(36).slice(2, 9);
}