document.getElementsByTagName('input').file.onchange = function(event) {
    let file = this.files[0];
    document.getElementById('send').onclick = function() {
        const request = new XMLHttpRequest
        request.upload.onprogress = function (event) {
            const progress = document.getElementById( 'progress' );
            progress.value = (event.loaded / event.total).toFixed(3);
    
        };
        request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        request.send(file);
        return false;
    };
};