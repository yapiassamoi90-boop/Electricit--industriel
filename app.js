function switchModule(moduleNumber) {
    const modules = document.querySelectorAll('.module-content');
    modules.forEach(m => m.style.display = 'none');
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(b => b.classList.remove('active'));
    const activeModule = document.getElementById('module-' + moduleNumber);
    if (activeModule) { activeModule.style.display = 'block'; }
    event.target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleBox(id) {
    const box = document.getElementById(id);
    if (box) {
        box.style.display = (box.style.display === 'none' || box.style.display === '') ? 'block' : 'none';
    }
}

function checkEvaluation(evalId) {
    const userAns = document.getElementById('user-ans-' + evalId).value.trim();
    const corrBox = document.getElementById('eval-corr-' + evalId);
    if (userAns === '') {
        alert('Veuillez d\'abord écrire votre réponse avant de vérifier !');
        return;
    }
    corrBox.style.display = 'block';
    corrBox.scrollIntoView({ behavior: 'smooth' });
}
