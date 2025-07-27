  // Mengambil elemen tombol post, input pertanyaan, dan container list pertanyaan dari DOM
  const postBtn = document.getElementById("post-question");
  const questionInput = document.getElementById("question-input");
  const questionList = document.getElementById("question-list");

  const dummyQuestions = [
    "Apa tips belajar coding untuk pemula?",
    "Kenapa langit berwarna biru?",
    "Gimana cara mulai bikin website dari nol?",
    "Apa perbedaan antara frontend dan backend?",
    "Bagaimana caranya tetap konsisten belajar setiap hari?"
  ];

  function renderQuestion(text) {
    const questionCard = document.createElement("div");
    questionCard.classList.add("question-card");
    questionCard.innerHTML = `
      <p>${text}</p>
      <small><i>Belum ada jawaban</i></small>
    `;
    questionList.prepend(questionCard);
  }

  dummyQuestions.reverse().forEach(q => renderQuestion(q));

  postBtn.addEventListener("click", () => {
    const questionText = questionInput.value.trim();
    if (questionText === "") return;
    renderQuestion(questionText);
    questionInput.value = "";
  });
  