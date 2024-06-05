import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import axios from "../axios";
import { Link, useNavigate } from "react-router-dom";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function RegisterPage() {
  const router = useNavigate();
  const formik = useFormik({
    initialValues: {
      avatar: "",
      FIO: "",
      dateOfBirth: "",
      gender: "",
      phone: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post("auth/register", { ...values });
        if (response.status != 201) {
          throw new Error("Ошибка регистрации");
        }
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router("/");
      } catch (err) {
        alert(`${err}`);
      }
    },
  });

  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (!files.length) return;

    const file = files[0]; // Get the first file
    const reader = new FileReader();
    reader.onload = async () => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "chat-app");
      formData.append("cloud_name", "dgfisnrrt");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dgfisnrrt/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        if (!response.ok) {
          throw new Error("Failed to upload image");
        }
        const data = await response.json();
        const imageUrl = data.url.toString();

        // Update form with the image URL
        formik.setFieldValue("avatar", imageUrl);
      } catch (err) {
        console.error("Error uploading file:", err);
        // Handle upload error (e.g., display error message)
      }
    };
    reader.readAsDataURL(file); // Read the file as a Data URL
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center justify-between p-5 gap-5 w-[60vw] min-h-[400px] bg-white shadow-md rounded-md">
          <Typography fontSize="large">Регистрация</Typography>
          {formik.values.avatar && (
            <Box>
              <img
                src={formik.values.avatar}
                className="w-40 h-40"
                alt="Выбранное изображение"
              />
            </Box>
          )}
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
          >
            <Box>Добавьте изображения</Box>
            <VisuallyHiddenInput
              multiple
              type="file"
              onChange={handleFileChange}
            />
          </Button>
          <TextField
            label="ФИО"
            value={formik.values.FIO}
            name="FIO"
            id="FIO"
            fullWidth
            onChange={formik.handleChange}
          />
          <TextField
            label="Дата рождения"
            value={formik.values.dateOfBirth}
            name="dateOfBirth"
            id="dateOfBirth"
            fullWidth
            onChange={formik.handleChange}
          />
          <TextField
            label="Пол"
            value={formik.values.gender}
            name="gender"
            id="gender"
            fullWidth
            onChange={formik.handleChange}
          />
          <TextField
            label="Номер телефона"
            value={formik.values.phone}
            name="phone"
            id="phone"
            fullWidth
            onChange={formik.handleChange}
          />
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
            <Link to="/login">
              <Typography
                fontSize="small"
                textAlign="right"
                className="underline"
              >
                Есть аккаунт? Авторизуйтесь
              </Typography>
            </Link>
            <Button variant="contained" fullWidth type="submit">
              Зарегистрироваться
            </Button>
          </Box>
        </div>
      </form>
    </div>
  );
}
