// const posts =[
//     {title:"post1",body:"This is post 1 "},
//     {title:"post2",body:"This is post 2 "}
// ]

// const user ={
//     Name: 'prajwal',
//     lastUserActivity:new Date().getTime()
// }

// function getPosts(){
//     setTimeout(()=>{
//        let output ='';
//        posts.forEach((post)=>{
//         output=output+`<li>${post.title}</li>`
//        })
//        document.body.innerHTML=output;
//     },1000)
// }


// function createPost(post){
//    return new  Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        posts.push(post);
//        resolve();
//     },1000)
//    })
// }

// function updateLastUserActivity(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             user.lastUserActivity= new Date().getTime();
//          resolve();
//         },1000)
//     })
// }

// function deleteLastPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const deletedPost = posts.pop();
//             if (deletedPost) {
//                 resolve(deletedPost);
//             } else {
//                 reject("No posts to delete");
//             }
//         }, 1000);
//     });
// }

// Promise.all([createPost({title:'post 3',body:'This is post 3'})])
//   .then((res)=>{
//     console.log(user.lastUserActivity);
//     console.log(posts);
//       deleteLastPost()
//         .then((res)=>{
//             console.log(posts);
//         })
//   })



// createPost( {title:"post2",body:"This is post 2 "})
//   .then((res)=>{
//     updateLastUserActivity()
//      .then((res)=>{
//         printPosts(posts);
//      })
//   }) 
// const promise1 = Promise.resolve('Hello');
// const promise2 = 10;
// const promise3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//       res('good');
//     },2000)
// })

// Promise.all([promise1,promise2,promise3])
//    .then((res)=>{
//     console.log(res);
//    })

console.log('person1 :shows tickets')
console.log('person2 :shows tickets')

const bringTickets = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve('tickets')
    },3000)
})

const getPopcorn = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve('popcorn');
    },1000)
})

const getButter = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('butter');
    },1000)
})

bringTickets
  .then((res)=>{
    console.log('i have the tickets');
    console.log(`person3 : shows ${res}`)
    console.log('we should go in ');
    console.log('i am hungry');
     getPopcorn
        .then((res)=>{
            console.log(`here you go your ${res} `)
               getButter
                 .then((res)=>{
                    console.log(`here is your ${res} on popcorn`)
                 })
        })
  })

  console.log('person4 :shows tickets')
  console.log('person5 :shows tickets')