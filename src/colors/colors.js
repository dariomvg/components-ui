export const getColor = (bg) => {
  switch (bg) {
    case "violet":
      return "#646cff";
    case "blue":
      return "#149eca";
    case "green":
      return "#28a745";
    case "orange":
      return "#fd7e14";
    case "yellow":
      return "#ffc107";
    case "purple":
      return "#6f42c1";
    case "red":
      return "#dc3545";
    case "teal":
      return "#20c997";
    case "transparent":
      return "#ffffff18";
    default:
      return "";
  }
};

export const getBg = (bg) => {
  switch (bg) {
    case "dark":
      return "#0000004b";
    case "light":
      return "#ffffff4b";
    default:
      return "";
  }
};
