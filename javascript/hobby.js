const videos_url = ["https://www.youtube.com/embed/U7FFJCUJk88", "https://www.youtube.com/embed/EOExE7qOFHM", "https://www.youtube.com/embed/kczn-h5JXRY", "https://www.youtube.com/embed/xpfpmBw5Il4", "https://www.youtube.com/embed/KphsVRESa7s", "https://www.youtube.com/embed/rLQceGuRHNg", "https://www.youtube.com/embed/IJzIf7s2CR8"];



function returnIndex() {
    let select = document.getElementById('videos');
    let value = select.options[select.selectedIndex].value;

    switch(value) {
        case "0":
            document.getElementById("videoFrame").src = videos_url[0];
            break;
        case "1":
            document.getElementById("videoFrame").src = videos_url[1];
            break;
        case "2":
            document.getElementById("videoFrame").src = videos_url[2];
            break;
        case "3":
            document.getElementById("videoFrame").src = videos_url[3];
            break;
        case "4":
            document.getElementById("videoFrame").src = videos_url[4];
            break;
        case "5":
            document.getElementById("videoFrame").src = videos_url[5];
            break;
        case "6":
            document.getElementById("videoFrame").src = videos_url[6];
            break;
        default:
            break;
    }
}
