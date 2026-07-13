  // MOTIVATION (Starts)
  
  function motive() {
    let quotes = ["In the middle of every difficulty lies opportunity.",
"Success is built one small step at a time.",
"Discipline will take you where motivation cannot.",
"Dream big, start small, and stay consistent.",
"Your future is created by what you do today.",
"Progress is better than perfection.",
"Every expert was once a beginner.",
"Stay patient, your hard work will pay off.",
"Failure is proof that you are trying.",
"Believe in yourself even when no one else does.",
"Great things take time to build.",
"Your only competition is who you were yesterday.",
"Don't stop until you're proud.",
"Small daily improvements lead to remarkable results.",
"Success starts with self-belief.",
"The best investment is in yourself.",
"Consistency beats talent when talent doesn't work.",
"Turn your dreams into plans and your plans into action.",
"You are stronger than your excuses.",
"Focus on progress, not perfection.",
"Hard work always leaves a mark.",
"Every day is a fresh opportunity to grow.",
"Difficult roads often lead to beautiful destinations.",
"Stay hungry for knowledge.",
"Your attitude determines your direction.",
"Don't wait for opportunity, create it.",
"The only limit is the one you accept.",
"Keep learning, keep growing, keep winning.",
"Your actions define your future.",
"Be fearless in the pursuit of your goals.",
"Nothing changes unless you do.",
"Success is earned, not given.",
"Stay committed even when it's difficult.",
"Every challenge is a chance to improve.",
"Make today count.",
"Confidence comes from preparation.",
"Push yourself because no one else can do it for you.",
"The journey is just as important as the destination.",
"Never let temporary failures become permanent excuses.",
"Work in silence and let your results speak.",
"Be proud of how far you've come.",
"Every sunrise is a new beginning.",
"Your potential is greater than your fears.",
"Success begins at the end of your comfort zone.",
"One decision can change your life.",
"Be consistent, not perfect.",
"Growth starts when comfort ends.",
"The harder you work, the luckier you become.",
"Keep moving forward, no matter how slow.",
"Your best chapter is still ahead."];
  let i = Math.floor(Math.random()*quotes.length);
  document.getElementById("motivation").textContent = quotes[i];
  }
  motive();
  setInterval(motive, 5000);

  // MOTIVATION (ends)


  // TO HANDLE THE SELECT DROPDOWN MENU (starts)
  
  function resetWeb(opt) {
    let home = document.getElementById("home");
    let galry = document.getElementById("gallery");
    let video = document.getElementById("video");
    let audio = document.getElementById("code");
    
    let pages = document.querySelectorAll("section");
    pages.forEach(function(page) {
      page.style.display = "none";
    });
    
    if (opt === "home") {
      home.style.display = "block";
    }
    else if (opt === "gallery") {
      galry.style.display = "block";
    }
    else if (opt === "video") {
      video.style.display = "block";    }
    else if (opt === "code") {
      audio.style.display = "block";
    }
  }
    
  let opted = document.getElementById("menu").value;
  resetWeb(opted);
  document.getElementById("menu").addEventListener("click", function() {
    opted=document.getElementById("menu").value;
    resetWeb(opted);
  });

// TO HANDLE THE SELECT DROPDOWN MENU (ends)

// Number Guessing Game (starts)

    // Resetting The Game
    
    let count=0;
    let max;
    let rand;
    document.getElementById("reset").addEventListener("click", () => {
      count = 0;
      let level = document.getElementById("level").value;
      max = think(level);
      let user = document.getElementById("input").value = "";
      document.getElementById("help").textContent = `Thinking between 1 and ${max}`;
      document.getElementById("result").textContent = "";
      rand = Math.floor(Math.random()*max)+1;
    });
    
    // Level changing settings
    
    document.getElementById("level").addEventListener("change", function () {
      document.getElementById("reset").click();
    });
    
    
   // Thinking The Number
   
   function think(l) {
    let bot;
    switch (l) {
      case "Easy":
        bot = 100;
        break;
      case "Intermediate":
        bot = 1000;
        break;
      case "Hard":
        bot = 10000;
        break;
      case "Expert":
        bot = 50000;
        break;
      case "God Level":
        bot = 100000;
      break;
    }
    return bot;
   }
   
   // Gameplay Function
   
    function guessGame(c,m,r,u) {
      
      if (Number(u)<=0 || u==="" || isNaN(u) || u.trim()==="") {
        return document.getElementById("result").textContent = "Invalid Input";
      }
      let a = Number(u);
      document.getElementById("help").textContent = `I am thinking between 1 and ${m}.`;
      if (a>r) {
        document.getElementById("result").textContent = "Think Lower";
      }
      else if (a<r) {
        document.getElementById("result").textContent = "Think Higher";
      }
      else if (a==r) {
        document.getElementById("result").textContent = `Congratulations, you completed this game in ${c} attempts`;
      }
      else {
        document.getElementById("result").textContent = "Error";
      }
    }
    
    
    // Gameplay Guesses
    
    document.getElementById("guess").addEventListener("click", function () {
      const user = document.getElementById("input").value;
      count++;
      guessGame(count, max, rand, user);
    });
    
    // Automatically resets the page after being loaded
    
    document.getElementById("reset").click();
    
   // Number Guessing Game (ends)
    
    
   // Rock Paper and Scissors Game (starts)
    
function game() {
  let obj = ["ROCK", "PAPER", "SCISSOR"];
  let user2 = document.getElementById("input2").value.toUpperCase().trim();
  let bot = Math.floor(Math.random() * obj.length);
  if ((user2 === obj[0] && bot === 2) || (user2 === obj[1] && bot === 0) || (user2 === obj[2] && bot === 1)) {
    document.getElementById("result2").innerHTML = `You: ${user2} <br />Bot: ${obj[bot]} <br />Oh! You caught me. <br /><br />`;
  }
  else if (user2 === obj[bot]) {
    document.getElementById("result2").innerHTML = `You: ${user2} <br />Bot: ${obj[bot]} <br />Oh! it is a tie.<br /><br />`;
  }
  else {
    document.getElementById("result2").innerHTML = `You: ${user2} <br />Bot: ${obj[bot]} <br />Hurray! I defeated you. <br /><br />`;
  }
}

document.getElementById("btn").addEventListener("click", function() {
  game();
});
document.getElementById("input2").addEventListener("keydown", function(e) {
  if (e.key === 'Enter') {
    game();
  }
});

   // Rock Paper and Scissors Game (ends)
   
 // Arjuna (starts)
 

 document.getElementById("arjuna").addEventListener("click", () =>  {
   alert("Sorry, but we are improving it to work across all platforms.");
 }
 );
 
  // Arjuna (ends)
  
  
  // Gallery (starts)
  
  // Gallery Navigation (Starts)
  
  const imgLikes = document.querySelectorAll(".imgLike");
  imgLikes.forEach((like) => {
    like.addEventListener("click", function() {
      this.textContent = "❤️ Liked";
    });
  });