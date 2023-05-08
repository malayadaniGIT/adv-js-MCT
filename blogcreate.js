const add = document.getElementById('form2');

add.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const subject = document.getElementById('subject').value;
  const photo = document.getElementById('avatar').value;
  if (title.trim() === '' || subject.trim() === ''||photo.trim() === '' ) {
    alert('Please fill in all fields');
    return;
  }  
  const id = Date.now();
  const post = {title, subject,photo};
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));
  alert('Post added successfully');
  window.location.href = 'homepage.html';
});  
