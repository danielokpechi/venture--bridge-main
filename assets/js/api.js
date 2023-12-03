// const BASE_URL = 'http://localhost:8000'; // Replace with your API's base URL


const BASE_URL = "https://daniel-okpechi-web-backend.onrender.com"

// Function to fetch all blog posts
async function getAllBlogs() {
  try {
    const response = await axios.get(`${BASE_URL}/blog`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return null;
  }
}

// Function to fetch a specific blog post by ID
async function getBlogById(blogId) {
  try {
    const response = await axios.get(`${BASE_URL}/blog/${blogId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog post by ID:', error);
    return null;
  }
}

// Function to submit a contact form
async function contactUs(formData) {
  try {
    const response = await axios.post(`${BASE_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return null;
  }
}

// Function to fetch all jobs
async function getAllJobs() {
  try {
    const response = await axios.get(`${BASE_URL}/jobs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return null;
  }
}

// Function to fetch a specific job by ID
async function getJobById(jobId) {
  try {
    const response = await axios.get(`${BASE_URL}/jobs/${jobId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job by ID:', error);
    return null;
  }
}

// Function to sign up a user
async function signUp(userData) {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error('Error signing up user:', error);
    return null;
  }
}

// Function to log in with user credentials
async function logIn(loginData) {
  const EMAIL = 'admin@gmail.com'
  const PASSWORD = '12345'

  const {email, password} = loginData

  return email == EMAIL && password == PASSWORD;


  // try {
  //   const response = await axios.put(`${BASE_URL}/login`, loginData);

  //   if (response.status != 200) {
  //     return null;
  //   }
  //   return response.data;
  // } catch (error) {
  //   console.error('Error logging in:', error);
  //   alert("Login Failed! Try different credentials!")
  //   return null;
  // }
}


async function postComment(blog_id, commentData) {
  try {
    const response = await axios.post(`${BASE_URL}/blog/${blog_id}/comment`, commentData);

    if (response.status != 200) {
      return null;
    }
    return response.data;
  } catch (error) {
    return null;
  }
}


async function getUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users`);

    if (response.status != 200) {
      return null;
    }
    return response.data;
  } catch (error) {
    return null;
  }
}


async function acceptUser(user_id) {
  try {
    const response = await axios.put(`${BASE_URL}/users/${user_id}/accept`);

    if (response.status != 200) {
      return null;
    }
    return response.data;
  } catch (error) {
    return null;
  }
}


async function deleteUser(user_id) {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${user_id}`);

    if (response.status != 200) {
      return null;
    }
    return response.data;
  } catch (error) {
    return null;
  }
}

// Example usage:

// getAllBlogs().then((blogs) => {
//   console.log('All blogs:', blogs);
// });

// getBlogById('your-blog-id').then((blog) => {
//   console.log('Blog by ID:', blog);
// });

// contactUs({ name: 'John Doe', email: 'john@example.com', comment: 'Test comment' });

// getAllJobs().then((jobs) => {
//   console.log('All jobs:', jobs);
// });

// getJobById('your-job-id').then((job) => {
//   console.log('Job by ID:', job);
// });

// signUp({ username: 'example_user', password: 'example_password' }).then((user) => {
//   console.log('Signed up user:', user);
// });

// logIn({ username: 'example_user', password: 'example_password' }).then((loggedInUser) => {
//   console.log('Logged in user:', loggedInUser);
// });
