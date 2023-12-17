// Using Fetch API to get a random cat picture
fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        // Access the cat picture URL from the response
        const catImageUrl = data[0].url;
        console.log('Cat Picture URL:', catImageUrl);

        // You can use the URL to display the image in your application
    })
    .catch(error => console.error('Error fetching cat picture:', error));
