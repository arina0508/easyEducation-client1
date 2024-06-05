import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { repetitors } from "../data";

export const RepetitorMore = () => {
  const { repetitorId } = useParams();
  const repetitor = repetitors.find((rep) => rep.id === parseInt(repetitorId));

  if (!repetitor) {
    return <div>Репетитор не найден</div>;
  }

  return (
    <div>
      <div className="w-full grid grid-cols-3 items-center p-5 mt-14">
        <Link to="/rep" className="w-[140px] rounded-md ml-8">
          <button
            variant="text"
            color="inherit"
            style={{ textTransform: "none", borderRadius: "20px" }}
          >
            Назад
          </button>
        </Link>
        <h1 className="text-6xl pb-12">Описание репетитора</h1>
        <div></div>
      </div>
      <div className="grid grid-cols-2 p-5">
        <div className="flex flex-col items-center">
          <img
            className="w-[380px] h-[540px]"
            src={repetitor.img}
            alt={`${repetitor.firstName} ${repetitor.lastName}`}
          />

          <div className="text-center text-xl mt-6 ">
            <p>
              {repetitor.firstName} {repetitor.lastName}
            </p>
            <div className=" my-6">
              <Button
                className="w-[180px] justify-center items-center"
                variant="contained"
                color="success"
                style={{ textTransform: "none", borderRadius: "20px" }}
              >
                Записаться
              </Button>
            </div>
          </div>
        </div>
        <div>
          <p className=" text-xl leading-relaxed pr-64">
            {repetitor.description}
          </p>
          <div className=" mt-10">
            <p className=" text-xl leading-relaxed pr-64">
              {repetitor.education}
            </p>
            <p className=" text-xl leading-relaxed pr-64">
              {repetitor.qualification}
            </p>
            <p className=" text-xl leading-relaxed pr-64">
              Стаж -{repetitor.workExperience}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10"></div>
    </div>
  );
};
