function dataperson(event) {
  event.preventDefault();
  let forms = document.getElementById("frm");
  let nama = forms.nama.value;
  let pekerjaan = forms.pekerjaan.value;
  let hobby = forms.hobby.value;

  let input = " Nama Lengkap  : " + nama + " <br> Pekerjaan  : " + pekerjaan + "<br> Hobby : " + hobby;
  let no_input = "Maaf Nama, Pekerjaan dan Hobby anda belum masuk ke data ";
  let hasil = nama && hobby && pekerjaan != "" ? input : no_input;

  document.getElementById("hasil").innerHTML = hasil;
}
