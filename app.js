// script.js - ElecPro V2 - Corrigé

// 1. PWA - Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('SW ok'))
    .catch(e => console.log('SW fail', e));
}

// 2. Installation PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Tu peux afficher un bouton Installer ici si tu veux
});

async function installerApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(outcome);
    deferredPrompt = null;
  }
}

// 3. VÉRIFICATION - Version tolérante (corrige ton bug)
function verifier() {
  const champ = document.querySelector('textarea, input');
  if (!champ) return alert("Champ introuvable");
  
  let texte = champ.value.toLowerCase().trim();
  // On remplace la virgule par un point et on garde que les chiffres
  texte = texte.replace(',', '.');
  
  // Extrait tous les nombres
  const nombres = texte.match(/[\d.]+/g);
  if (!nombres) {
    return alert("❌ Tape ta réponse. Indice: R = U / I");
  }
  
  // Le dernier nombre tapé est la réponse (1200 dans ton cas)
  const reponse = parseFloat(nombres[nombres.length - 1]);
  
  // Tolérance: 1190 à 1210 accepté
  if (reponse >= 1190 && reponse <= 1210) {
    alert("✅ BRAVO !\n\nR = U / I = 24 / 0,02 = 1200 Ω\n\nModule validé !");
    localStorage.setItem('module1', 'valide');
    champ.style.border = "2px solid #22c55e";
    // Débloque module suivant si tu en as
    // document.getElementById('module2').classList.remove('locked');
  } else {
    alert(`❌ Tu as mis ${reponse} Ω\n\nLa bonne formule est R = U / I\nR = 24 / 0,02 = 1200 Ω\n\nRéessaie !`);
    champ.style.border = "2px solid #ef4444";
  }
}

// 4. Mode hors-ligne
window.addEventListener('online', () => console.log('En ligne'));
window.addEventListener('offline', () => console.log('Hors-ligne - app toujours utilisable'));
