document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
function getText(){
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err))
}
function getUsers(){
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h3>The users are:</h3>';
        data.forEach(function(user){
            output +=`
            <ul>
            <li>Id : ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email : ${user.email}</li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err))
}
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h3>The 100 Posts are:</h3>';
        data.forEach(function(user){
            output +=`
            <ul>
            <li>Id : ${user.id}</li>
            <li>Title: ${user.title}</li>
            <li>Post : ${user.body}</li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err))

}