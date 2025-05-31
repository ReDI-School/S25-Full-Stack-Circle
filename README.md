```md
# 📦 S25-Full-Stack-Circle

This project is a collaborative effort by ReDI School full-stack students aimed at improving teamwork, version control practices, and end-to-end development skills.

It simulates a real-world development workflow with collaborative feature development, pull requests, code reviews, and clean, modular code practices.

---

## 📁 Project Structure


S25-Full-Stack-Circle/
├── frontend/   # React + Vite + CSS Modules
├── backend/    # Express + Prisma + PostgreSQL
└── README.md

````

---

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/ReDI-School/S25-Full-Stack-Circle.git
cd S25-Full-Stack-Circle
npm install
````

This will automatically install dependencies for both `frontend` and `backend`.

---

### 2. Configure Environment Variables

In `backend/`, create a `.env` file:

```env
DATABASE_URL=""
PORT = 
JWT_SECRET=""
JWT_EXPIRES_IN=

```

> You can use the `.env.text` as a reference.

---

### 3. Start the Project

```bash
npm run start
```

This command:

* Runs Prisma migration and generates Prisma client in the backend
* Starts the Express backend server at: [http://localhost:4000](http://localhost:4000)
* Starts the Vite frontend at: [http://localhost:5173](http://localhost:5173)

---

### 🔄 If You Change `schema.prisma`

If you modify `backend/prisma/schema.prisma`, run:

```bash
cd backend
npx prisma migrate dev --name your_migration_name
```

Or, for a quick dev sync without migration files:

```bash
npx prisma db push && npx prisma generate
```

---

### 🌱 (Optional) Seed the Database

```bash
cd backend
npm run seed
```

---

## ⚙ Tech Stack

* **Frontend**: React + Vite + CSS Modules
* **Backend**: Node.js + Express
* **Database**: PostgreSQL + Prisma ORM

---

## 🧪 API Testing

* Use the included Postman collection in `postman/`
* Set `{{baseUrl}}` to: `http://localhost:4000`

---

## 👨‍💻 Contributors

```
Iman Bajalan
Angelo Centeno
Savitha Muthuramalingam
Sonali Rathod
Daria Parashchenko
Ehighe Aisiri
Marline John
Oluwabusola Ilechukwu
Suleman Ahmed Khan
Bianca Dascalescu
Asligul Safarova
Julita Lapinska
Zakaria Sebai
Muhammad Shehbaz
```