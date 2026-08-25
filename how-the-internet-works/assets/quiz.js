let answered = 0, right = 0;
document.querySelectorAll('.q').forEach(q => {
  const want = +q.dataset.answer, fb = q.querySelector('.fb');
  q.querySelectorAll('button').forEach((b, i) => b.addEventListener('click', () => {
    if (q.dataset.done) return;
    q.dataset.done = 1; answered++;
    if (i === want) { b.classList.add('correct'); fb.textContent = 'Correct.'; fb.className = 'fb ok'; right++; }
    else {
      b.classList.add('wrong');
      q.querySelectorAll('button')[want].classList.add('correct');
      fb.textContent = 'Not quite — correct answer highlighted. Re-read that section above.';
      fb.className = 'fb no';
    }
    if (answered === document.querySelectorAll('.q').length)
      document.getElementById('score').textContent =
        `Score: ${right}/${answered}` + (right === answered ? ' — now do both spoken drills.' : ' — review what you missed, then do the spoken drills.');
  }));
});