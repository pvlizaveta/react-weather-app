import React from "react";
import jquery from "jquery";

export default function Image(props) {
  var backImg = chooseImg(props.description);
  function chooseImg(description) {
    if (description === "clear sky") {
      return "url(https://img.freepik.com/free-photo/sunshine-clouds-sky-during-morning-background-blue-white-pastel-heaven-soft-focus-lens-flare-sunlight-abstract-blurred-cyan-gradient-peaceful-nature-open-view-out-windows-beautiful-summer-spring_1253-1092.jpg?size=626&ext=jpg&ga=GA1.2.2026981598.1618272000)";
    }
    if (description === "scattered clouds") {
      return (
        <img
          css="background-image"
          src="http://img.freepik.com/free-photo/sunshine-clouds-sky-during-morning-background-blue-white-pastel-heaven-soft-focus-lens-flare-sunlight-abstract-blurred-cyan-gradient-peaceful-nature-open-view-out-windows-beautiful-summer-spring_1253-1092.jpg?size=626&ext=jpg&ga=GA1.2.2026981598.1618272000"
          alt="few clouds"
        />
      );
    } else {
      return "hello";
    }
  }

  return backImg;
}
