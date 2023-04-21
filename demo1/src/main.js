import express from "express";
import dotenv from "dotenv";
import ProductRouter from "./routes/products";
import UserRouter from "./routes/auth";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(ProductRouter);
app.use(cors());
app.use("/api", UserRouter);

mongoose
  .connect("mongodb://localhost:27017/demo")
  .then(() => {
    console.log("Db is connected");
  })
  .catch(() => {
    console.log("failed connect");
  });

export const viteNodeApp = app;

// Tạo workspace : default my workspace
// Tạo collection ( tạo thư mục chứa)
// Tạo request

// try/catch
// npm i dotenv --save
// npm i concurrently -g
// routes -> sử dụng express.Router
// controllers

// 1: Sử dụng vitejs để xây dựng môi trường chạy project

// 2: Validate dữ liệu trước khi gửi lên server
// 3: Đăng ký, đăng nhập ( json-server-auth )

// 1. Làm quiz trong tuần này ( 4 quiz )
// 2. Assignment 1/ lab 1 -> 4

//**** Cài đặt môi trường Vitejs */
// Bước 1: npm i vite vite-plugin-node -D
// Bước 2: Tạo 1 file vite.config.js -> copy của thầy
// Bước 3: Thay đổi file package.json
//     "dev": "concurrently vite \"json-server --watch db.json\""
// Bước 4: Thêm code cuối file app.js
//     export const viteNodeApp = app;
// Bước 5: npm run dev
