# Kurulum

- npm install tr-dictionary

# Projenin Sahibi

- Projenin Sahibi: Berkay - GitHub: https://github.com/berkayfazlioglu
  
# Modülün Kullanımı

> Modülün kullanımı açıklamasında da bahsedildiği üzere oldukça basit, fakat modülün çalışma yapısı asenkron türde olduğu için modülü kullanırken "async-await" veya ".then()" yapılarını kullanmanız gerekiyor.

Bu yapılara ait örnekler kullanımlar aşağıda bulunuyor.

## **".then()" yapısı ile kullanım:**

```js
const tdk = require("./index");


tdk("araba").then(veri => {

    // kodunuz

    console.log(veri)

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
const tdk = require("./index");


async function MyDictionary() {

    const veri = await tdk("çay");

    // kodunuz

    console.log(veri);

};

MyDictionary();
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

## Lisans

[MIT](https://github.com/berkayfazlioglu/tr-doviz/blob/master/LICENSE)

## İletişim

[GitHub](https://github.com/berkayfazlioglu)

[Discord](https://discord.com/users/398138493240475648)