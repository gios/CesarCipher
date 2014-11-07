function cesarDecode(data) {
    var alphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ",
        decoder = '',
        key = 3,
        alphabetLength = alphabet.length;

    console.log(data.length + " " + alphabetLength);

    for (var i = 0; i <= data.length; i++) {
        for (var j = 0; j <= alphabetLength; j++) {
            if (data[i] === alphabet[j]) {
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

    console.log(decoder);
    return decoder;
}