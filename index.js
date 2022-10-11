
// const Posts = [
//     {
//         title : "Welcome to my Pc 1",
//         body : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis."
//     },

//     {
//         title : "Welcome to my Pc 2",
//         body : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis."
//     },

//     {
//         title : "Welcome to my Pc 3",
//         body : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis."
//     },

//     {
//         title : "Welcome to my Pc 4",
//         body : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis."
//     },

//     {
//         title : "Welcome to my Pc 1",
//         body : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis."
//     },

//     {
//         title : "Welcome to my Pc 2",
//         body : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis."
//     },

//     {
//         title : "Welcome to my Pc 3",
//         body : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis."
//     },

//     {
//         title : "Welcome to my Pc 4",
//         body : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis."
//     },
// ]


/* <div class="post">
<h4 class="Post-title">Welcome to my Pc 1</h4>
<p class="Post-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis.</p>
</div> */



const fecthDAta = async (config)=>{
   try{
    const res = await axios(config);
    return res.data;
   }catch(error){
    throw Error("Data is not Fetched");
   }
   
}




const postsElement = document.querySelector(".posts");

const loadAllData = async ()=>{
    const Posts = await fecthDAta("https://jsonplaceholder.typicode.com/posts");
    Posts.map(post=>{
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h4 class="Post-title">${post.title}</h4>
        <p class="Post-body">${post.body}</p>
        
        `;
        postsElement.appendChild(postElement);
       
    });
}

loadAllData();



