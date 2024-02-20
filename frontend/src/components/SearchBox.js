import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          className="mr-sm-s ml-sm-5"
        ></Form.Control>

        <Button type="submit" variant="outline-success" className="p-2">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SearchBox;
