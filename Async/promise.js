const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// function createPost(post){
function createPost(post) 
{
   return new Promise ((resolve, reject) =>{
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if(!error)
      {
        resolve();
      }
      else
      {
        reject('Error: Somrthing went wrong');
      }
    }, 2000)
});
}
// createPost({title: 'Post Three', body: 'This is post three'})
// .then(getPosts);


// Async / Await


// async function init() {
//     await createPost({title: 'Post Three', body: 'This is post three'});
//     getPosts();
// }
// init();


// Asunc / Await / Fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data);
}
fetchUsers();


// Promise.all
// const Promise1 = Promise.resolve('Hello ');
// const Promise2 = 10;
// const Promise3 = new Promise((resolve, reject ) =>
// setTimeout(resolve, 2000, 'Goodbye')
// );
// const Promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => 
// res.json()
// );
// Promise.all([Promise1, Promise2, Promise3, Promise4])
// .then(values => 
//     console.log(values)
//     );
