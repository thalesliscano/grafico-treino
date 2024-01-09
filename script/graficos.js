"use strict";

let data1,
  data2,
  data3 = null;
let labels = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];
$.getJSON("data.json", function (result) {
  console.log(result);

  data1 = result.data1;
  data2 = result.data2;
  data3 = result.data3;
  console.log(data1, data2, data3);

  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          type: "line",
          label: "Dado1",
          data: data1,
          borderWidth: 1,
          background: "rgb(255,99,132)",
        },
        {
          label: "Dado2",
          data: data2,
          background: "rgb(20,99,132)",
        },
        {
          label: "Dado3",
          data: data3,
          background: "rgb(20,255,132)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

// const config = {
//   type: "line",
//   data: data,
//   options: {},
// };

// const myChart = new Chart(document.getElementById("myChart"), config);
