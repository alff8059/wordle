let boardRow = 0;
let idx = 0;

const correct = "KAKAO";

const answer = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
};

function appStart() {
  const keyDown = (e) => {
    const key = e.key.toUpperCase();
    const keyCode = e.keyCode;

    if (keyCode >= 65 && keyCode <= 90 && idx < 5) {
      setAnswer(idx, key);

      idx++;
    } else if (keyCode == 13 && idx == 5) {
      checkAnswer();
    } else if (keyCode == 8 && idx > 0) {
      idx--;
      setAnswer(idx, "");
    }
  };
  window.addEventListener("keydown", keyDown);
}

const setAnswer = (idx, val) => {
  answer[idx] = val;
  const targetBox = document.querySelector(
    `.row-${boardRow} > .board-block[data-input='${idx}']`
  );
  targetBox.innerText = val;
  console.log(answer);
};

const checkAnswer = () => {
  let box = "";
  for (let j = 0; j < 5; j++) {
    box = document.querySelector(
      `.row-${boardRow} > .board-block[data-input='${j}']`
    );
    for (let k = 0; k < 5; k++) {
      if (answer[j] == correct[k]) {
        if (j == k) {
          box.setAttribute("style", "background-color:skyblue");
        } else if (!box.getAttribute("style", "background-color:skyblue")) {
          box.setAttribute("style", "background-color:yellow");
        }
      }
    }

    answer[j] = "";
  }

  boardRow++;
  idx = 0;
};

appStart();
