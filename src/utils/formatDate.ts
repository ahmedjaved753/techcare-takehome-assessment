const formatDate = (dateString: string): string => {
  const [month, day, year] = dateString.split("/").map(Number);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[month - 1];

  return `${monthName} ${day}, ${year}`;
};

export default formatDate;
