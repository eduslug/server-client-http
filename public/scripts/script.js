document.addEventListener('DOMContentLoaded', () => {
    updatePost()
})

function updatePost() {

    fetch("http://192.168.0.5:3000/api/all").then(res => {
        return res.json()
    }).then(json => {

        let postElements = '';

        let posts = JSON.parse(json);
        posts.forEach((post) => {
            let postElement = `<div class="card mb-4 card border-dark text-bg-dark" id=${post.id}>
                                     <div class="card-header">
                                           <h5 class="card-title">${post.title}</h5>
                                     </div>
                                     <div class="card-body">
                                           <div class="card-text">${post.description}</div>
                                     </div>
                                </div>`
            postElements += postElement;
        })

        document.getElementById('post').innerHTML = postElements;
    })
}
function newPost() {

    title = document.getElementById('title').value;
    description = document.getElementById('desc').value;

    let post = { description, title }

    const options = {
        method: 'post',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }
    fetch("http://192.168.0.5:3000/api/new", options).then(res => {
        
        document.getElementById('title').value = "";
        document.getElementById('desc').value = "";
        updatePost()
        console.log(res)
    })
}
