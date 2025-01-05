// Genre filter functionality
document.getElementById('genreSelect').addEventListener('change', function() {
    const selectedFilter = this.value.toLowerCase();
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        const movieFilters = movie.dataset.filter.toLowerCase().split(',').map(filter => filter.trim());

        if (selectedFilter === 'all' || movieFilters.includes(selectedFilter)) {
            movie.style.display = 'block'; // Show matching movies
        } else {
            movie.style.display = 'none'; // Hide non-matching movies
        }
    });
});

// Search functionality for search button and Enter key
document.getElementById('searchButton').addEventListener('click', searchMovies);
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchMovies();
    }
});

function searchMovies() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        const title = movie.dataset.name.trim().toLowerCase();

        if (title.includes(query)) {
            movie.style.display = 'block';  // Show matching movies
        } else {
            movie.style.display = 'none';  // Hide non-matching movies
        }
    });
}
