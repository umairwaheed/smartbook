# SmartBook

SmartBook is a Django-based application designed to fetch, store, and analyze books from Project Gutenberg using their book IDs. It provides APIs for accessing stored books and tracking user interactions.

## Table of Contents
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Create a Virtual Environment & Activate It](#create-a-virtual-environment--activate-it)
  - [Install Dependencies](#install-dependencies)
  - [Set Up Environment Variables](#set-up-environment-variables)
  - [Apply Migrations](#apply-migrations)
  - [Create a Superuser](#create-a-superuser)
  - [Run the Development Server](#run-the-development-server)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
  - [Book Fetching](#book-fetching)
  - [User Management](#user-management)
  - [Frontend Integration](#frontend-integration)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Python 3.13+
- pip (comes with Python)
- virtualenv (recommended)

### Clone the Repository

```bash
git clone https://github.com/umairwaheed/smartbook.git
cd smartbook
```

### Create a Virtual Environment & Activate It

```bash
python -m venv venv
```

- **Windows:**
  ```bash
  venv\Scripts\activate
  ```

- **Mac/Linux:**
  ```bash
  source venv/bin/activate
  ```

### Install Dependencies

```bash
pip install -r requirements-dev.txt
cd frontend; npm install
```

### Set Up Environment Variables

Copy the sample environment file and adjust settings as needed:

```bash
cp env.sample .env
```

Edit the `.env` file to configure your database and other settings.

### Apply Migrations

```bash
python manage.py migrate
```

### Create a Superuser

```bash
python manage.py createsuperuser
```

### Run the Development Server

```bash
cd frontend; npm run dev
cd ..; ./scripts/watch
python manage.py runserver
```

Access the application at `http://127.0.0.1:8000/`.

## Project Structure

The project's directory structure is organized as follows:

```
smartbook/
├── books/                  # Book-related functionalities
├── frontend/               # React frontend application
├── scripts/                # Utility scripts
├── smartbook/              # Core project settings and configurations
├── users/                  # User management and authentication
├── .dockerignore           # Docker ignore file
├── .flake8                 # Flake8 configuration
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── env.sample              # Sample environment variables file
├── manage.py               # Django management script
├── pyproject.toml          # Project configuration
├── requirements-dev.txt    # Development dependencies
└── requirements.txt        # Production dependencies
```

## Key Features

### Book Fetching

Users can fetch and save books from Project Gutenberg by providing the book's ID. The application retrieves the book's content and stores it in the database for analysis and reading.

### User Management

The application includes user authentication and profile management, allowing users to track their interactions with the books.

### Frontend Integration

A React-based frontend provides an interactive user interface for book exploration and analysis.

## Running Tests

To run the test suite using `pytest`, execute:

```bash
pytest
```

Ensure all dependencies from `requirements-dev.txt` are installed.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
