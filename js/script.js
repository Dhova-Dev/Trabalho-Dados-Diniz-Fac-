document.getElementById('dice-roll').addEventListener('click', function() {
    var dice = document.getElementById('dice-selector').value;
    var result = Math.floor(Math.random() * dice) + 1;
    document.getElementById('result').innerText = 'Resultado : ' + result;
});


const themes = ['light', 'dark', 'high-contrast'];
const themeEmojis = ['🌞', '🌜', '⚫'];
let currentThemeIndex = 0;

document.getElementById('theme').addEventListener('click', function() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.className = themes[currentThemeIndex];
    this.innerText = themeEmojis[currentThemeIndex] + ' Mudar Tema';
});
