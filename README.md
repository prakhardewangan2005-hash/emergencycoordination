# 🚑 Signal — Emergency Coordination System

![License](https://img.shields.io/badge/license-MIT-green)
![Deploy](https://img.shields.io/badge/deployed-on%20Render-blue)
![Status](https://img.shields.io/badge/status-active-success)
![Made With](https://img.shields.io/badge/made%20with-React%20%2B%20Vite-61DAFB)
![Stars](https://img.shields.io/github/stars/prakhardewangan2005-hash/emergencycoordination?style=social)

🔗 **Live Demo:**  
https://emergencycoordination-1.onrender.com

---

## 🌍 Overview

**Signal** is a real-time emergency coordination platform designed to minimize response time during critical situations by intelligently connecting patients with the nearest suitable hospitals and ambulance services.

The system leverages location-aware matching and automated coordination to eliminate delays caused by manual search and fragmented communication.

---

## ⚡ Problem Statement

In emergency scenarios:
- ⏱️ Response delays can lead to loss of life  
- 📞 Manual coordination between hospitals and ambulances is inefficient  
- 🏥 Patients often reach facilities lacking required specialization  

---

## 💡 Solution

Signal provides an automated, intelligent coordination layer that:
- Detects user location in real time  
- Matches patients with the most appropriate hospital  
- Allocates the nearest available ambulance  
- Reduces human dependency in critical decision-making  

---

## 🛠️ System Workflow

1. Emergency Request Initiation  
   - User submits request with minimal input  
   - Location captured via browser APIs  

2. Matching Engine  
   - Filters hospitals based on specialization  
   - Computes nearest options using distance logic  
   - Selects optimal ambulance based on proximity  

3. Dispatch & Coordination  
   - Ambulance assigned instantly  
   - Request routed to selected hospital  

---

## 🧠 Core Logic (Matching Strategy)

The system uses a simplified decision pipeline:
- 📍 Distance-based filtering (nearest resources)  
- 🏥 Capability matching (hospital specialization)  
- 🚑 Resource availability prioritization  

This modular logic can be extended into a full-scale optimization or ML-based system.

---

## 🚀 Features

- ⚡ Real-time emergency request handling  
- 📍 Location-based intelligent matching  
- 🚑 Automated ambulance allocation  
- 🏥 Hospital specialization filtering  
- 💡 Minimal-input UX for critical situations  
- 🌐 Fully deployed and accessible web interface  

---

## 🧱 Tech Stack

- Frontend: Vite + React  
- Deployment: Render (Static Site Hosting)  
- APIs: Browser Geolocation API  
- Architecture: Client-side SPA (Single Page Application)  

---

## 🏗️ Architecture Overview

User → Request Input → Location Capture → Matching Logic → Hospital + Ambulance Selection → Response Output

---

## 📊 Impact

- ⏱️ Reduces emergency response delay  
- 🏥 Improves hospital allocation accuracy  
- 🚑 Optimizes resource utilization  
- ❤️ Potential to scale into real-world life-saving infrastructure  

---

## ⚠️ Disclaimer

This is a prototype system built for demonstration and learning purposes.  
It does not connect to real emergency services.

---

## 📸 Screenshots

(Add UI screenshots here)

---

## 🧪 Future Improvements

- 📡 Real-time ambulance tracking (GPS integration)  
- 🏥 Live hospital database with bed availability  
- 🤖 ML-based predictive allocation system  
- 📱 Mobile app (Android / iOS)  
- 🔔 Alert and notification system  
- 🌍 Multi-city scalability  

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repo and submit pull requests.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Prakhar Dewangan  
B.Tech ECE, IIIT Allahabad  
