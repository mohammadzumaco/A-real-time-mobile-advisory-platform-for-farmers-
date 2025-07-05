function getAdvice() {
    const question = document.getElementById('question').value;
    const response = document.getElementById('response');

    if (question.trim() === "") {
        response.innerHTML = "<p>Please ask a valid question!</p>";
        return;
    }


    response.innerHTML = `<p><strong>Advice:</strong> Based on your question, here is some advice: [Sample AI Response]</p>`;
}
