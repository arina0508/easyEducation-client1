import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import axios from "../axios";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const router = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        console.log(backendUrl);
        const response = await axios.post("auth/login", { ...values });
        if (response.status != 200) {
          throw new Error("Ошибка авторизации");
        }
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router("/");
      } catch (err) {}
    },
  });
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center justify-between p-5 w-[60vw] min-h-[300px] bg-white shadow-md rounded-md">
          <Typography fontSize="large">Авторизация</Typography>
          <TextField
            label="Email"
            value={formik.values.email}
            name="email"
            id="email"
            fullWidth
            onChange={formik.handleChange}
          />
          <TextField
            label="Пароль"
            type="password"
            value={formik.values.password}
            fullWidth
            name="password"
            id="password"
            onChange={formik.handleChange}
          />
          <Box className="flex flex-col gap-2 w-full">
            <Link to="/register">
              <Typography
                fontSize="small"
                textAlign="right"
                className="underline"
              >
                Нет аккаунта? Зарегистрируйтесь
              </Typography>
            </Link>
            <Button variant="contained" fullWidth type="submit">
              Войти
            </Button>
          </Box>
        </div>
      </form>
    </div>
  );
}
