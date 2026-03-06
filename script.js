let px = 0, py = 0;
const step = 32;

document.addEventListener('keydown', (e) => {
    if (document.getElementById('battle-screen').style.display === 'flex') return;

    if (e.key === 'ArrowUp') py -= step;
    if (e.key === 'ArrowDown') py += step;
    if (e.key === 'ArrowLeft') px -= step;
    if (e.key === 'ArrowRight') px += step;

    const player = document.getElementById('player');
    player.style.top = py + 'px';
    player.style.left = px + 'px';

    checkEncounter();
});

function checkEncounter() {
    // 10%の確率でバトル開始
    if (Math.random() < 0.1) {
        startBattle();
    }
}

function startBattle() {
    const screen = document.getElementById('battle-screen');
    screen.style.display = 'flex';
    document.getElementById('message').innerText = "あ、やせいの ポケモンが とびだしてきた！";
}

function run() {
    document.getElementById('battle-screen').style.display = 'none';
}
