import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export function Support() {
  return (
    <div>
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
        <h1 className="text-5xl ">поддержка</h1>
        <div></div>
      </header>
      <p className="text-center pt-10 mx-96 text-lg">Популярные вопросы</p>
      <div className=" pt-10 px-64">
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Как вы подбираете репетиторов?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Наша команда тщательно проверяет каждого репетитора, уделяя особое
              внимание их квалификации и специализации. Мы обращаем внимание на
              личные качества репетитора, такие как терпимость,
              коммуникабельность и понимание потребностей ученика.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Что делать, если репетитор не подошел?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Для этого вам нужно в личном кабинете в расписании нажать на
              занятие и отменить его, заполнив анкету с указанием причины
              отказа.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Я хочу стать репетитором. Что делать?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Откройте страницу "Стать репетитором". Ознакомтесь с информацией и
              заполните анкету. После успешного анкетирования с вами свяжется
              отдел кадров.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="flex flex-col items-center mt-10">
        <p className="text-center mb-4">Не нашли ответ на свой вопрос?</p>
        <Button
          className="w-[180px] justify-center items-center"
          variant="contained"
          color="success"
          style={{ textTransform: "none", borderRadius: "20px" }}
        >
          Задать вопрос
        </Button>
      </div>
    </div>
  );
}
