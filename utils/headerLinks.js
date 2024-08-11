const headerLinks = {
  gonzales: [
    { id: "1", label: "Home", route: "/" },
    { id: "2", label: "Gonzales", route: "/gonzales" },
    { id: "3", label: "Prices", route: "/gonzales/prices" },
    { id: "4", label: "Food", route: "/gonzales/food" },
    { id: "5", label: "Catering", route: "/gonzales/catering" },
    { id: "6", label: "Parties", route: "/gonzales/parties" },
    {
      id: "7",
      label: "Movies",
      route: " https://www.premierlanes.net/movie_listing.php?loc_id=7200",
      blank: true,
    },
    { id: "8", label: "Contact", route: "/contact" },
  ],
  oxford: [
    { id: "9", label: "Home", route: "/" },
    { id: "10", label: "Oxford", route: "/oxford" },
    { id: "11", label: "Bowling", route: "/oxford/bowling" },
    { id: "12", label: "Groups", route: "/oxford/groups" },
    {
      id: "13",
      label: "Birthdays",
      route: "https://premierlanesoxford.pcsparty.com/bookings/index.asp",
      blank: true,
    },
    { id: "14", label: "Contact", route: "/contact" },
  ],
  acadiana: [
    { id: "15", label: "Home", route: "/" },
    { id: "16", label: "Acadiana", route: "/acadiana" },
    { id: "17", label: "Bowling", route: "/acadiana/bowling" },
    { id: "18", label: "Food", route: "/acadiana/food" },
    { id: "19", label: "Contact", route: "/contact" },
  ],
};

export default headerLinks;
