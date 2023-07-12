    let boxVisible = false;

    // ITEM BOX 

    // Check the initial state and adjust the box position accordingly
    if (!boxVisible) {
        $('#item-box-container').css('bottom', '-150px');
    }

    $('#item-box-toggle-button').click(function () {
        if (boxVisible) {
            $('#item-box-container').css('bottom', '-150px');
        } else {
            $('#item-box-container').css('bottom', '0px');
        }
        boxVisible = !boxVisible;
    });

    // EXPLOSIONS
    const explodeButton = document.getElementById('download-button');
    const explosionElementsContainer = document.querySelector('#explosion-container');
    const elementsToExplode = explosionElementsContainer.querySelectorAll('*');
    const tremblingTime = 3000;
    // Get explosion gif container
    const explosionContainer = document.getElementById('explosion-gifs-container');
    const explosionGifs = [
        // 'assets/images/explosions/1.gif',
        'assets/images/explosions/3.gif',
    ];

    // Preload explosion images
    const explosionImages = explosionGifs.map((gifUrl) => {
        const image = new Image();
        image.src = gifUrl;
        return image;
    });

    // Create a wrapper container for the explosion images
    const explosionWrapper = document.createElement('div');
    explosionWrapper.classList.add('explosion-wrapper');

    // Append explosion images to the wrapper container
    explosionImages.forEach((image) => {
        explosionWrapper.appendChild(image);
    });

    // Append the explosion wrapper to the explosion container
    explosionContainer.appendChild(explosionWrapper);

    console.log(explosionContainer)

    explodeButton.addEventListener('click', () => {
        elementsToExplode.forEach(element => {
            element.classList.add('trembling');
            // after 3 seconds, stop trembling
            setTimeout(() => {
                // element.classList.remove('trembling');
                elementsExplode();
            }, tremblingTime);
        });
    });

    function elementsExplode() {
        elementsToExplode.forEach((element, index) => {
            // Generate random values for translateX, translateY, and rotate
            const translateX = getRandomValue(-500, 500); // Example range: -3000px to 3000px
            const translateY = getRandomValue(-500, 500); // Example range: -3000px to 3000px
            const rotate = getRandomValue(-10, 10); // Example range: -10deg to 10deg

            // Generate random delay for each element
            const delay = getRandomValue(0, 1000); // Example range: 0ms to 1000ms

            // Apply the animation after the random delay
            setTimeout(() => {
                // Set the random values as custom properties on the element's style
                element.style.setProperty('--translate-x', `${translateX}px`);
                element.style.setProperty('--translate-y', `${translateY}px`);
                element.style.setProperty('--rotate', `${rotate}deg`);
                element.style.animation = `explodeAnimation ${getRandomValue(.5,3)}s forwards`;

            }, delay);

            explosionContainer.appendChild(explosionWrapper);
            explosionContainer.style.display = 'flex';
        });

        explosionContainer.appendChild(explosionWrapper);
        explosionContainer.style.display = 'flex';

        setTimeout(() => {
            explosionContainer.style.display = 'none';
        }, 4000);
    }

    // Function to generate a random value within a specified range
    function getRandomValue(min, max) {
        return Math.random() * (max - min) + min;
    }