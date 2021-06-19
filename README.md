# Kurulum

- npm install tr-dictionary

# Projenin Sahibi

- Projenin Sahibi: Berkay - GitHub: https://github.com/berkayfazlioglu
  
# Modülün Kullanımı

> Modülün kullanımı açıklamasında da bahsedildiği üzere oldukça basit, fakat modülün çalışma yapısı asenkron türde olduğu için modülü kullanırken "async-await" veya ".then()" yapılarını kullanmanız gerekiyor.

Bu yapılara ait örnekler kullanımlar aşağıda bulunuyor.

## **".then()" yapısı ile kullanım:**

```js
const currency = require("tr-doviz");


currency().then(veri => {

// kodunuz

console.log(veri);

});
```

**Sonuç:**

```js
{
  tarih: '18.06.2021',     
  baz: 'TL',
  miktar: 1,
  dolar: 8.695652173913043,
  euro: 10.345541071798056,
  frank: 9.456264775413711,
  kron: 1.011030341020534,
  ruble: 0.12027326084864814,
  sterlin: 12.0598166907863,
  yen: 0.0789041787653074,
  yuan: 1.3503112467423741
}
```

## **"async-await" yapısı ile kullanım:**

```js
const currency = require("tr-doviz");


async function myWallet() {

const veri = await currency();

// kodunuz
  
console.log(veri);
  
};

myWallet();
```

**Sonuç:**

```js
{
  tarih: '18.06.2021',     
  baz: 'TL',
  miktar: 1,
  dolar: 8.695652173913043,
  euro: 10.345541071798056,
  frank: 9.456264775413711,
  kron: 1.011030341020534,
  ruble: 0.12027326084864814,
  sterlin: 12.0598166907863,
  yen: 0.0789041787653074,
  yuan: 1.3503112467423741
}
```

## Lisans

[MIT](https://github.com/berkayfazlioglu/tr-doviz/blob/master/LICENSE)

## İletişim

[GitHub - berkayfazlioglu](https://github.com/berkayfazlioglu)

[Discord - Ardneps](https://discord.com/users/398138493240475648)