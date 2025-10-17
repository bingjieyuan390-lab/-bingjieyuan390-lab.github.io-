var posts=["undefined/4a17b156.html","undefined/140ab620.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };