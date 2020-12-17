//skills fn
const skillsFn = () => {
  //get all the chats element
  const charts = document.querySelectorAll("canvas");

  charts.forEach((chart) => chartFn(chart));
};

const chartFn = (ele) => {
  const id = ele.id;
  switch (id) {
    case "htmlChart":
      htmlChart(ele);
      break;

    case "cssChart":
      cssChart(ele);
      break;

    case "jsChart":
      jsChart(ele);
      break;

    case "reactChart":
      reactChart(ele);
      break;

    case "tsChart":
      tsChart(ele);
      break;
  }
};

const color = () => {
  const themeClass = document.body.className;

  return themeClass == "light" ? "hsl(238, 29%, 16%)" : "hsl(0, 0%, 98%)";
};

const htmlChart = (chart) => {
  let htmlSkillChart = new Chart(chart.getContext("2d"), {
    type: "doughnut",
    data: {
      labels: ["basics", "semantic markup", "accessibility", "canvas"],
      datasets: [
        {
          data: [90, 85, 75, 20],
          backgroundColor: ["#FC5130", "#FD795E", "#FEAB9A", "#FFDDD7"],

          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
          fontColor: `${color()}`,
          fontSize: 12,
          padding: 12,
        },
      },
    },
  });
};

const cssChart = (chart) => {
  let cssSkillChart = new Chart(chart.getContext("2d"), {
    type: "doughnut",
    data: {
      labels: ["basics", "flexBox", "grid", "animation", "mixins", "variables"],
      datasets: [
        {
          data: [90, 90, 90, 80, 85, 80],
          backgroundColor: [
            "#1488C8",
            "#33AAEB",
            "#6AC1F0",
            "#A2D9F6",
            "#cd6799",
            "#DAF0FB",
          ],

          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
          fontColor: `${color()}`,
          fontSize: 12,
          padding: 12,
        },
      },
    },
  });
};

const jsChart = (chart) => {
  let jsSkillChart = new Chart(chart.getContext("2d"), {
    type: "doughnut",
    data: {
      labels: [
        "basics",
        "DOM manipulation",
        "Es6 syn",
        "Destructuring",
        "higher order array methods",
        "fetchApi",
      ],
      datasets: [
        {
          data: [90, 90, 80, 80, 90, 85],
          backgroundColor: [
            "#F0DB4F",
            "#F4E47C",
            "#F7ECA1",
            "#F8EFB4",
            "#EACF1F",
            "#EACE1F",
          ],

          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
          fontColor: `${color()}`,
          fontSize: 12,
          padding: 8,
        },
      },
    },
  });
};

const reactChart = (chart) => {
  let reactSkillChart = new Chart(chart.getContext("2d"), {
    type: "horizontalBar",
    data: {
      labels: ["basics", "useSate", "useEffect", "router"],
      datasets: [
        {
          label: "learning progress",
          barThickness: 20,
          data: [90, 90, 85, 10, 10],
          backgroundColor: ["#57D6FF", "#00B8F5", "#00BBC5", "#000F14"],

          borderWidth: 1,
        },
      ],
    },
    options: {
      ticks: {
        beginAtZero: true,
      },
      scales: {
        xAxes: [
          {
            display: false,
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawOnChartArea: false,
            },
          },
        ],
      },
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
          fontColor: `${color()}`,
          fontSize: 12,
          padding: 8,
        },
      },
    },
  });
};
const tsChart = (chart) => {
  let tsSkillChart = new Chart(chart.getContext("2d"), {
    type: "horizontalBar",
    data: {
      labels: ["basics", "types"],
      datasets: [
        {
          fill: "none",
          label: "learning progress",
          barThickness: 20,
          data: [50, 40, 100],
          backgroundColor: ["#007ACC", "#00B8F5"],

          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
            },

            display: false,
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawOnChartArea: false,
            },
          },
        ],
      },
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
          fontColor: `${color()}`,
          fontSize: 12,
        },
      },
    },
  });
};

//1.0 main function
window.addEventListener("DOMContentLoaded", skillsFn);
