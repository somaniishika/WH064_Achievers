const questions = [
  {
    question: "What is the primary objective of supervised learning?",
    options: [
      "a) Minimize error between predicted and actual outputs",
      "b) Cluster similar data points together",
      "c) Identify hidden patterns in data",
      "d) Optimize decision-making processes",
    ],
    correctAnswer: 0, // Index of the correct answer
    difficulty: "easy",
  },
  {
    question:
      "Which of the following algorithms is used for classification tasks?",
    options: [
      "a) K-means",
      "b) Linear regression",
      "c) Decision trees",
      "d) PCA (Principal Component Analysis)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
  },
  {
    question:
      "In reinforcement learning, what does the term 'exploitation' refer to?",
    options: [
      "a) Exploring new actions to improve performance",
      "b) Utilizing already known strategies to maximize rewards",
      "c) Balancing exploration and exploitation for optimal learning",
      "d) Learning from past experiences to make better decisions",
    ],
    correctAnswer: 1,
    difficulty: "medium",
  },
  {
    question:
      "What is the purpose of regularization techniques such as L1 and L2 regularization in machine learning?",
    options: [
      "a) To reduce overfitting by penalizing large parameter values",
      "b) To increase model complexity for better performance",
      "c) To speed up convergence during training",
      "d) To address class imbalance in datasets",
    ],
    correctAnswer: 0,
    difficulty: "hard",
  },
  {
    question:
      "What is the difference between generative and discriminative models?",
    options: [
      "a) Generative models learn the joint probability distribution of the input and output variables, while discriminative models learn the conditional probability of the output given the input.",
      "b) Generative models focus on creating new data samples, while discriminative models focus on categorizing data into predefined classes.",
      "c) Generative models are unsupervised, while discriminative models are supervised.",
      "d) Generative models are simpler and faster to train compared to discriminative models.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
  },
  {
    question:
      "What is the significance of the vanishing gradient problem in deep learning?",
    options: [
      "a) It hinders the training of neural networks with many layers by making gradients too small to update earlier layers effectively.",
      "b) It accelerates the training process by quickly converging to a global minimum.",
      "c) It improves the generalization ability of deep neural networks by reducing overfitting.",
      "d) It prevents neural networks from getting stuck in local minima during optimization.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
  },
  {
    question:
      "What is the purpose of the Expectation-Maximization (EM) algorithm in unsupervised learning?",
    options: [
      "a) To maximize the likelihood of the observed data by iteratively updating model parameters.",
      "b) To minimize the error between predicted and actual outputs by adjusting model weights.",
      "c) To cluster data points into distinct groups based on similarities.",
      "d) To select the most relevant features for the given task.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
  },
  {
    question:
      "Which evaluation metric is commonly used for classification tasks when the class distribution is imbalanced?",
    options: ["a) Accuracy", "b) Precision", "c) Recall", "d) F1-score"],
    correctAnswer: 3,
    difficulty: "medium",
  },
  {
    question:
      "What is the purpose of dropout regularization in neural networks?",
    options: [
      "a) To randomly deactivate a fraction of neurons during training to prevent overfitting.",
      "b) To accelerate the training process by removing unnecessary layers from the network.",
      "c) To reduce the computational complexity of neural networks.",
      "d) To ensure that all neurons contribute equally to the final prediction.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
  },
  {
    question:
      "Explain the concept of attention mechanisms in deep learning and provide an example of its application.",
    options: [
      "a) Attention mechanisms enable neural networks to focus on specific parts of the input sequence, improving performance in tasks such as machine translation or image captioning.",
      "b) Attention mechanisms refer to the ability of neural networks to dynamically adjust learning rates based on the importance of individual features.",
      "c) Attention mechanisms are used to regularize deep neural networks by selectively penalizing high-impact parameters.",
      "d) Attention mechanisms control the flow of information between layers in a neural network, optimizing computational efficiency.",
    ],
    correctAnswer: 0,
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
  } else if (score >= 6 && score <= 8) {
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
