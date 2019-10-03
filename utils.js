function createElement(tag, attributes) {
  var el = document.createElement(tag);
  for (var key in attributes) {
    el[key] = attributes[key]
  }
  return el;
}

function addLogos(logos) {
  document.querySelectorAll(".outer").forEach(function (element) {
    element.remove();
  });

  logos.forEach(function (logo) {
    var img = createElement("img", { src: "logos/" + logo });

    var innerDiv = createElement("div", { classList: ["inner"] });
    innerDiv.appendChild(img);

    var outerDiv = createElement("div", { classList: ["outer"] });
    outerDiv.appendChild(innerDiv);

    document.body.appendChild(outerDiv);
  });
}
