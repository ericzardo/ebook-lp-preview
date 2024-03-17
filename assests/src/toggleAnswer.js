const toggleAnswer = (question) => {
    const answer = question.nextElementSibling;
  
    question.classList.toggle('active');
    answer.classList.toggle('active');
  
    if (answer.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0';
    }
}

export {toggleAnswer}