// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
require("axios");

//require("packs/voice")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "bootstrap";
import "./stylesheets/application.scss";
import axios from "axios";
import vue from "vue";

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip();

  // window.axios = axios;
  // const csrfToken = document
  //   .querySelector('[name="csrf-token"]')
  //   .getAttribute("content");
  // axios.post("/api/new", {
  //   name: "name",
  //   sentence: "sentence",
  //   color: "color",
  //   group: "group",
  //   authenticity_token: csrfToken,
  // });
});
