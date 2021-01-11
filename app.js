/*
quiz = [
  {
    question: "風、1、羊、世、次にくる文字は？",
    answers: ["ダ", "ス", "ノ", "ム",],
    correct: "ノ",
    description: "ノ（村上春樹の長編の頭文字を発表順を並べる。\n「風の歌を聴け」「1973年のピンボール」「羊をめぐる冒険」「世界の終りとハードボイルド･ワンダーランド」そして「ノルウェイの森」。）"
  },
  {
    question: "GAFAのなかで最も早く創業したのは？",
    answers: ["Google", "Amazon", "Facebook", "Apple"],
    correct: "Apple",
    description: "Apple（1976年4月1日創業）"
  },
  {
    question: "次のうち、売上記録がギネスブックに載っているものはどれか。",
    answers: ["NARUTO", "ONE PIECE", "ドラゴンボール", "SLAM DUNK"],
    correct: "ONE PIECE",
    description: "ONE PIECE（ひとりの作家によるコミックで売上世界一。）"
  }
]
;*/


$.getJSON('quiz.json', function (data) {
  const quiz = data; //JSONデータをquizに代入
  const quizLength = quiz.length; //クイズの問数
  let quizIndex = 0; //何問目か

  let score = 0;  //正解数

  const $question = document.getElementById("question"); //問題文

  const $button = document.getElementsByTagName('button'); //選択ボタン
  const buttonLength = $button.length; //選択ボタンの数

//問題文＆選択肢の表示
  function setupQuiz() {
    $question.textContent = quiz[quizIndex].question; //$questionのテキストをquizのquizIndex番目のquestionに書き換え
    let buttonIndex = 0; //何番目の選択肢か
    while (buttonIndex < buttonLength) { //何番目のボタンかの数がボタンの個数の数より少ないとき
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]; //ボタンのテキストを変更
      buttonIndex++; //何番目の選択肢かの変数を1増やす
    }
  }

  setupQuiz();

//ボタンをクリックしたら正誤判定
  function clickHandler(e) {
    if (quiz[quizIndex].correct === e.target.textContent) { //もし正解と解答が同じなら
      alert('正解！'); // 「正解！」と表示
      score++; // scoreを1増やす
    } else { //もしそうでないなら
      alert('不正解...'); //「不正解...」と表示
    }

    alert(quiz[quizIndex].description);

    quizIndex++;

    if (quizIndex < quizLength) { //問題数がまだあれば
      setupQuiz();
    } else { //問題数がもうなければ
      alert(`終了！\n${quizLength}問中、あなたは${score}問正解しました！`) //正解数を表示
    }
  }

  let handlerIndex = 0;
  while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', function (e) {
      clickHandler(e);
    })
    handlerIndex++;
  }
})