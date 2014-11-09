function cesarDecode(data, key) {
    var alphabet = "абвгдеєжзиіїйклмнопрстуфхцчшщьюя ",
        alphabetWorked = "АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгдеєжзиіїйклмнопрстуфхцчшщьюя0123456789.,;:!?- ",
        decoder = '',
        alphabetLength = alphabet.length,
        dataArray = [],
        maxFrequency,
        frequency = {
            "о": 0.082,
            "н": 0.070,
            "а": 0.070,
            "и": 0.056,
            "т": 0.051,
            "в": 0.046,
            "е": 0.043,
            "р": 0.038,
            "і": 0.037,
            "с": 0.036,
            "к": 0.036,
            "м": 0.033,
            "д": 0.028,
            "л": 0.028,
            "у": 0.028,
            "п": 0.025,
            "я": 0.021,
            "з": 0.019,
            "ь": 0.015,
            "г": 0.013,
            "ч": 0.011,
            "б": 0.010,
            "х": 0.010,
            "ц": 0.009,
            "ю": 0.009,
            "ж": 0.008,
            "й": 0.007,
            "ї": 0.006,
            "є": 0.006,
            "ф": 0.005,
            "ш": 0.005,
            "щ": 0.003
        };

    // Search frequency of data
    frequencyDataSearch(data);

    function searchMaxFrequency() {
        var tmp = [];
        var arr = Object.keys(frequencyData).map(function (key) {
            tmp.push(frequencyData[key]);
        });
        return Math.max.apply(null, tmp);
    }
    
    var maxFrequency = searchMaxFrequency();
    
    function maxFrequencyLetter(maxFrequency) {
        var letter;
        for(var index in frequencyData) {
             frequencyData[index] === maxFrequency ? letter = index : null;
        }
        return letter;
    }
    
    console.log(maxFrequencyLetter(maxFrequency));
    // END frequency of data


    // Data to Array
    for (var number in data) {
        dataArray.push(data[number]);
    }
    // END Data to Array

    for (var i = 0; i <= dataArray.length - 1; i++) {
        for (var j = 0; j <= alphabetLength - 1; j++) {
            if (dataArray[i] === alphabet[j]) {

                var decoderFormule = (j - key) % alphabetLength;

                while (decoderFormule < 0)
                    decoderFormule += alphabetLength + Math.abs(decoderFormule);

                while (decoderFormule >= alphabetLength)
                    decoderFormule -= alphabetLength;

                decoder = decoder + alphabet[decoderFormule];
            }
        }
    }
    return decoder;
}