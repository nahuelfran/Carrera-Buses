function startRace() {
    const bus1 = document.getElementById('bus1');
    const bus2 = document.getElementById('bus2');
    const winner = document.getElementById('winner');
    const button = document.getElementById('startButton');
    let pos1 = 0;
    let pos2 = 0;
    winner.textContent = '';

    button.style.display = 'none';

    const interval = setInterval(() => {
        pos1 += Math.random() * 5;
        pos2 += Math.random() * 5;
        bus1.style.left = pos1 + 'px';
        bus2.style.left = pos2 + 'px';

        if (pos1 >= window.innerWidth - 120 || pos2 >= window.innerWidth - 120) {
            clearInterval(interval);
            if (pos1 >= window.innerWidth - 120) {
                winner.textContent = '¡GANÓ RED BULL!';
                winner.style.color = '#00ff00';
                button.style.display = 'block';
            } else {
                winner.textContent = '¡GANÓ MONSTER!';
                winner.style.color = '#00ff00';
                button.style.display = 'block';
            }
        }
    }, 50);
   
}

