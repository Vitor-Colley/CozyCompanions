 // Function to fetch dog breeds from an API
 function getDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const dogBreedSelect = document.getElementById('dogBreed');

        // Populate dog breeds
        for (const breed in data.message) {
          const option = document.createElement('option');
          option.value = breed;
          option.text = breed;
          dogBreedSelect.appendChild(option);
        }
      })
      .catch(error => console.error('Error fetching dog breeds:', error));
  }

  // Function to fetch sub-breeds based on the selected dog breed
  function getSubBreeds() {
    const selectedBreed = document.getElementById('dogBreed').value;
    const subBreedLabel = document.getElementById('subBreedLabel');
    const subBreedSelect = document.getElementById('subBreed');

    // Clear previous options
    subBreedSelect.innerHTML = '';

    // Fetch sub-breeds if they exist
    if (selectedBreed !== 'select') {
      fetch(`https://dog.ceo/api/breed/${selectedBreed}/list`)
        .then(response => response.json())
        .then(data => {
          if (data.message.length > 0) {
            // Show sub-breed options
            subBreedLabel.style.display = 'block';

            // Populate sub-breeds
            for (const subBreed of data.message) {
              const option = document.createElement('option');
              option.value = subBreed;
              option.text = subBreed;
              subBreedSelect.appendChild(option);
            }
          } else {
            // Hide sub-breed options if there are none
            subBreedLabel.style.display = 'none';
          }
        })
        .catch(error => console.error('Error fetching sub-breeds:', error));
    } else {
      // Hide sub-breed options if no dog breed is selected
      subBreedLabel.style.display = 'none';
    }
  }

  // Function to fetch and display a random dog image
  function getImage() {
    const selectedBreed = document.getElementById('dogBreed').value;
    const selectedSubBreed = document.getElementById('subBreed').value;
    const imageContainer = document.getElementById('imageContainer');

    // Fetch random dog image
    const apiUrl = selectedSubBreed
      ? `https://dog.ceo/api/breed/${selectedBreed}/${selectedSubBreed}/images/random`
      : `https://dog.ceo/api/breed/${selectedBreed}/images/random`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Display the image
        imageContainer.innerHTML = `<img src="${data.message}" alt="Random Dog Image">`;
      })
      .catch(error => console.error('Error fetching dog image:', error));
  }

  // Event listeners
  document.getElementById('dogBreed').addEventListener('change', getSubBreeds);
  document.getElementById('submit').addEventListener('click', getImage);

  // Initialize dog breeds on page load
  window.addEventListener('load', getDogBreeds);

   