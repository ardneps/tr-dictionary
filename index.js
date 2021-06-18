const fetch = require("node-fetch");

module.exports = async (word) => {

    let query = encodeURI(word);

    const url = `https://sozluk.gov.tr/gts?ara=${query}`;

    const response = await fetch(url, { method: "GET" });


    const data = (await response.json());

    if (data.error) throw new TypeError("Sonuç bulunamadı!");

    const { anlamlarListe, ozel_mi, cogul_mu, lisan, atasozu } = data[0];

    const firstMeaningList = anlamlarListe[0];
    const secondMeaningList = anlamlarListe[1];
    const thirdMeaningList = anlamlarListe[2];

    const { orneklerListe, fiil } = firstMeaningList

    const exampleList = orneklerListe;
    const sayingList = atasozu[0];


    const firstMeaning = (firstMeaningList) ?
        firstMeaningList.anlam : "Bu kelimenin bir anlamı bulunmuyor.";

    const secondMeaning = (secondMeaningList) ?
        secondMeaningList.anlam : "Bu kelimenin ikinci bir anlamı bulunmuyor.";

    const thirdMeaning = (thirdMeaningList) ?
        thirdMeaningList.anlam : "Bu kelimenin üçüncü bir anlamı bulunmuyor.";

    const isVerb = (fiil == 1) ? true : false;

    const isSpecial = (ozel_mi == 1) ? true : false;

    const isPlural = (cogul_mu == 1) ? true : false;

    const origin = (lisan) ? lisan : "Türkçe";

    const example = (exampleList) ?
        exampleList[0].ornek : "Bu kelimenin kullanıldığı bir cümle örneği bulunmuyor.";

    const saying = (sayingList) ? sayingList.madde : "Bu kelimenin kullanıldığı bir atasözü bulunmuyor.";

    const ardneps = {
        anlam: firstMeaning,
        ikinci_anlam: secondMeaning,
        ucuncu_anlam: thirdMeaning,
        fiil_mi: isVerb,
        ozel_mi: isSpecial,
        cogul_mu: isPlural,
        koken: origin,
        ornek: example,
        atasozu: saying
    };

    return ardneps;

};