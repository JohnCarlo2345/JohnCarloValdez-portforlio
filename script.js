document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            renderSkills(data.skills);
            renderProjects(data.projects);
            renderEducation(data.education);
        })
        .catch(err => {
            console.log("Using HTML content — works fine");
        });

    function renderSkills(skills) {
        const container = document.getElementById('skills-container');
        container.innerHTML = '';
        skills.forEach(skill => {
            const p = document.createElement('p');
            p.textContent = skill;
            container.appendChild(p);
        });
    }

    function renderProjects(projects) {
        const container = document.getElementById('projects-container');
        container.innerHTML = '';
        projects.forEach(item => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p><strong>Created with:</strong> ${item.tools}</p>
                <p>${item.desc}</p>
            `;
            container.appendChild(card);
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
