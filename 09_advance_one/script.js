const requestUrl = 'https://api.github.com/users/parthtate'
const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if (xhr.readyState === 4){
        const data = JESON.parse(this.responseText) // converted string to object datatype.
        console.log(typeof data);
        console.log(data.followers); // getting value from url.
    }
}
xhr.send()

// Expoloration of v9 enging on github and console.log() how define in c++ language, also all JS is write on c++.
