document.getElementById('skillsList').addEventListener('click', function (e) {
    if (e.target.classList.contains('skill')) {
        alert('Has seleccionado: ' + e.target.textContent);
    }
});

const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            alert('Has seleccionado: ' + this.textContent);
        }
    });
});