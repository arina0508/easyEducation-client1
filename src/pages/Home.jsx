import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Footer from "../components/Footer/Footer";

export const Home = () => {
  const token = !!localStorage.getItem("token");
  return (
    <div className=" ">
      {/* хэдер */}
      <div className="w-full grid grid-cols-3 items-center p-5 ">
        <div></div>
        <div className="mt-5">
          <h1 className="text-6xl">Easy</h1>
          <h1 className="text-6xl">Education</h1>
        </div>
        <div className="flex justify-end items-center">
          <Link to={token ? "/profile" : "/login"}>
            <Button
              className="w-[180px] rounded-md"
              variant="outlined"
              color="inherit"
              style={{ textTransform: "none", borderRadius: "20px" }}
            >
              {token ? "Профиль" : "Войти"}
            </Button>
          </Link>
        </div>
      </div>
      {/* меню */}
      <div className="flex w-full justify-center gap-16 mt-8">
        <Link to="/rep" className="text-xl hover:underline">
          репетиторы{" "}
        </Link>
        <Link to="/service" className="text-xl hover:underline">
          как работает сервис{" "}
        </Link>
        <Link to="/support" className="text-xl hover:underline">
          поддержка{" "}
        </Link>

        <Link to="/berep" className="text-xl hover:underline">
          стать репетитором{" "}
        </Link>
      </div>
      {/* карточки */}
      <div className="text-xl flex w-full items-center justify-center gap-16 pt-16">
        <Link to="/rep">
          <Card sx={{ maxWidth: 410 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image=" ./img/first.jpg "
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  подготовка к ОГЭ/ЕГЭ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to="/rep">
          <Card sx={{ maxWidth: 410 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/img/second.jpg"
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  подготовка домашнего задания
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to="/rep">
          <Card sx={{ maxWidth: 410 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/img/third.jpg"
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  подготовка к вступительным экзаменам
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
      <h2 className="w-full items-center pt-24 text-6xl">
        СТРЕМИМСЯ К ЗАНИЯМ!
      </h2>
      {/* как подбираем репетиторов */}
      <div className="pt-20 px-20 pb-20 flex justify-center">
        <div className="bg-cover bg-center h-[800px] w-[1200px] bg-[url(/img/Frame1.png)]">
          <div className="pl-10 pt-24">
            <div className="max-w-4xl mx-auto">
              <p className="py-14 text-center text-4xl">
                Как мы подбираем репетиторов?
              </p>
              <div className="pt-6">
                <div className="grid-cols-2 justify-start flex space-x-10 pb-10">
                  <img className="w-20 h-20" src="/img/Group 1.png" alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">ОБРАЗОВАНИЕ</h3>
                    <p className="text-gray-600">
                      Наша команда тщательно проверяет каждого репетитора,
                      уделяя особое внимание их квалификации и специализации.
                    </p>
                  </div>
                </div>
                <div className="grid-cols-2 justify-start flex space-x-10 pb-10">
                  <img className="w-20 h-20" src="/img/Group 1.png" alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      ЛИЧНЫЕ КАЧЕСТВА
                    </h3>
                    <p className="text-gray-600">
                      Мы обращаем внимание на личные качества репетитора, такие
                      как терпимость, коммуникабельность и понимание
                      потребностей ученика.
                    </p>
                  </div>
                </div>
                <div className="grid-cols-2 justify-start flex space-x-10 pb-10">
                  <img className="w-20 h-20" src="/img/Group 1.png" alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      ГИБКОСТЬ В РАСПИСАНИИ
                    </h3>
                    <p className="text-gray-600">
                      Наши репетиторы готовы адаптировать свое расписание под
                      ваши потребности.
                    </p>
                  </div>
                </div>
                <div className="grid-cols-2 justify-start flex space-x-10 pb-10">
                  <img className="w-20 h-20" src="/img/Group 1.png" alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">РЕЗУЛЬТАТЫ</h3>
                    <p className="text-gray-600">
                      Счастливые улыбки и уверенность в своих знаниях - это то,
                      что мы стремимся достичь вместе с вами.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* подвал */}
      <Footer />
    </div>
  );
};
