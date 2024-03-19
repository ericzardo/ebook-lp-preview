import { toggleAnswer } from "./assests/src/toggleAnswer.js";
import { updateTimer } from "./assests/src/updateTimer.js";
import { updateForIOS } from "./assests/src/updateForIOS.js";

document.addEventListener('DOMContentLoaded', function () {

  const offerTimerSeconds = 60 * 13 + 37;
  updateTimer(offerTimerSeconds);

  window.addEventListener('resize', updateForIOS);
  updateForIOS()

  document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
      toggleAnswer(question);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      // else {
      //   entry.target.classList.remove("show");
      // }
    })
  })

  const hiddenLeftElements = document.querySelectorAll(".hidden-left");
  hiddenLeftElements.forEach((el) => observer.observe(el));

  const hiddenRightElements = document.querySelectorAll(".hidden-right");
  hiddenRightElements.forEach((el) => observer.observe(el));

  const hiddenBottomElements = document.querySelectorAll(".hidden-bottom");
  hiddenBottomElements.forEach((el) => observer.observe(el));

  const hiddenTopElements = document.querySelectorAll(".hidden-top");
  hiddenTopElements.forEach((el) => observer.observe(el));
  
});

