function switchModule(moduleNumber, event) {
    document.querySelectorAll('.module-content').forEach(m => {
        m.style.display = 'none';
        m.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    const activeModule = document.getElementById('module-' + moduleNumber);
    if (activeModule) {
        activeModule.style.display = 'block';
        activeModule.classList.add('active');
    }
    if (event) {
        event.currentTarget.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleBox(id) {
    const box = document.getElementById(id);
    if (!box) return;
    box.style.display = (box.style.display === 'none' || box.style.display === '') ? 'block' : 'none';
}

function checkEvaluation(evalId) {
    const input = document.getElementById('user-ans-' + evalId);
    const corrBox = document.getElementById('eval-corr-' + evalId);
    if (!input || input.value.trim() === '') {
        alert('Veuillez d\'abord écrire votre réponse !');
        return;
    }
    corrBox.style.display = 'block';
    corrBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
