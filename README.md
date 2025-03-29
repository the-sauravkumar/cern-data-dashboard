# **🚀 CERN Data Explorer**  
**Real-time CERN Open Data Visualization Dashboard using FastAPI, PostgreSQL, Celery, Redis, and React.js**  

---


It is an API wrapper and web dashboard for exploring and visualizing CERN's open data. It fetches data from the **CERN Open Data API**, stores it in a PostgreSQL database, and presents it in an interactive dashboard using **React.js** and **Recharts**. Background tasks are handled via **Celery** with **Redis** as a message broker.  

✅ **Tech Stack:**  
- **Backend:** FastAPI, PostgreSQL, SQLAlchemy, Celery, Redis  
- **Frontend:** React.js (TypeScript), Recharts, Axios  
- **Data Processing:** Elasticsearch (optional), Pandas  
- **Deployment:** Docker, Docker-Compose  

---

## **🛠 Features**  
✔ **CERN API Wrapper** – Fetches and processes real-time data  
✔ **Data Storage** – PostgreSQL & Elasticsearch for structured storage  
✔ **Interactive Dashboard** – Charts & graphs using React.js and Recharts  
✔ **Background Processing** – Celery & Redis for async tasks  
✔ **Docker-Ready** – Easy deployment with `docker-compose`  

---

## **📂 Project Structure**  
```
cern-data-explorer/
│── backend/
│   ├── main.py                 # FastAPI entry point
│   ├── cern_api.py             # CERN API Wrapper
│   ├── models.py               # Database models
│   ├── db.py                   # Database connection
│   ├── celery_tasks.py         # Background tasks
│   ├── config.py               # Configuration settings
│   ├── requirements.txt        # Python dependencies
│   ├── Dockerfile              # Backend Dockerfile
│   ├── docker-compose.yml      # Docker Compose file
│
│── frontend/ (React App)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── api.ts               # API Calls
│   │   ├── styles.css
│   ├── package.json
│   ├── Dockerfile               # Frontend Dockerfile
│
│── docker-compose.yml
│── README.md
```

---

## **🔧 Installation & Setup**  

### **1️⃣ Install Dependencies**  
Run the following command to install system packages and dependencies:  

```bash
# Update & Install system dependencies
sudo apt update && sudo apt install -y docker docker-compose postgresql postgresql-contrib redis

# Create & Activate Virtual Environment
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
pip install fastapi uvicorn requests celery redis psycopg2-binary elasticsearch sqlalchemy pandas

# Install Frontend dependencies
npx create-react-app cern-dashboard --template typescript
cd cern-dashboard
npm install recharts axios react-router-dom
```

---

### **2️⃣ Run the Backend (FastAPI Server)**  
#### **🚀 Start FastAPI Server**
```bash
cd backend
uvicorn main:app --reload
```
- Visit API Docs: `http://localhost:8000/docs`

---

### **3️⃣ Run the Frontend (React.js Dashboard)**  
```bash
cd frontend
npm start
```
- Open **`http://localhost:3000/`** to access the CERN Data Dashboard.

---

## **📡 API Endpoints**  
The following endpoints are available in the FastAPI backend:  

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/fetch-data/?query=physics` | Fetch CERN data based on query |
| `POST` | `/fetch-and-store/` | Fetch and store CERN data asynchronously |

---

## **⚙ Background Tasks (Celery & Redis)**  
Celery is used for handling background tasks like fetching and storing large datasets.  

Start Celery Worker:  
```bash
celery -A celery_tasks worker --loglevel=info
```

---

## **🐳 Docker & Deployment**  
The project is fully containerized using Docker and `docker-compose`.  

### **1️⃣ Start All Services**
```bash
docker-compose up --build
```
- **Backend API:** `http://localhost:8000`
- **Frontend Dashboard:** `http://localhost:3000`
- **PostgreSQL Database:** `localhost:5432`
- **Redis:** `localhost:6379`

---

## **📈 Dashboard UI (React.js + Recharts)**  
The frontend allows users to search CERN datasets and visualize them with charts.

### **Example Chart in `App.tsx`**
```tsx
<LineChart width={600} height={300} data={data}>
  <XAxis dataKey="title" />
  <YAxis />
  <Tooltip />
  <Line type="monotone" dataKey="energy" stroke="#4c8bf5" />
</LineChart>
```

---

## **📜 License**  
This project is open-source under the **MIT License**.  

---

## **📌 Summary**  
🚀 **CERN Data Explorer** provides a seamless way to interact with **CERN Open Data**, visualize research data, and analyze trends efficiently.  

✅ **FastAPI Backend** for quick data retrieval  
✅ **PostgreSQL & Elasticsearch** for structured data storage  
✅ **React.js Dashboard** for interactive charts  
✅ **Celery & Redis** for background processing  
✅ **Docker-Ready** for easy deployment  

> **✨ Star the repository on GitHub if you found this useful!** ⭐  
