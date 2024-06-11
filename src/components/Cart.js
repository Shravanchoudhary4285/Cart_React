import React, { useEffect, useState } from "react";
import { Card, CloseButton } from "react-bootstrap";
import axios from "axios";

function Cart() {
  const [data, setdata] = useState([]);

  const GetData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    console.log(response);
    setdata(response.data);
  };

  useEffect(() => {
    GetData();
  }, []);

  const HandleClick = async (id) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log(id);
    console.log(response);
    GetData();
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.map((value, index) => {
        return (
          <div key={index}>
            <Card style={{ width: "17rem" }}>
              <CloseButton
                style={{ position: "relative", left: "90%" }}
                onClick={() => HandleClick(value.id)}
              />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.body}</Card.Text>
                <Card.Text style={{ color: "dark", fontSize: "12px" }}>
                  {Date()}
                </Card.Text>
              </Card.Body>
              <Card.Img variant="top" src={"logo512.png"} />
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
