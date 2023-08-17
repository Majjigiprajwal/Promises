const posts =[
    {title:"post1",body:"This is post 1 "},
    {title:"post2",body:"This is post 2 "}
]

const user ={
    Name: 'prajwal',
    lastUserActivity:new Date().getTime()
}

function getPosts(){
    setTimeout(()=>{
       let output ='';
       posts.forEach((post)=>{
        output=output+`<li>${post.title}</li>`
       })
       document.body.innerHTML=output;
    },1000)
}


function createPost(post){
   return new  Promise((resolve,reject)=>{
    setTimeout(()=>{
       posts.push(post);
       resolve(post);
    },1000)
   })
}

function updateLastUserActivity(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastUserActivity= new Date().getTime();
         resolve();
        },1000)
    })
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deletedPost = posts.pop();
            if (deletedPost) {
                resolve(deletedPost);
            } else {
                reject("No posts to delete");
            }
        }, 1000);
    });
}


const socialMedia = async()=>{
    let res1 = await createPost({title:'post3',body:'This is post 3'});
    console.log(res1);
    let res2 = await deleteLastPost();
    console.log(res2);
}

socialMedia();

Promise.all([createPost({title:'post 3',body:'This is post 3'})])
  .then((res)=>{
    console.log(user.lastUserActivity);
    console.log(posts);
      deleteLastPost()
        .then((res)=>{
            console.log(posts);
        })
  })



createPost( {title:"post2",body:"This is post 2 "})
  .then((res)=>{
    updateLastUserActivity()
     .then((res)=>{
        printPosts(posts);
     })
  }) 
const promise1 = Promise.resolve('Hello');
const promise2 = 10;
const promise3 = new Promise((res,rej)=>{
    setTimeout(()=>{
      res('good');
    },2000)
})

Promise.all([promise1,promise2,promise3])
   .then((res)=>{
    console.log(res);
   })

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

const getColdDrinks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('pepsi')
    },1000)
})

const movieTime  = async()=>{
        let res1 = await bringTickets;
        console.log('i have the tickets');
        console.log('we should go in ');
        console.log('i am hungry');
        let res2 = await getPopcorn;
        console.log(`here you go your ${res2} `)
        let res3 = await getButter
        console.log(`here is your ${res3} on popcorn`)
        let res4 = await  getColdDrinks;
        console.log(`And finally you get your ${res4}`)
    
        let result = await Promise.all([bringTickets,getPopcorn,getButter,getColdDrinks])
        console.log(result[0]+" "+ result[1]+" "+result[2]+" "+result[3]);
        return res1;

}

movieTime()
   .then((res)=>{
     console.log(`husband  shows the ${res} and enters the cinema hall`)
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
                      getColdDrinks
                        .then((res)=>[
                            console.log(`And finnaly you get your ${res}`)
                        ])
                 })
        })
  })

  console.log('person4 :shows tickets')
  console.log('person5 :shows tickets')