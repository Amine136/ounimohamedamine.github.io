
document.addEventListener('DOMContentLoaded', () => {
  fetch('C:\Users\HP\Desktop\projet\ounimohamedamine.github.io-main\ounimohamedamine.github.io-main\data.json')
    .then(response => response.json())
    .then(data => {
      renderEducation(data.education);
      renderCertifications(data.certifications);
      renderProjects(data.projects);
    })
    .catch(error => console.error('Error loading data:', error));
});

function renderEducation(education) {
  const educationList = document.getElementById('education-list');
  education.forEach(item => {
    const educationItem = document.createElement('div');
    educationItem.className = 'education-item';
    educationItem.innerHTML = `
      <h3>${item.degree} (${item.year})</h3>
      <p>${item.institution}</p>
    `;
    educationList.appendChild(educationItem);
  });
}

function renderCertifications(certifications) {
  const certificationList = document.getElementById('certification-list');
  certifications.forEach(cert => {
    const certificationItem = document.createElement('div');
    certificationItem.className = 'certification-item';
    certificationItem.innerHTML = `
      <h3>${cert.title}</h3>
      <p>${cert.date}</p>
      <a href="${cert.badge_url}" target="_blank">View Badge</a>
    `;
    certificationList.appendChild(certificationItem);
  });
}

function renderProjects(projects) {
  const projectsList = document.getElementById('projects-list');
  projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item';
    projectItem.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.github_url}" target="_blank">View on GitHub</a>
    `;
    projectsList.appendChild(projectItem);
  });
}
