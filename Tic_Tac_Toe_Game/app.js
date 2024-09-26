let boxBtn = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;

let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");

// ------------------------------------------------------------------------------------------

const winingPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// ------------------------------------------------------------------------------------------

boxBtn.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    checkWinner();
    box.disabled = true;
  });
});

// ------------------------------------------------------------------------------------------

const checkWinner = () => {
  for (let pattern of winingPattern) {
    let posn1Val = boxBtn[pattern[0]].innerText;
    let posn2Val = boxBtn[pattern[1]].innerText;
    let posn3Val = boxBtn[pattern[2]].innerText;

    if (posn1Val != "" && posn2Val != "" && posn3Val != "") {
      if (posn1Val === posn2Val && posn2Val === posn3Val) {
        showWinner(posn1Val);
      }
    }
  }
};

// ------------------------------------------------------------------------------------------

const showWinner = (winner) => {
  msg.innerText = `Congratulations,Winner Is : ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBox();
};

// ------------------------------------------------------------------------------------------

const disabledBox = () => {
  for (let box of boxBtn) {
    box.disabled = true;
  }
};

const enabledBox = () => {
  for (let box of boxBtn) {
    box.disabled = false;
    box.innerText = "";
  }
};

// ------------------------------------------------------------------------------------------

const resetGame = () => {
  turnO = true;
  count = 0;
  enabledBox();
  msgContainer.classList.add("hide");
};

// ------------------------------------------------------------------------------------------

resetBtn.addEventListener("click", resetGame);

// ------------------------------------------------------------------------------------------

newGameBtn.addEventListener("click", resetGame);


/* --------------------------------------------END-----------------------------------------


Steps Followed

Step-1) -------->      CLick Button Functionality
              
Step-2) -------->      Check Winner Functionality
              
Step-3) -------->      Show Winner Functionality  And Last
              
Step-4) -------->      Reset Game  Functionality


-----------------------------------------------------------------------------------------*/