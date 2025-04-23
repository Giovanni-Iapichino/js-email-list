const emailList = document.getElementById("emailList");
const api_url = "https://flynn.boolean.careers/exercises/api/random/mail";
const loadButton = document.getElementById("loadEmails");

const randomMailList = () => {
  emailList.innerHTML = "";

  for (i = 0; i < 10; i++) {
    axios.get(api_url).then((response) => {
      console.log(response.data);
      const email = response.data.response;
      const li = document.createElement("li");
      li.innerText = email;
      li.classList.add("list-group-item");
      emailList.appendChild(li);
    });
  }
};

loadButton.addEventListener("click", randomMailList);

randomMailList();
