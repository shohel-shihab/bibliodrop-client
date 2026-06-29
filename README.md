# 📚 BiblioDrop Client

BiblioDrop is a modern library management and book delivery platform that connects readers with local libraries and independent book owners. The platform allows users to discover books, request doorstep delivery, manage reading history, and review books through an intuitive and responsive web application.

---

## 🌐 Live Website

**Client:** https://your-client-url.vercel.app

**Server:** https://your-server-url.vercel.app

---

## ✨ Features

### 👤 Authentication

* Secure authentication with Better Auth
* Email & Password Login
* Google Sign-In
* Protected Routes
* Role-Based Access Control (Reader, Librarian, Admin)

### 📚 Reader Features

* Browse all available books
* Search and filter books
* View detailed book information
* Request doorstep delivery
* Stripe payment integration
* Delivery history
* Reading list
* Book reviews and ratings
* User dashboard with analytics

### 📖 Librarian Features

* Add new books
* Update existing books
* Delete books
* View own inventory
* Dashboard overview
* Book status management

### 🛠️ Admin Features

* Manage all users
* Approve or reject books
* Publish or unpublish books
* Delete books
* Dashboard analytics
* Manage pending book requests

### 📊 Dashboard

* Interactive charts using Recharts
* Statistics overview
* Delivery reports
* Reading statistics
* Book category visualization

### 🎨 UI Features

* Responsive design
* Modern animations with Framer Motion
* Beautiful dashboard
* Mobile-friendly layout
* Loading states
* Toast notifications
* Professional About page
* Contact page
* Custom 404 page

---

## 🚀 Technologies Used

### Frontend

* Next.js 16 (App Router)
* React 19
* Tailwind CSS
* Framer Motion
* HeroUI
* React Icons
* Recharts
* React Hot Toast

### Authentication

* Better Auth

### Payment

* Stripe Checkout

### Deployment

* Vercel

---

## 📂 Project Structure

```
src/
│
├── app/
├── components/
├── hooks/
├── lib/
├── providers/
├── utils/
└── public/
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/bibliodrop-client.git
```

Go to the project folder:

```bash
cd bibliodrop-client
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_SERVER_URL=
NEXT_PUBLIC_BETTER_AUTH_URL=
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🔒 Environment Variables

```env
NEXT_PUBLIC_SERVER_URL=

NEXT_PUBLIC_BETTER_AUTH_URL=
```

---

## 📱 Responsive Design

* Desktop
* Tablet
* Mobile

---

## 🎯 Future Improvements

* Wishlist functionality
* Real-time notifications
* Email notifications
* Book recommendations
* Advanced search filters
* Dark mode
* Multi-language support

---

## 👨‍💻 Author

**Shohel Rana Shihab**

Computer Science & Engineering Student

Green University of Bangladesh

GitHub: https://github.com/shohel-shihab

---

## 📄 License

This project is developed for educational and portfolio purposes.
