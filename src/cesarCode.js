function cesarDecode(data) {
    var alphabet = "абвгдеєжзиіїйклмнопрстуфхцчшщьюя0123456789.,;:!?- ",
        decoder = '',
        key = 3,
        alphabetLength = alphabet.length,
        dataArray = [];
    
    for(var number in data) {
        dataArray.push(data[number]);
    }
    
    console.log(dataArray + " " + alphabetLength);

    for (var i = 0; i <= dataArray.length - 1; i++) {
        for (var j = 0; j <= alphabetLength - 1; j++) {
            if (dataArray[i] === alphabet[j]) {
                var decoderFormule = (j - key) % alphabetLength;
                console.log(decoderFormule);

                while (decoderFormule < 0)
                    decoderFormule += alphabetLength;

                while (decoderFormule >= alphabetLength)
                    decoderFormule -= alphabetLength;
                decoder = decoder + alphabet[decoderFormule];
                console.log(decoder);
            }
        }
    }
    return decoder;
}