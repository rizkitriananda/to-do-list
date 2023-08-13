const inputText = document.querySelector("textarea");
const ul = document.querySelector("ul");
const btnTambah = document.querySelector(".btn.add button");

btnTambah.addEventListener("click", function (e) {
  e.preventDefault();
  const li = document.createElement("li");
  const remove = document.createElement("i");
  remove.classList.add("fas", "fa-xmark");
  li.textContent = inputText.value;
  ul.appendChild(li);
  inputText.value = "";

  li.appendChild(remove);

  remove.addEventListener("click", function () {
    ul.removeChild(li);
  });
});
