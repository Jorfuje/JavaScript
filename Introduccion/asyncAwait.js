const fetchPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = ["post1", "post2", "post3"];
      const error = true;

      if (error) {
        reject("Hubo un error al intentar obtener los post");
      } else {
        resolve(post);
      }
    }, 2000);
  });
};

const mostrarPost = async () => {
  try {
    const post = await fetchPost();
    console.log(post);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

mostrarPost();
