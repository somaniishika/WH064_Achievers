const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "a) Hyper Text Markup Language",
        "b) Hyperlinks and Text Markup Language",
        "c) Home Tool Markup Language",
        "d) Hyper Text Making Links",
      ],
      correctAnswer: 0, // Index of the correct answer
      difficulty: "easy",
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: [
        "a) background-color",
        "b) color",
        "c) font-family",
        "d) text-align",
      ],
      correctAnswer: 1,
      difficulty: "easy",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "a) Creative Style Sheets",
        "b) Computer Style Sheets",
        "c) Cascading Style Sheets",
        "d) Colorful Style Sheets",
      ],
      correctAnswer: 2,
      difficulty: "easy",
    },
    {
      question: "Which of the following is NOT a valid HTML tag?",
      options: ["a)section", "b)header", "c)div", "d)style"],
      correctAnswer: 3,
      difficulty: "medium",
    },
    {
      question: "What does the 'src' attribute in the <img> tag specify?",
      options: [
        "a) The size of the image",
        "b) The alignment of the image",
        "c) The source of the image",
        "d) The alternative text for the image",
      ],
      correctAnswer: 2,
      difficulty: "medium",
    },
    {
      question: "Which of the following is NOT a valid CSS property?",
      options: [
        "a) margin-top",
        "b) padding-left",
        "c) text-width",
        "d) border-bottom",
      ],
      correctAnswer: 2,
      difficulty: "medium",
    },
    {
      question: "What is the purpose of 'display: flex;' in CSS?",
      options: [
        "a) It sets the background color of an element",
        "b) It makes an element visible",
        "c) It enables flexbox layout for an element's children",
        "d) It changes the font size of an element",
      ],
      correctAnswer: 2,
      difficulty: "hard",
    },
    {
      question: "What is the purpose of 'localStorage' in JavaScript?",
      options: [
        "a) To store data in the user's browser with no expiration date",
        "b) To store session data that expires when the browser is closed",
        "c) To store data on the server-side",
        "d) To store data temporarily during script execution",
      ],
      correctAnswer: 0,
      difficulty: "hard",
    },
    {
      question:
        "Which JavaScript method is used to remove the last element from an array?",
      options: ["a) pop()", "b) shift()", "c) slice()", "d) push()"],
      correctAnswer: 0,
      difficulty: "hard",
    },
    {
      question: "What is the purpose of 'event.preventDefault()' in JavaScript?",
      options: [
        "a) To stop the propagation of an event",
        "b) To prevent default browser behavior associated with an event",
        "c) To cancel an asynchronous event",
        "d) To handle errors in event listeners",
      ],
      correctAnswer: 1,
      difficulty: "hard",
    },
  ];
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  const totalQuestions = questions.length;
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestionIndex].question;
  
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";
  
    questions[currentQuestionIndex].options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.innerHTML = `
              <input type="radio" id="option${index}" name="option" value="${index}" />
              <label for="option${index}">${option}</label>
          `;
      optionsElement.appendChild(optionElement);
    });
  }
  
  function checkAnswer() {
    const selectedOptionIndex = parseInt(
      document.querySelector('input[name="option"]:checked').value
    );
    const correctOptionIndex = questions[currentQuestionIndex].correctAnswer;
  
    if (selectedOptionIndex === correctOptionIndex) {
      correctAnswers++;
    }
  
    currentQuestionIndex++;
    updateProgress();
  
    if (currentQuestionIndex < totalQuestions) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  function updateProgress() {
    const progressElement = document.getElementById("progress");
    progressElement.textContent = `Question ${
      currentQuestionIndex + 1
    } of ${totalQuestions}`;
  }
  
  function endQuiz() {
    const quizContainer = document.querySelector(".quiz-container");
    const score = Math.round((correctAnswers / totalQuestions) * 100); // Calculate the score
    let scoreMessage = `You answered ${correctAnswers} out of ${totalQuestions} questions correctly.`;
  
    if (correctAnswers <= 5) {
      scoreMessage +=
        "You are at beginner stage! Do explore our beginner resources. Happy Learning.";
    } else if (correctAnswers > 5 && correctAnswers < 9) {
      scoreMessage +=
        "You are at an intermediate stage! Do explore our intermediate resources. Happy Learning.";
    } else {
      scoreMessage +=
        "You are at an advanced stage! Do explore our advanced resources. Happy Learning.";
    }
  
    quizContainer.innerHTML = `
            <h1>Quiz Completed!</h1>
            <p>${scoreMessage}</p>
            <p>Thanks for participating!</p>
        `;
  }
  
  // Start the quiz
  displayQuestion();
  updateProgress();