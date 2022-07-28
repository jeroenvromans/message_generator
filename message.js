//array met leuke teksten
const messages = ["Natuurlijk doe ik aan marathons. Op Netflix!", 
    "Een geintje is leuk, maar je kunt ook te ver gaan. Dat is nog leuker!",
    "Vanochtend koffiegezet met Red Bull in plaats van water. Na 10 minuten op de snelweg, kwam ik erachter dat de auto nog thuis stond.",
    "Gisteren heb ik soep gemaakt van alfabet vermicelli, vanmorgen op de wc kwam er een persbericht uit.",
    "Hoezo een raket nodig om naar de maan te gaan? Bij mij gaat alles naar de maan, ook zonder raket.",
    "Draag nooit je oordoppen met keiharde muziek tijdens het stofzuigen. Ik heb net dus de hele benedenverdieping gezogen zonder dat de stekker in het stopcontact zat.",
    "Mijn kinderen lachen omdat ze denken dat ik gek ben. Ik lach omdat ze niet weten dat het erfelijk is."]

    // console.log(messages);
//functie om de tekst random te kiezen
getRandomMessage = (arr) => {
    //vaststellen lengte array
    const max = arr.length - 1
    // console.log(max);
    const index = Math.floor(Math.random() * max);

    console.log(arr[index]);
}
//call naar de functie
getRandomMessage(messages);

