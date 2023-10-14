const inputText = document.querySelector("input");
const ul = document.querySelector("ul");
const btnTambah = document.querySelector(".btn.add button");

btnTambah.addEventListener("click", function (e) {
  e.preventDefault();
  const li = document.createElement("li");
  const remove = document.createElement("i");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  remove.classList.add("fas", "fa-xmark");
  li.textContent = inputText.value;
  ul.appendChild(li);
  li.append(checkbox);
  inputText.value = "";

  li.appendChild(remove);

  remove.addEventListener("click", function () {
    ul.removeChild(li);
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
      li.style.color = "grey";
    } else {
      li.style.textDecoration = "none";
      li.style.color = "#111111";
    }
  });
});
