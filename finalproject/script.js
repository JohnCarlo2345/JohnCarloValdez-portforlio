document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            renderSkills(data.skills);
            renderEducation(data.education);
        })
        .catch(err => console.log("Using HTML content — works fine"));

    function renderSkills(skills) {
        const container = document.getElementById('skills-container');
        container.innerHTML = '';
        skills.forEach(skill => {
            const p = document.createElement('p');
            p.textContent = skill;
            container.appendChild(p);
        });
    }

    function renderEducation(education) {
        const container = document.getElementById('education-container');
        container.innerHTML = '';
        education.forEach(item => {
            const entry = document.createElement('div');
            entry.className = 'timeline-entry';
            entry.innerHTML = `
                <h3>${item.institution}</h3>
                <p><strong>${item.degree}</strong> — ${item.period}</p>
                <p>${item.description}</p>
            `;
            container.appendChild(entry);
        });
    }
});

