import { initViewer, loadModel } from "./viewer.js";

initViewer(document.getElementById("preview")).then((viewer) => {
  loadModel(viewer, "HARD CODE URN");
});
