document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Trip Out",
            description: "A browser-based music visualizer written with ChatGPT",
            imageUrl: "backgrounds/trip-out.jpg",
            url: "https://tinycado.com/tripout"
        },
        {
            title: "Smoosh",
            description: "Relaxing mouse/finger guided color-changer",
            imageUrl: "backgrounds/smoosh.jpg",
            url: "https://tinycado.com/smoosh"
        },
        {
            title: "Smoosh 2: Son of Smoosh",
            description: "Relaxing mouse/finger guided color-changer (2)",
            imageUrl: "backgrounds/smoosh-2.jpg",
            url: "https://tinycado.com/smoosh-2"
        }
    ];

    const gallery = document.querySelector('.masonic-gallery');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundImage = `url('${project.imageUrl}')`;

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" class="go-button">Go</a>
        `;

        gallery.appendChild(card);
    });
});
