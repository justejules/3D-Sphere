document.getElementById('button1').classList.add('active');

function loadSite(siteURL) {
    // Désélectionner tous les boutons
    document.getElementById('button1').classList.remove('active');
    document.getElementById('button2').classList.remove('active');

    // Sélectionner le bouton du site actif
    document.querySelector(`a[href="${siteURL}"]`).classList.add('active');

    // Charger le contenu du site
    fetch(siteURL)
        .then(response => response.text())
        .then(data => {
            document.getElementById('site-container').innerHTML = data;
        })
        .catch(error => console.error('Erreur de chargement du contenu :', error));
}

// Charger le contenu initial (Site 1)
loadSite('siteA.html');
