const romanToArabic = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
  // Adicione mais números conforme necessário
};

function convertToArabic(roman) {
  let arabic = 0;
  let current, previous = 0;
  roman = roman.toUpperCase();
  
  for (let i = roman.length - 1; i >= 0; i--) {
    current = romanToArabic[roman.charAt(i)];
    if (current < previous) {
      arabic -= current;
    } else {
      arabic += current;
    }
    previous = current;
  }
  
  return arabic;
}

function generateRandomRoman() {
  const arabicToRoman = {
    1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L',
    90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
  };
  let number = Math.floor(Math.random() * 4999) + 1;
  let roman = '';
  const keys = Object.keys(arabicToRoman).reverse();

  for (const key of keys) {
    while (number >= parseInt(key)) {
      roman += arabicToRoman[key];
      number -= parseInt(key);
    }
  }

  return roman;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const correctAnswer = convertToArabic(document.getElementById('question').textContent);
  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = 'Correto!';
  } else {
    document.getElementById('result').textContent = 'Incorreto. Tente novamente.';
  }
}

// Definir um número romano aleatório quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('question').textContent = generateRandomRoman();
});

function generateNewQuestion() {
  // Gera um novo número romano e atualiza a pergunta
  var newRoman = generateRandomRoman();
  document.getElementById('question').textContent = newRoman;
  
  // Limpa o campo de resposta e a mensagem de resultado
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
}

// Adicione um ouvinte de evento para o botão de nova pergunta
document.getElementById('new-question-btn').addEventListener('click', generateNewQuestion);

// Certifique-se de que o botão no seu HTML tenha o ID 'new-question-btn'
