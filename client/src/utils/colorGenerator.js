import _map from "lodash/map";
import GLOBAL_COLOR_CODES from "../constant/colors";

const colorGenerator = (data, colorCodes) => {
  const colors = Object.values(colorCodes || GLOBAL_COLOR_CODES);
  const updatedData = _map(data, (item, index) => {
    // Assign color using modulo to handle cases where data.length > colors.length
    const color = colors[index % colors.length];

    return {
      ...item,
      color: color,
    };
  });

  return updatedData;
};

export default colorGenerator;
