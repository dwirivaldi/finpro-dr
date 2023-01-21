import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/Detail.css";

function Details() {
  const [allDetail, setAllDetail] = useState("");
  const { foodID } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/api/v1/foods/${foodID}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          apiKey: `${process.env.REACT_APP_APIKEY}`,
        },
      })
      .then((response) => {
        setAllDetail(response.data.data);
      });
  }, [foodID]);

  return (
    <>
      <div className="detail-container">
        <div className="detail-info">
          <h3 className="text-capitalize">{allDetail && allDetail.name}</h3>
          <p>{allDetail && allDetail.description}</p>
          <p>
            <i class="bi bi-dash"></i>{" "}
            {allDetail &&
              allDetail.ingredients.map((m, index) => {
                return <span key={index}>{(index ? ", " : "") + m}</span>;
              })}
          </p>
          <div className="detail-icons">
            <i className="bi bi-star-fill"></i> {allDetail && allDetail.rating}{" "}
            <i className="bi bi-heart-fill" style={{ color: "#DD4A48" }}></i>{" "}
            {allDetail && allDetail.totalLikes}
          </div>
        </div>
        <img src={allDetail && allDetail.imageUrl} alt="" />
      </div>
    </>
  );
}

export default Details;
