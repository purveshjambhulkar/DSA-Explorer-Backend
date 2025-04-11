# DSA Explorer Backend 🚀  

A **Node.js + Express** backend for **DSA Explorer**, handling API requests for DSA questions, user progress tracking, and admin features.  

🔗 **Frontend Repo:** [DSA Explorer Frontend](https://github.com/purveshjambhulkar/DSA-Explorer-Frontend)  

---

## 📌 Features  
✅ REST API for fetching DSA questions  
✅ User authentication & progress tracking  
✅ Admin panel for adding/editing questions  
✅ CORS enabled for frontend integration  
✅ Deployed on **Vercel** for seamless access  

---

## 🚀 Installation & Setup  

### **1️⃣ Clone the repository**  
```sh
git clone https://github.com/purveshjambhulkar/DSA-Explorer-Backend.git
cd DSA-Explorer-Backend
```

### **2️⃣ Install dependencies**  
```sh
npm install
```

### **3️⃣ Set up environment variables**  
Create a `.env` file in the root and add the following:  
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CORS_ORIGIN=https://dsa-explorer-frontend.vercel.app
```

### **4️⃣ Start the development server**  
```sh
npm run dev
```
This will start the API at `http://localhost:5000`.

---

## 🌐 Deployment (Vercel)  
To deploy on **Vercel**, follow these steps:  
1. Push your code to **GitHub**  
2. Go to [Vercel Dashboard](https://vercel.com/)  
3. Select **Import Project** → Connect your repo  
4. Add the following **environment variables**:  
   - `MONGO_URI`
   - `JWT_SECRET`
   - `CORS_ORIGIN=https://dsa-explorer-frontend.vercel.app`
5. Click **Deploy** 🚀  

---

## 🛠 Tech Stack  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Deployment:** Vercel  



---

### 👨‍💻 Developed by **[Purvesh Jambhulkar](https://github.com/purveshjambhulkar)**  
💡 Feel free to **star** ⭐ the repo if you find it useful!  
