export const generateRandomBackground = () => {
  const backgroundClasses = [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-neutral",
    "bg-info",
    "bg-success",
    "bg-warning",
    "bg-error",
  ];
  const randomIndex = Math.floor(Math.random() * backgroundClasses.length);
  return backgroundClasses[randomIndex];
};
