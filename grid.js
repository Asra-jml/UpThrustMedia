const images = [
            'url("upth1.jpg")',
            'url("upth2.jpg")',
            'url("upth3.jpg")',
            'url("upth4.jpg")',
            'url("upth5.jpg")',
            'url("upth6.jpg")',
        ];
        
        let currentIndexes = [0, 1, 2, 3];
        
        function changeImages() {
            currentIndexes = currentIndexes.map(index => (index + 1) % images.length);
            document.getElementById('cell1').style.backgroundImage = images[currentIndexes[0]];
            document.getElementById('cell2').style.backgroundImage = images[currentIndexes[1]];
            document.getElementById('cell3').style.backgroundImage = images[currentIndexes[2]];
            document.getElementById('cell4').style.backgroundImage = images[currentIndexes[3]];
        }
        
        setInterval(changeImages, 2000);
        
        changeImages();

        