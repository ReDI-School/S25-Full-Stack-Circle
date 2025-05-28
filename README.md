# 📦 S25-Full-Stack-Circle

- This project is a collaborative effort by ReDI School full-stack students aimed at improving teamwork, version control practices, and end-to-end development skills.
- The project follows a real-world development workflow, simulating a professional environment where team members work on different features, open pull requests, conduct code reviews, and maintain clean, modular code.

## 📁 Project Structure

```
full_stack_circle/
├── frontend/   # React + Vite + CSS Modules
├── backend/    # Express + Prisma + PostgreSQL
└── README.md   
```

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/ReDI-School/S25-Full-Stack-Circle.git
cd S25-Full-Stack-Circle
```

### 2. Start the frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend will run at: http://localhost:5173

### ✅ Backend 

## ⚙ Tech Stack

- Node.js
- Express
- Prisma ORM
- PostgreSQL
  
### Setup `.env`:

```env
DATABASE_URL="you can use local postgres DB or use the link in .env.text"
```

### 3. Start the backend

```bash
cd backend
npm install
npx prisma migrate deploy    // in case u use online db, which is true in our case Render
npm start
```

Backend will run at: http://localhost:4000

>[!note]
> In case u use local db. then u have to run

> ```
> npx prisma migrate dev --name init 
> ```

> Actually you don't need to run any of npx prisma migrate, except if u made changes to Schema.prisma file

- (Optional) Seed the DB:
```bash
npm run seed
```

## 🧪 Testing

- Use the included Postman collection in `postman/`
- Import collection and environment
- Set `{{baseUrl}}` to `http://localhost:4000`

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
Suleman Ahmed Khan
Julita Lapinska
Zakaria Sebai
Muhammad Shehbaz

```
