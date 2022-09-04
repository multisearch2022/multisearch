function logochange() {
    var x = document.getElementById("searchbar").value;
    var L = x.split(" ");
    var y = L[0].toLowerCase();
    var image = document.getElementById("logo");
    switch (y) {
        case "youtube":
            image.src = "/media/Logoyt.png";
            break;
        case "google":
            image.src = "/media/Logog.png";
            break;
        case "wikipedia":
            image.src = "/media/Logowiki.png";
            break;
        case "docs":
            image.src = "/media/Logodoc.png";
            break;
        case "bing":
            image.src = "/media/Logobing.png";
            break;
        case "spotify":
            image.src = "/media/Logospot.png";
            break;
        case "amazon":
            image.src = "/media/Logoam.png";
            break;
        case "myntra":
            image.src = "/media/Logomyntra.png";
            break;
        case "flipkart":
            image.src = "/media/Logoflipkart.png";
            break;
        case "yahoo":
            image.src = "/media/Logoyahoo.png";
            break;
        case "hotstar":
            image.src = "/media/Logohotstar.png";
            break;
        case "netflix":
            image.src = "/media/Logonetflix.png";
            break;
        case "reddit":
            image.src = "/media/Logoreddit.png";
            break;
        case "linkedin":
            image.src = "/media/Logolinkedin.png";
            break;
        case "twitter":
            image.src = "/media/Logotwitter.png";
            break;
        default:
            image.src = "/media/Logo.png";
            break;
    }
}



function search() {
    var x = document.getElementById("searchbar").value;
    var L = x.split(" ");
    var y = L[0].toLowerCase();
    switch (y) {
        case "youtube":
            L.splice(0, 1);
            var str = L.join("+");
            window.open("https://www.youtube.com/results?search_query=" + str, "_blank");
            break;
        case "google":
            L.splice(0, 1);
            var str = L.join("+");
            window.open("https://www.google.com/search?q=" + str, "_blank");
            break;
        case "wikipedia":
            L.splice(0, 1);
            var str = L.join("+");
            window.open("https://en.wikipedia.org/wiki/Special:Search?go=Go&search=" + str + "&ns0=1", "_blank");
            break;
        case "docs":
            L.splice(0, 1);
            var str = L.join("%20");
            window.open("https://docs.google.com/document/u/0/?tgif=d&q=" + str, "_blank");
            break;
        case "bing":
            L.splice(0,1);
            var str = L.join("+");
            window.open("https://www.bing.com/search?q=" + str, "_blank");
            break;
        case "spotify":
            L.splice(0,1);
            var str = L.join("%20");
            window.open("https://open.spotify.com/search/" + str, "_blank");
            break;
        case "amazon":
            L.splice(0,1);
            var str = L.join("+");
            window.open("https://www.amazon.in/s?k=" + str, "_blank");
            break;
        case "myntra":
            L.splice(0,1);
            var str = L.join("-");
            window.open("https://www.myntra.com/" + str, "_blank");
            break;
        case "flipkart":
            L.splice(0,1);
            var str = L.join("%20");
            window.open("https://www.flipkart.com/search?q=" + str, "_blank");
            break;
        case "yahoo":
            L.splice(0,1);
            var str = L.join("+");
            window.open("https://in.search.yahoo.com/search?p=" + str, "_blank");
            break;
        case "hotstar":
            L.splice(0,1);
            var str = L.join("%20");
            window.open("https://www.hotstar.com/in/search?q=" + str, "_blank");
            break;
        case "netflix":
            L.splice(0,1);
            var str = L.join("%20");
            window.open("https://www.netflix.com/search?q=" + str, "_blank");
            break;
        case "reddit":
            L.splice(0,1);
            var str = L.join("%20");
            window.open("https://www.reddit.com/search/?q=" + str, "_blank");
            break;
        case "linkedin":
            L.splice(0,1);
            var str = L.join("%20");
            window.open("https://www.linkedin.com/search/results/all/?keywords=" + str, "_blank");
            break;
        case "twitter":
            L.splice(0,1);
            var str = L.join("%20");
            window.open("https://twitter.com/search?q=" + str, "_blank");
            break;
        default:
            var str = L.join("+");
            window.open("https://www.google.com/search?q=" + str, "_blank");
            break;
    }
}