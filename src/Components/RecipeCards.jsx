import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import axios from "axios";
import "../Styles/RecipeCards.css";

function RecipeCards() {
  const [allFoods, setAllFoods] = useState([]);

  const getFood = () => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/api/v1/foods`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          apiKey: `${process.env.REACT_APP_APIKEY}`,
        },
      })
      .then((res) => {
        setAllFoods(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Oops!!! Please reload the page.");
      });
  };

  useEffect(() => {
    getFood();
  }, []);

  const handleLikes = (id, isLike) => {
    if (!isLike) {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_BASEURL}/api/v1/like`,
        data: {
          foodId: id,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          apiKey: `${process.env.REACT_APP_APIKEY}`,
        },
      })
        .then((res) => {
          console.log(res);
          getFood();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_BASEURL}/api/v1/unlike`,
        data: {
          foodId: id,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          apiKey: `${process.env.REACT_APP_APIKEY}`,
        },
      })
        .then((res) => {
          console.log(res);
          getFood();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      {allFoods &&
        allFoods.map((food) => {
          return (
            <Col key={food.id} md={4} className="food-card">
              <Card
                className="food-card-2 flex-column"
                style={{ width: "20rem" }}
              >
                <Card.Img
                  variant="top"
                  src={food.imageUrl}
                  className=""
                  style={{ height: "340px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>
                    <h5>{food.name}</h5>
                    <span>
                      <i
                        className="bi bi-star-fill"
                        style={{ color: "#FFFF00" }}
                      ></i>{" "}
                      {food.rating}{" "}
                    </span>
                    <span>
                      <i
                        className="bi bi-hand-thumbs-up-fill"
                        style={{
                          color: `${food.isLike ? "#DD4A48" : "#F5EEDC"}`,
                          cursor: "pointer",
                        }}
                        onClick={() => handleLikes(food.id, food.isLike)}
                      ></i>{" "}
                      {food.totalLikes}
                    </span>{" "}
                  </Card.Title>
                  <a key={food.id} href={`/details/${food.id}`}>
                    <i className="bi bi-info-circle"></i>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </>
  );
}

export default RecipeCards;
