const size = {
  xs: "460px",
  sm: "686px",
  lg: "1300px",
};
const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
};
export default { size, device };
