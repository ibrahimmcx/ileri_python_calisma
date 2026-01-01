# 🐍 Python Quiz - İnteraktif Quiz Uygulaması

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](YOUR_VERCEL_URL_HERE)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Python programlama dili üzerine 75 soru içeren modern, responsive ve interaktif quiz uygulaması

## 🌟 Özellikler

- ✨ **Modern UI/UX**: Glassmorphism tasarım ve gradient efektler
- 📱 **Responsive Design**: Mobil, tablet ve desktop uyumlu
- 🎯 **15 Farklı Konu**: Python'un temel ve ileri seviye konuları
- 📊 **Detaylı Sonuçlar**: Doğru/yanlış analizi ve cevap anahtarı
- ⚡ **Hızlı ve Hafif**: Vanilla JavaScript ile geliştirilmiş
- 🎨 **Animasyonlu Geçişler**: Smooth ve modern animasyonlar
- 💾 **Client-Side**: Sunucu gerektirmez, tamamen tarayıcıda çalışır

## 📚 Kapsanan Konular

| # | Dosya | Konu | Soru Sayısı |
|---|-------|------|-------------|
| 1 | `1.py` | Python Temelleri | 5 |
| 2 | `4.hafta.py` | Map, Filter, Lambda | 5 |
| 3 | `7.hafta.py` | Fonksiyonları Parametre Olarak Gönderme | 5 |
| 4 | `AStar.py` | A* Algoritması | 5 |
| 5 | `async_1.py` | Asenkron Programlama | 5 |
| 6 | `constructor.py` | OOP - Sınıflar | 5 |
| 7 | `decorator_functions.py` | Decorators | 5 |
| 8 | `deneme.py` | List Comprehension | 5 |
| 9 | `generator.py` | Generators | 5 |
| 10 | `iterator.py` | Iterators | 5 |
| 11 | `multithread.py` | Multithreading | 5 |
| 12 | `multiprocess.py` | Multiprocessing | 5 |
| 13 | `nested_functions.py` | İç İçe Fonksiyonlar | 5 |
| 14 | `recursive.py` | Özyinelemeli Fonksiyonlar | 5 |
| 15 | `ödev1.py` | Threading Uygulaması | 5 |

**Toplam: 75 Soru**

## 🚀 Canlı Demo

**[🌐 Uygulamayı Dene](https://ileripythoncalisma.vercel.app/)** ← *Vercel'e deploy ettikten sonra buraya URL'nizi ekleyin*

## 📦 Kurulum

### Yerel Ortamda Çalıştırma

1. **Repoyu klonlayın:**
```bash
git clone https://github.com/KULLANICI_ADINIZ/python-quiz.git
cd python-quiz
```

2. **Tarayıcıda açın:**
```bash
# Basit HTTP sunucusu ile (Python 3)
python -m http.server 8000

# Veya doğrudan index.html dosyasını tarayıcıda açın
```

3. **Tarayıcınızda görüntüleyin:**
```
http://localhost:8000
```

### Vercel ile Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://ileripythoncalisma.vercel.app/)

**Manuel Deploy:**

1. [Vercel](https://vercel.com) hesabınıza giriş yapın
2. "New Project" butonuna tıklayın
3. GitHub reponuzu seçin
4. "Deploy" butonuna tıklayın
5. Deploy tamamlandıktan sonra verilen URL'yi README'deki `YOUR_VERCEL_URL_HERE` yerine ekleyin

## 🎮 Kullanım

1. **Quiz Seçimi**: Ana sayfada 15 farklı Python konusundan birini seçin
2. **Soruları Cevaplayın**: Her soruda 4 seçenekten birini işaretleyin
3. **İleri/Geri Gezinme**: Sorular arasında özgürce gezinin
4. **Testi Bitirin**: Son sorudan sonra "Testi Bitir" butonuna tıklayın
5. **Sonuçları Görüntüleyin**: Doğru/yanlış sayınızı ve başarı yüzdenizi görün
6. **Cevap Anahtarı**: "Cevapları Göster" ile hangi soruları yanlış yaptığınızı inceleyin

## 🛠️ Teknolojiler

- **HTML5**: Semantik yapı
- **CSS3**: Modern styling, CSS Grid, Flexbox, Animations
- **JavaScript (ES6+)**: Vanilla JS, DOM manipulation
- **Google Fonts**: Inter font family
- **Design**: Glassmorphism, Gradient effects

## 📁 Proje Yapısı

```
python-quiz/
├── index.html          # Ana HTML dosyası
├── style.css           # Tüm stiller ve animasyonlar
├── script.js           # Quiz mantığı ve interaktivite
├── sorular             # Soru bankası (metin formatında)
└── README.md           # Proje dokümantasyonu
```

## 🎨 Tasarım Özellikleri

- **Color Scheme**: Dark mode with purple/blue gradients
- **Typography**: Inter font family
- **Effects**: 
  - Glassmorphism cards
  - Smooth transitions
  - Hover animations
  - Progress bar with shimmer effect
  - Gradient text
- **Responsive Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Bu repoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Pull Request oluşturun

### Katkı Fikirleri

- [ ] Yeni Python konuları ekleyin
- [ ] Soru sayısını artırın
- [ ] Dark/Light mode toggle
- [ ] Skor geçmişi (localStorage)
- [ ] Zamanlayıcı özelliği
- [ ] Soru karıştırma
- [ ] Çoklu dil desteği
- [ ] Ses efektleri

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👤 Geliştirici

**ibrahim culfa**

- GitHub: [@ibraimmcx](https://github.com/ibrahimmcx)


## 🙏 Teşekkürler

- Python topluluğuna ilham için
- Tüm katkıda bulunanlara

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](https://via.placeholder.com/800x400?text=Quiz+Selection+Screen)

### Quiz Ekranı
![Quiz Ekranı](https://via.placeholder.com/800x400?text=Quiz+Question+Screen)

### Sonuç Ekranı
![Sonuç Ekranı](https://via.placeholder.com/800x400?text=Results+Screen)

---

<div align="center">

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın! ⭐**

Made with ❤️ and ☕

</div>
