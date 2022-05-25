const generateHTML = () => {
    return `
        <h1 style="font-size: 5em;">404</h1>
        <h1>GO BACK TO WORK</h1>
    `
}

const generateStyle = () => {
    return `
        <style>
            body {
                background: dodgerblue;
            }
            h1 {
                text-align: center;
                color: white;
            }
        </style>
    `
}

switch(window.location.hostname) {
    case "www.youtube.com":
        document.head.innerHTML = generateStyle()
        document.body.innerHTML = generateHTML("YOUTUBE")
        break;
    case "www.facebook.com":
        document.head.innerHTML = generateStyle()
        document.body.innerHTML = generateHTML("FACEBOOK")
        break;
    case "www.netflix.com":
        document.head.innerHTML = generateStyle()
        document.body.innerHTML = generateHTML("NETFLIX")
        break;
    case "www.twitter.com":
        document.head.innerHTML = generateStyle()
        document.body.innerHTML = generateHTML("TWITTER")
        break;        
}