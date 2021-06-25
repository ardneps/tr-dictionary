# tr-dictionary

[![package-image]][package-url]  [![install-image]][install-url]

[![NPM][npm-image]][npm-url]

# İçindekiler

- [Kurulum](#kurulum)

- [Modülün Kullanımı](#modülün-kullanımı)

- [Varlıklar](#varlıklar)

- [Lisans](#lisans)

# Kurulum

- npm install tr-dictionary
  
# Modülün Kullanımı

> Modülün kullanımı açıklamasında da bahsedildiği üzere oldukça basit, fakat modülün çalışma yapısı asenkron türde olduğu için modülü kullanırken "async-await" veya ".then()" yapılarını kullanmanız gerekiyor.

Bu yapılara ait örnekler kullanımlar aşağıda bulunuyor.

## **".then()" yapısı ile kullanım:**

```js
const tdk = require("tr-dictionary");


tdk("araba").then(veri => {

    // kodunuz

    console.log(veri);

});
```

**Sonuç:**

```js
{
  anlam: 'Tekerlekli, motorlu veya motorsuz her türlü kara taşıtı',
  ikinci_anlam: 'Bu taşıtın aldığı miktarda olan',
  ucuncu_anlam: 'Bu kelimenin üçüncü bir anlamı bulunmuyor.',      
  fiil_mi: false,
  ozel_mi: false,
  cogul_mu: false,
  koken: 'Türkçe',
  ornek: 'Sarhoşların araba sürmeleri sakıncalıdır.',
  atasozu: 'araba devrilince yol gösteren çok olur'
}
```

## **"async-await" yapısı ile kullanım:**

```js
const tdk = require("tr-dictionary");


async function myDictionary(query) {

    const veri = await tdk(query);

    // kodunuz

    console.log(veri);

};

myDictionary("çay");
```

**Sonuç:**

```js
{
  anlam: 'Çaygillerden, nemli iklimlerde yetişen bir ağaççık (Thea chinensis)',
  ikinci_anlam: 'Bu ağaççığın özel işlemlerle kurutulan yaprağı',
  ucuncu_anlam: 'Bu yaprağın demlenmesiyle elde edilen güzel kokulu ve sarımtırak kırmızı renkli içecek',
  fiil_mi: false,
  ozel_mi: false,
  cogul_mu: false,
  koken: 'Çince',
  ornek: 'Bu kelimenin kullanıldığı bir cümle örneği bulunmuyor.',
  atasozu: 'çay dökmek'
}
```

# Varlıklar

| Alan | Tür | Açıklama |
|:--------|:-------|:-----------|
| anlam | string | Kelimenin TDK sözlüğündeki ilk anlamı |
| ikinci_anlam | string | Kelimenin TDK sözlüğündeki ikinci anlamı |
| ucuncu_anlam | string | Kelimenin TDK sözlüğündeki üçüncü anlamı |
| fiil_mi | boolean | Kelimenin fiil olup olmadığını belirtir (true/false) | 
| ozel_mi | boolean | Kelimenin özel isim olup olmadığını belirtir (true/false) | 
| cogul_mu | boolean | Kelimenin çoğul olup olmadığını belirtir (true/false) | 
| koken | string | Kelimenin Türkçeye hangi dilden geçtiğini belirtir |
| ornek | string | Kelimenin içinde bulunduğu bir cümle örneği |
| atasozu | string | Kelimenin içinde bulunduğu bir atasözü örneği |

# Lisans

- [MIT](https://github.com/berkayfazlioglu/tr-dictionary/blob/master/LICENSE)

[package-url]: http://npmjs.org/package/tr-dictionary
[package-image]: https://badge.fury.io/js/tr-dictionary.svg

[install-url]: https://packagephobia.com/result?p=tr-dictionary
[install-image]: https://packagephobia.com/badge?p=tr-dictionary

[npm-url]: https://nodei.co/npm/tr-dictionary/
[npm-image]: https://nodei.co/npm/tr-dictionary.png?downloads=true&downloadRank=true&stars=false