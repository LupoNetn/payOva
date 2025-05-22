# PayOva

**PayOva** is a secure, lightweight platform that enables class representatives to manage the sale of course manuals to students. It ensures secure transactions by generating a **unique transaction ID** for every payment, eliminating fake payment receipts and simplifying verification.

---

## Features

- **Student Portal**
  - Browse and purchase manuals
  - Receive a digital receipt with a unique transaction ID
  - Access payment history

- **Admin (Class Rep) Dashboard**
  - Upload and manage manuals
  - View all payments and filter by date, student, or manual
  - Verify transactions using transaction IDs

- **Secure Payments**
  - Integrated with Paystack or Flutterwave
  - Transaction details stored in Supabase for easy access

---

## Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | React.js, Tailwind CSS    |
| Backend/DB  | Supabase (Database + Auth) |
| Payments    | Paystack or Flutterwave  |
| Auth        | Supabase Auth            |
| State Mgmt  | Context API / Zustand    |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/payova.git
cd payova
