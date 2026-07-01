# Genç 2030 · Elazığ Söyleşisi

## Doç. Dr. Ferhat Uçar | Fırat Üniversitesi | Teknoloji Fakültesi | Yazılım Mühendisliği (İngilizce - UOLP)

Bu depo, **Gençlik ve Spor Bakanlığı — Gençlik Hizmetleri Genel Müdürlüğü**
tarafından yürütülen **Genç 2030 · Dijital Yetkinlikler ve Yapay Zeka Atölyesi**
kapsamında Elazığ ekibiyle liseli ve üniversiteli gençlere yönelik hazırlanan
bir söyleşinin arka plan sunum sayfasını içerir.

**Canlı sayfa:** <https://drferhatu.github.io/genc-2030-elazig/>

## Amaç

Söyleşide **Türkiye Yapay Zeka Eylem Planı**’nın dört ekseni —
**Fark Et · İstifade Et · Üret · Yönet** — üzerinden gençlere;

- yapay zekayı etkin ve etik biçimde kullanmanın pratikleri,
- hangi bölümde ya da meslekte olurlarsa olsunlar geleceğe kendinden emin
  yürümenin yolları,
- devletin bu alanda açtığı imkânlar

aktarılmaktadır. Bu web sayfası konuşma boyunca ekranda görsel omurga olarak
kullanılır ve söyleşi sonrasında da katılımcıların dönüp bakabilmesi için
canlı kalır.

## Yapı

Tek sayfalık (landing) modern bir sunum sitesidir.

- Statik HTML / CSS / JS — çerçeve yok, derleme yok.
- Mobil uyumlu, koyu tema, TEDx tarzı tipografi.
- Erişilebilirlik için `prefers-reduced-motion` desteği.
- Sayısal göstergeler için hafif JS sayaç animasyonu.
- Bağlantı kartlarında yerel olarak üretilmiş QR SVG’leri.

```
site/
├── index.html
├── assets/
│   ├── styles.css
│   ├── main.js
│   └── qr-*.svg
├── .nojekyll
└── README.md
```

## Yerel çalıştırma

Depoyu klonlayıp basit bir statik sunucu çalıştırmak yeterli:

```bash
python3 -m http.server 5173
# ardından: http://localhost:5173
```

## Yayın

Depo, GitHub Pages üzerinden `main` dalının kökünden yayınlanır.
Herhangi bir push’tan sonra Pages otomatik build alır ve birkaç dakika içinde
canlı sürüm güncellenir.

## Teşekkür

Genç 2030 program ekibine, Elazığ atölye sorumlularına ve gönüllü eğitmenlere
teşekkür ederiz.
