// Responsive Navbar
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

// Simple Search Alert
function searchBooks() {
    let query = document.getElementById("searchInput").value;
    if(query.trim() !== "") {
        alert("Searching for: " + query);
    } else {
        alert("Please enter a book name.");
    }
}
