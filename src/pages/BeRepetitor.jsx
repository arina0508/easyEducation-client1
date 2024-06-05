import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Footer from "../components/Footer/Footer";

export function BeRepetitor() {
  return (
    <div>
      <div className="mb-10">
        <header className="w-full grid grid-cols-3 items-center p-5 mt-14">
          <Link to="/" className="w-[140px] rounded-md ml-8">
            <Button
              variant="text"
              color="inherit"
              style={{ textTransform: "none", borderRadius: "20px" }}
            >
              Назад
            </Button>
          </Link>
          <h1 className="text-6xl ">как стать репетитором</h1>
          <div></div>
        </header>
        <p className="text-center pt-10 mx-96 text-lg">
          Основные шаги, которые необходимо выполнить, чтобы стать репетитором
          на сайте для репетиторов:
        </p>
        <div className="grid grid-cols-3 items-center pt-10">
          <div></div>
          <p className="pl-10">
            1. Подайте заявку, заполнив анкету. В профиле необходимо указать
            свою квалификацию, опыт работы, а также другие важные
            характеристики.
          </p>
          <div></div>
        </div>
        <div className="grid grid-cols-3 items-center pt-10">
          <div></div>
          <p className="pl-10">
            2.Пройдите собеседование. После успешного прохождения анкетирования
            с вами свяжется отдел кадров для собеседования. Начните поиск
            учеников.
          </p>
          <div></div>
        </div>
        <div className="grid grid-cols-3 items-center pt-10">
          <div></div>
          <p className="pl-10">
            3. После успеха на всех этапах вы оформляете профиль, заполняя
            дополнительными данными.
          </p>
          <div></div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <p className="text-center mb-4"></p>
          <Button
            className="w-[180px] justify-center items-center"
            variant="contained"
            color="success"
            style={{ textTransform: "none", borderRadius: "20px" }}
          >
            Заполнить анкету
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
