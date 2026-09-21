# TASKFLOW - Görev ve Proje Yönetim Sistemi REST API

Bu proje, Node.js ve Express.js kullanılarak geliştirilmiş, yazılım ekiplerinin görevlerini ve sorumluluklarını takip edebileceği bir REST API servisidir.

## Kurulan Yapı ve Teknolojiler
- **Node.js & Express.js:** Backend API altyapısı
- **Dotenv:** Çevre değişkenleri yönetimi
- **Custom Logger Middleware:** Gelen HTTP isteklerini loglama
- **MVC/Modular Architecture:** Controllers ve Routes ayrımı

## API Endpoints (Rotalar)

| Metot | Endpoint | Açıklama |
| :--- | :--- | :--- |
| `GET` | `/` | Servis kontrol noktası |
| `POST` | `/api/tasks` | Yeni görev oluşturur |
| `GET` | `/api/tasks` | Tüm görevleri listeler |
| `GET` | `/api/tasks/:id` | Belirtilen ID'li görevin detayını getirir |
| `PUT` | `/api/tasks/:id` | Belirtilen ID'li görevi günceller |
| `DELETE` | `/api/tasks/:id` | Belirtilen ID'li görevi siler |

## Kurulum ve Çalıştırma

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ``` 
2. .env.example dosyasını referans alarak .env dosyanızı oluşturun
    PORT = 3000

3. Sucuyu başlatın:
    # Geliştirme modunda çalıştırmak için:
        npm run dev

    # Prodüksiyon modunda çalıştırmak için:
        npm start 