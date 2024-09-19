const requestOptions = {
    method: "GET",
    redirect: "follow"
};

let site = "https://www.youtube.com/";

fetch(site, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(`O site ${site} não está mais acessível no momento...`, error));