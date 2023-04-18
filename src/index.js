import "../src/style.css";
import weather from "./modules/api";


const searchForm = document.querySelector('#search-form');
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting normally
  });

  weather()