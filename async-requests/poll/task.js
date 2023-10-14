const getRequest = new XMLHttpRequest;
getRequest.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
getRequest.send();
getRequest.onreadystatechange = function () {
    if (getRequest.readyState === 4 && getRequest.status === 200) {
        let data = JSON.parse(getRequest.responseText).data;
        let inqueryId = JSON.parse(getRequest.responseText).id;
        let pollClass = document.querySelector('div.poll');

        pollClass.insertAdjacentHTML('afterbegin',
            `<div class="poll__title" id="poll__title">${data.title}</div>`
            );

        for (let answer in {...data.answers}) {
            pollClass.insertAdjacentHTML('beforeend',
                `<button class="poll__answer">${{...data.answers}[answer]}</button>`
            );
        };

        Array.from(document.querySelectorAll('button.poll__answer')).forEach(function (button, index) {
            button.onclick = function (event) {
                alert('Спасибо, ваш голос засчитан!');

                const postRequest = new XMLHttpRequest;
                postRequest.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                postRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                postRequest.send( `vote=${inqueryId}&answer=${++index}` );
                postRequest.onreadystatechange = function () {
                    if (postRequest.readyState === 4 && postRequest.status === 200) {
                        let response = Array.from(JSON.parse(postRequest.responseText).stat);
                        let votesSum = response.reduce(function(prev, cur) { return prev + cur.votes }, 0);
                        for (let item in response) {
                            document.querySelector('div.poll').insertAdjacentHTML('beforeend',
                                `<div class="poll__answers poll__answers_active" id="poll__answers">${response[item].answer}: <b>${(response[item].votes / votesSum * 100).toFixed(2)}%</b></div>`
                                );
                        };
                    };
                };
            };
        });
    };
};