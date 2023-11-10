import axios from "axios";
import { FormEvent, useState } from "react";

function API() {
  const [stockcode, setStockcode] = useState("");
  const handleClick = async (e: FormEvent) => {
    e.preventDefault();

    const options = {
      params: {
        category: "inspire",
      },

      headers: {
        "Content-type": "application/json",
        "X-Theysaidso-Api-Secret": "ycrgWBdxsSmZFQ2vrXLEkIqB0XLQx40OAtgPw2D8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    try {
      const response = await axios.get("https://quotes.rest/qod", options);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <label htmlFor="stockCodeTextBox">Stock Code Tetx Box</label>
        <input
          type="text"
          id="stockCodeTextBox"
          autoComplete="off"
          onChange={(e) => setStockcode(e.target.value)}
          value={stockcode}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default API;
