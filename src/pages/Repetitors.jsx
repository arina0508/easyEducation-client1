import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import Footer from "../components/Footer/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";
import axios from "../axios";
import { ModalContext } from "../components/modalContext";
import SignUpToRepetitor from "../components/forms/signUpToRepetitor";

export function Repetitors() {
  const [repetitors, setRepetitors] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [examE, setExamE] = useState(true);
  const [examO, setExamO] = useState(true);
  const { openModal, closeModal } = useContext(ModalContext);

  const filteredData =
    repetitors &&
    repetitors.filter((repetitor) => {
      const searchTextLower = searchTerm.toLowerCase();
      const hasExamEorO =
        (examE && repetitor.examE) || (examO && repetitor.examO);
      const hasAllFalse =
        !examE && !examO && !repetitor.examE && !repetitor.examO;

      return (
        repetitor.subject.toLowerCase().includes(searchTextLower) &&
        (hasExamEorO || hasAllFalse)
      );
    });

  const handleSignUpClass = async (repetitor) => {
    openModal({
      component: SignUpToRepetitor,
      props: { closeModal, repetitor },
      title: `Запись к репетитору ${repetitor.FIO}`,
    });
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get("/repetitors");
      setRepetitors(response.data);
    })();
  }, []);

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
        <h1 className="text-6xl ">РЕПЕТИТОРЫ</h1>
        <div></div>
      </header>
      <div className="flex justify-center items-center mt-10 mb-10">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={examO} onChange={() => setExamO(!examO)} />
            }
            label="ОГЭ"
          />
          <FormControlLabel
            control={
              <Checkbox checked={examE} onChange={() => setExamE(!examE)} />
            }
            label="ЕГЭ"
          />
        </FormGroup>
        <TextField
          label="Поиск"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-around gap-5 mt-5">
        {repetitors &&
          filteredData.map((repetitor, i) => (
            <Card key={i}>
              <Link to={`/repmore/${repetitor._id}`} key={i}>
                <CardActionArea>
                  <img
                    className="w-full h-[340px]"
                    src={repetitor.avatar}
                    alt={`${repetitor.firstName} ${repetitor.lastName}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                      {repetitor.FIO}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      {repetitor.subject}
                    </Typography>
                    {repetitor.examE && (
                      <Typography>Подготовка к ЕГЭ</Typography>
                    )}
                    {repetitor.examO && (
                      <Typography>Подготовка к ОГЭ</Typography>
                    )}
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleSignUpClass(repetitor)}
                >
                  Записаться
                </Button>
              </CardActions>
            </Card>
          ))}
      </div>
      <Footer />
    </div>
  );
}
