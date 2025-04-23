const emailList = document.getElementById("emailList");
const api_url = "https://flynn.boolean.careers/exercises/api/random/mail";

mailList = [];

const randomMailList = (mail) => {
  for (i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {});
  }
};
