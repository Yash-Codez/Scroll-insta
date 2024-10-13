// Function to scroll to the bottom of Instagram page
function scrollToOldestPost() {
    let previousHeight = document.body.scrollHeight;
    const scrollInterval = setInterval(() => {
        window.scrollTo(0, document.body.scrollHeight);  // Scroll to the bottom
        let newHeight = document.body.scrollHeight;
        
        // Check if new posts are loaded
        if (newHeight === previousHeight) {
            clearInterval(scrollInterval);  // Stop scrolling when we reach the bottom
        }
        previousHeight = newHeight;
    }, 3000);  // Adjust the delay as needed
}

// Call the function
scrollToOldestPost();
