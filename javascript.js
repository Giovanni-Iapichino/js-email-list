const emailList = document.getElementById("emailList");
const api_url = "https://flynn.boolean.careers/exercises/api/random/mail";

const randomMailList = () => {
  emailList.innerHTML = "";

  for (i = 0; i < 10; i++) {
    axios.get(api_url).then((response) => {
      console.log(response.data);
      const email = response.data.response;
      const li = document.createElement("li");
      li.innerText = email;
      emailList.appendChild(li);
    });
  }
};

randomMailList();
