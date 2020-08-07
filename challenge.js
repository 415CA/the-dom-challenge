const counterH1 = document.getElementById('counter');
const minusButton = document.getElementById('-');
const plusButton = document.getElementById('+');
const heartButton = document.getElementById('<3');
const pauseButton = document.getElementById('pause');
const likesUl = document.querySelector('.likes');
const commentList = document.getElementById('list');
const commentForm = document.getElementById('comment-form');
const allButtons = document.getElementsByTagName('button')

let paused = false;
let numberTracker = {}
let interval = updateCounter();

// Increase like count 
const addLike = () => {
  let second = counterH1.innerText
  numberTracker[second] = numberTracker[second] || 0
  numberTracker[second] += 1
  renderLikes()
}

// Convert like event to HTML 
const renderLikes = () => {
  likes.innerHTML = ""
  for (let key in numberTracker) {
    const li = document.createElement("li")
    li.innerText = `${key} has been liked ${numberTracker[key]} times.`
    likesUl.append(li)
  }
}


// Pause Button click event to disable counter
pauseButton.addEventListener('click', (event) => {
  if (paused) {
    paused = !paused;
    clearInterval(interval) = updateCounter
    pauseButton.innerText = 'resume'
  } else {
    clearInterval(interval) = updateCounter
    pauseButton.innerText = 'resume'
  }
  allButtons.forEach((button) => {
    button.id !== 'pause' && (button.disabled = !paused);
  })
});


// Increase counter H1 value
const increaseValue = () => {
  const currentCount = Number(counterH1.innerText);
  counterH1.innerText = currentCount + 1;
};

// Decrease counter H1 value
const decreaseValue = () => {
  const currentCount = Number(counterH1.innerText);
  counterH1.innerText = currentCount - 1;
};

// Plus Button click event to increase counter
plusButton.addEventListener('click', (event) => {
  decreaseValue();
});

// Minus Button click event to increase counter
minusButton.addEventListener('click', (event) => {
  decreaseValue();
});

// Update counter H1 element every second
const updateCounter = () => {
  return setInterval(() => {
    increaseValue();
  }, 1000);
};

// Convert comment input string into HTML
const htmlComment = (userComment) => {
  const createDiv = document.createElement('div');
  createDiv.className = 'new-div';

  const createP = document.createElement('p');
  createP.innerText = `${userComment}`;
  createP.className = 'comment';
  createDiv.append(createP);

  commentList.append(createDiv);
};

// Comment Form Input Handling
commentForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop page from reloading on submit
  const userComment = commentForm.elements[0].value; // Store user input in memory
  htmlComment(userComment); // Convert string to HTML element
});

// Execute when page HTML content loads
document.addEventListener('DOMContentLoaded', (event) => {
  updateCounter();
});
