const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();
  const element = document.createElement(node);

  if (txt) {
    const text = document.createTextNode(txt);
    element.appendChild(text);
  }
  if (attr) {
    element.setAttribute(attr, value);
  }
  document.querySelector(".content").appendChild(element);
};

const searchElements = (e, nameElement) => {
  e.preventDefault();
  const infoElement = document.querySelector(".result");
  infoElement.textContent = "";
  const elements = document.querySelectorAll(nameElement);

  if (elements.length) {
    infoElement.innerHTML = `<p class="result__number-info"> I found <strong>${elements.length} ${nameElement} </strong> elements </p>`;
    showInfo(elements, infoElement);
  } else {
    infoElement.innerHTML = `<p class="result__number-info"> No <strong>${nameElement} </strong> elements </p>`;
    return;
  }
};

const showInfo = (elements, infoElement) => {
  console.log(elements);
  elements.forEach((element) => {
    const item = document.createElement("div");
    item.className = "result__element-description";
    item.innerHTML = `
    <div>${element.nodeName}</div>
    <div>Class/es: ${element.className}</div>
    <div>Height: ${element.offsetHeight}</div>
    <div>Width: ${element.offsetWidth}</div>
    <div>OffsetTop: ${element.offsetTop}</div>
    <div>OffsetLeft: ${element.offsetLeft}</div>
    <div>Childrens: ${element.childElementCount}</div>
    `;
    infoElement.appendChild(item);
  });
};

//listeners

const addForm = document.querySelector(".form--add");
addForm.addEventListener("submit", (e) =>
  addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.txt.value,
    addForm.elements.attr.value,
    addForm.elements.value.value
  )
);

const searchForm = document.querySelector(".form--search");
searchForm.addEventListener("submit", (e) =>
  searchElements(e, searchForm.elements["searching-element"].value)
);
