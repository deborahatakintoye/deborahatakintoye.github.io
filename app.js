document.getElementById('search-bar').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    let sections = document.querySelectorAll('.nav-section');

    sections.forEach(section => {
        let sectionTitle = section.querySelector('h2').innerText.toLowerCase();
        let links = section.querySelectorAll('ul li');
        let found = false;

        if (sectionTitle.includes(searchTerm)) {
            section.style.display = 'block';
            links.forEach(link => link.style.display = 'block'); 
        } else {
            links.forEach(link => {
                let text = link.innerText.toLowerCase();
                if (text.includes(searchTerm)) {
                    link.style.display = 'block';
                    found = true; 
                } else {
                    link.style.display = 'none';
                }
            });

            if (found) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        }
    });
});
