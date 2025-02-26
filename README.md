# SmartBook Project

## 🚀 Introduction
SmartBook is a Django-based application that allows users to fetch and save books from Project Gutenberg using their book IDs. The app provides an API to access stored books and track user interactions.

---

## 🛠️ Setup Instructions

### 1️⃣ Prerequisites
Ensure you have the following installed:
- **Python 3.8+**
- **pip** (comes with Python)
- **virtualenv** (recommended)
- **PostgreSQL** (optional for production)

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/smartbook.git
cd smartbook
```

### 3️⃣ Create a Virtual Environment & Activate It
```sh
python -m venv venv
```
- **Windows**:
  ```sh
  venv\Scripts\activate
  ```
- **Mac/Linux**:
  ```sh
  source venv/bin/activate
  ```

### 4️⃣ Install Dependencies
```sh
pip install -r requirements.txt
pip install -r requirements-dev.txt  # For development dependencies
```

### 5️⃣ Set Up Environment Variables
Copy the sample `.env` file and configure it:
```sh
cp env.sample .env
```
Edit `.env` to include your database credentials and settings.

### 6️⃣ Apply Migrations
```sh
python manage.py migrate
```

### 7️⃣ Create a Superuser (For Admin Panel)
```sh
python manage.py createsuperuser
```
Follow the prompt to set up your admin credentials.

### 8️⃣ Run the Development Server
```sh
python manage.py runserver
```
The project will be accessible at:
```
http://127.0.0.1:8000/
```

---

## 🏗️ Project Structure
```
smartbook/            # Main project folder
│── manage.py         # Django CLI script
│── db.sqlite3        # SQLite Database (default, replaceable with PostgreSQL)
│── .env              # Environment variables (ignored in Git)
│── books/            # Books app (fetches and stores books)
│   │── views.py      # API Views
│   │── models.py     # Database models
│   │── urls.py       # URL configuration
│   │── serializers.py  # DRF Serializers
│── users/            # User authentication app
│── scripts/          # Custom scripts
│── smartbook/        # Project settings and configuration
│── requirements.txt  # Project dependencies
│── README.md         # Documentation
```

---

## 📜 API Endpoints
The following API endpoints are available:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/books/` | GET | Fetch all books |
| `/api/books/<id>/` | GET | Fetch a specific book by ID |
| `/api/books/` | POST | Add a new book by Gutenberg ID |
| `/api/users/` | GET | Fetch user details |

Use tools like **Postman** or **cURL** to test the API.

---

## 🔍 Running Tests
To ensure everything works correctly, run:
```sh
python manage.py test books
pytest  # If using pytest
```

---

## 🚀 Deployment
For production, set up **PostgreSQL** and configure your environment:
```sh
DATABASE_URL=postgres://user:password@localhost:5432/smartbook
```
Use **Gunicorn and Nginx** or **Heroku** for deployment.

---

## 📜 License
This project is licensed under the MIT License.

## 💡 Contributing
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

---

💬 **Need Help?** Feel free to open an issue or reach out!

---
Happy Coding! 🎉
