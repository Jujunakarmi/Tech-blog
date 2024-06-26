const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const bio = document.querySelector("#bio-signup").value.trim();

  if(username && email && password && bio){
    const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({username, email, password, bio}),
        headers: {'Content-Type' : 'application/json'},
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    }else{
        alert("Invalid Credentials.!!")
    }
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);