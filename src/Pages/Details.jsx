import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

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
      })
      .catch((error) => {
        console.log(error);
      });
  }, [foodID]);

  return (
    <>
      <div className="detail-container">
        <div className="detail-info">
          <h3 className="text-capitalize">{allDetail && allDetail.name}</h3>
          <p>
            <i class="bi bi-pen"></i> {allDetail && allDetail.description}
          </p>
          <p>
            <i class="bi bi-cart3"></i>{" "}
            {allDetail &&
              allDetail.ingredients.map((m, index) => {
                return <span key={index}>{(index ? ", " : "") + m}</span>;
              })}
          </p>
        </div>
        <img src={allDetail && allDetail.imageUrl} />
      </div>
      <div className="detail-footer">
        <div className="detail-icons">
          <i className="bi bi-star-fill"></i> {allDetail && allDetail.rating} |{" "}
          <i className="bi bi-heart-fill" style={{ color: "#DD4A48" }}></i>{" "}
          {allDetail && allDetail.totalLikes}
        </div>
      </div>
    </>
  );
}

export default Details;
