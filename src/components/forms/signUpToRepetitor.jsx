import { useFormik } from "formik";
import axios from "../../axios";
import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import "moment/locale/ru";
import { ruRU } from "@mui/x-date-pickers/locales";

moment().locale("ru");

export default function SignUpToRepetitor({ repetitor, closeModal }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const formik = useFormik({
    initialValues: {
      repetitorId: repetitor._id,
      date: "",
    },
    onSubmit: async (values) => {
      try {
        if (!selectedDate) throw new Error("Выберите дату!");
        const formattedDate = moment(selectedDate).format(
          "YYYY-MM-DDTHH:mm:ssZ"
        );
        values.date = formattedDate;

        const response = await axios.post(
          `/repetitors/${values.repetitorId}/signup`,
          {
            ...values,
          }
        );
        if (response.status != 201) {
          throw new Error("Ошибка записи к репетитору");
        }
        alert(
          `${response.data.message} на ${moment(selectedDate).format(
            "MMMM Do YYYY, h:mm:ss a"
          )}`
        );
        closeModal();
      } catch (err) {
        alert(`${err}`);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
      <Box className="flex flex-col items-center gap-5">
        <img src={repetitor.avatar} className="w-40 h-52" />
        <TextField
          value={repetitor.FIO}
          fullWidth
          disabled
          label="ФИО репетитора"
        />
        <TextField
          value={repetitor.subject}
          fullWidth
          disabled
          label="Предмет"
        />
        <TextField
          value={repetitor.education}
          fullWidth
          disabled
          label="Образование"
        />
        <TextField
          value={repetitor.qualification}
          fullWidth
          disabled
          label="Квалификация"
        />
        <TextField
          value={repetitor.experience}
          fullWidth
          disabled
          label="Стаж"
        />
        <TextareaAutosize
          className="w-full text-sm font-sans font-normal leading-5 px-3 py-2 rounded-md shadow-md shadow-slate-100  focus:shadow-outline-purple focus:shadow-lg border border-solid border-gray-300  bg-white  text-slate-900 focus-visible:outline-0 box-border disabled:text-[#b1b3b6]"
          placeholder="description"
          disabled
          value={repetitor.description}
          label="Описание"
          aria-label="Описание"
        />
        <LocalizationProvider
          dateAdapter={AdapterMoment}
          localeText={
            ruRU.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <DateTimePicker
            className="w-full"
            disablePast
            onChange={(newValue) => {
              const today = new Date();
              if (newValue < today) {
                console.error("Нельзя выбрать дату до сегодняшней!");
              } else {
                setSelectedDate(newValue);
              }
            }}
          />
        </LocalizationProvider>
        <Button
          className="self-end"
          variant="contained"
          fullWidth
          type="submit"
        >
          Записаться
        </Button>
      </Box>
    </form>
  );
}
