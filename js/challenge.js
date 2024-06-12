// Counter
var counter = document.getElementById("counter");
var interval;

function startCounter() {
  interval = setInterval(function () {
    counter.innerText = parseInt(counter.innerText) + 1;
  }, 1000);
}

// Plus Button
var plus = document.getElementById("plus");
plus.addEventListener("click", function () {
  counter.innerText = parseInt(counter.innerText) + 1;
});

// Minus Button
var minus = document.getElementById("minus");
minus.addEventListener("click", function () {
  counter.innerText = parseInt(counter.innerText) - 1;
});

// Like Button
var like = document.getElementById("heart");
var likesList = document.querySelector(".likes");

like.addEventListener("click", function () {
  var currentCount = parseInt(counter.innerText);

  var existingLike = likesList.querySelector('[data-num="' + currentCount + '"]');
  if (existingLike) {
    var likeCount = parseInt(existingLike.querySelector("span").innerText);
    existingLike.innerHTML = currentCount + " has been liked <span>" + (likeCount + 1) + "</span> times";
  } else {
    var newLike = document.createElement("li");
    newLike.setAttribute("data-num", currentCount);
    newLike.innerHTML = currentCount + " has been liked <span>1</span> time";
    likesList.appendChild(newLike);
  }
});

// Pause Button
var pause = document.getElementById("pause");
pause.addEventListener("click", function () {
  if (pause.innerText === "pause") {
    clearInterval(interval);
    pause.innerText = "resume";
    plus.disabled = true;
    minus.disabled = true;
    like.disabled = true;
  } else {
    startCounter();
    pause.innerText = "pause";
    plus.disabled = false;
    minus.disabled = false;
    like.disabled = false;
  }
});

// Comment Form
var commentForm = document.getElementById("comment-form");
var commentInput = document.getElementById("comment-input");
var commentsList = document.getElementById("list");

commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var commentText = commentInput.value.trim();
  if (commentText !== "") {
    var newComment = document.createElement("p");
    newComment.innerText = commentText;
    commentsList.appendChild(newComment);
    commentInput.value = "";
  }
});

// Start the counter
startCounter();