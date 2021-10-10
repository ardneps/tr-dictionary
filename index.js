const fetch = require("node-fetch");

module.exports = async (word) => {

    const query = encodeURI(word);

    const url = `https://sozluk.gov.tr/gts?ara=${query}`;

    const response = await fetch(url, { method: "GET" });

    const data = (await response.json());

    if (data.error) throw new TypeError(`Aratılan kelimeyle ilgili veri bulunamadı! (${word})`);

    const [{ madde_duz, anlamlarListe, ozel_mi, cogul_mu, lisan, atasozu }] = data;

    const [firstMeaningList, secondMeaningList, thirdMeaningList] = anlamlarListe;

    const { orneklerListe, fiil } = firstMeaningList

    const exampleList = orneklerListe;
    const [sayingList] = atasozu;

    const firstMeaning = (firstMeaningList) ?
        firstMeaningList.anlam : "Bu kelimenin bir anlamı bulunmuyor.";

    const secondMeaning = (secondMeaningList) ?
        secondMeaningList.anlam : "Bu kelimenin ikinci bir anlamı bulunmuyor.";

    const thirdMeaning = (thirdMeaningList) ?
        thirdMeaningList.anlam : "Bu kelimenin üçüncü bir anlamı bulunmuyor.";

    const isVerb = Boolean(Number(fiil));

    const isSpecial = Boolean(Number(ozel_mi));

    const isPlural = Boolean(Number(cogul_mu));

    const origin = lisan ?? "Türkçe";

    const example = (exampleList[0]) ?
        exampleList[0].ornek : "Bu kelimenin kullanıldığı bir cümle örneği bulunmuyor.";

    const saying = (sayingList) ? sayingList.madde : "Bu kelimenin kullanıldığı bir atasözü bulunmuyor.";

    return {
        kelime: madde_duz,
        anlam: firstMeaning,
        ikinci_anlam: secondMeaning,
        ucuncu_anlam: thirdMeaning,
        fiil_mi: isVerb,
        ozel_mi: isSpecial,
        cogul_mu: isPlural,
        koken: origin,
        ornek: example,
        atasozu_deyim: saying
    };

};