import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Paper } from "@mui/material";
import Footer from "../components/Footer/Footer";

export function HowTheServiceWorks() {
  return (
    <div>
      <div className="pb-10">
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
          <h1 className="text-5xl ">КАК РАБОТАЕТ СЕРВИС</h1>
          <div></div>
        </header>
        <p className="text-center pt-10 mx-96 text-lg">
          Наши цели - предоставить вам доступ к квалифицированным репетиторам,
          обеспечивающим наилучшее образовательное обслуживание. Мы уверены, что
          правильный репетитор может сделать большую разницу в вашем
          образовании, и мы здесь, чтобы вам в этом помочь. Начните поиск и
          двигайтесь к успеху в обучении!
        </p>
        <div className="grid grid-cols-4 items-center pt-20">
          <div></div>
          <div className=" h-120 w-140">
            <img src="/img/serv1.jpg" alt="" />
          </div>
          <p className=" pl-10">
            Вам нужно начать с заполнения заявки. Мы зададим вам несколько
            вопросов, чтобы понять ваши потребности, такие как предмет, уровень
            сложности, бюджет и расписание. Это поможет нам лучше понять, какого
            репетитора вы ищете.
          </p>

          <div></div>
        </div>
        <div className="grid grid-cols-4 items-center pt-20">
          <div></div>

          <p className=" pr-10">
            Наши алгоритмы быстро анализируют ваш запрос и сравнивают его с
            нашей базой данных опытных репетиторов. Мы учитываем ваши
            предпочтения и требования, чтобы найти наилучшего кандидата.
          </p>
          <div className=" h-120 w-140">
            <img src="/img/serv2.jpg" alt="" />
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-4 items-center pt-20">
          <div></div>
          <div className=" h-120 w-140">
            <img src="/img/serv3.jpg" alt="" />
          </div>
          <p className=" pl-10">
            Вы получите список репетиторов, которые соответствуют вашим
            критериям. Каждый профиль включает информацию о преподавателе, его
            опыте, отзывах от других учеников и стоимости занятий.
          </p>

          <div></div>
        </div>
        <div className="grid grid-cols-4 items-center pt-20">
          <div></div>

          <p className=" pr-10">
            Выберите репетитора, который вас заинтересовал, и свяжитесь с ним
            через нашу платформу. Вы можете обсудить детали уроков, расписание и
            оплату.
          </p>
          <div className=" h-120 w-140">
            <img src="/img/serv4.jpg" alt="" />
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-4 items-center pt-20">
          <div></div>
          <div className=" h-120 w-140">
            <img src="/img/serv5.jpg" alt="" />
          </div>
          <p className=" pl-10">
            Начните занятия и следуйте вашему учебному плану. Если у вас
            возникнут вопросы или пожелания, мы всегда здесь, чтобы помочь.
          </p>

          <div></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
