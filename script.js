function addComment(postId) {
  const nameInput = document.getElementById(`name-${postId}`);
  const messageInput = document.getElementById(`message-${postId}`);
  const commentList = document.getElementById(`comment-list-${postId}`);

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (name && message) {
      const comment = document.createElement('div');
      comment.classList.add('comment');
      comment.innerHTML = `<strong>${name}:</strong> <p>${message}</p>`;

      commentList.appendChild(comment);

      // Clear input fields
      nameInput.value = '';
      messageInput.value = '';
  }
}

function searchPosts() {
  const searchTerm = document.getElementById('search-bar').value.toLowerCase();
  const posts = document.querySelectorAll('.blog-post');

  // Get or create the results container
  let resultsContainer = document.getElementById('search-results');
  if (!resultsContainer) {
      resultsContainer = document.createElement('div');
      resultsContainer.id = 'search-results';
      resultsContainer.innerHTML = '<h2>Search Results</h2>';
      document.querySelector('main').insertBefore(resultsContainer, document.querySelector('main').firstChild);
  } else {
      resultsContainer.innerHTML = '<h2>Search Results</h2>'; // Clear previous results
  }

  let resultsFound = false;
  
  posts.forEach(post => {
      const title = post.querySelector('h2').textContent.toLowerCase();
      const content = post.querySelector('p').textContent.toLowerCase();
      
      // Check if the post matches the search term
      if (title.includes(searchTerm) || content.includes(searchTerm)) {
          resultsFound = true;
          
          // Create a new element for the post to avoid duplication
          const postElement = document.createElement('div');
          postElement.classList.add('blog-post');
          postElement.innerHTML = post.innerHTML;
          // Optionally clear the ID attribute of the cloned post to avoid potential conflicts
          postElement.id = '';
          resultsContainer.appendChild(postElement);
      }
  });

  if (!resultsFound) {
      resultsContainer.innerHTML = '<h2>No results found</h2>';
  }
}



function filterPosts(category) {
  const posts = document.querySelectorAll('.blog-post');

  posts.forEach(post => {
      if (post.dataset.category === category || category === 'all') {
          post.style.display = '';
      } else {
          post.style.display = 'none';
      }
  });
}
function goHome() {
  window.location.href = 'index.html';
}