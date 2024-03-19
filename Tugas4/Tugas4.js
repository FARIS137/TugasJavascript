let frm = document.getElementById("pgw");
let JabatanPilihan = ["Manager", "Asisten Manager", "Staff"];
let PilihJabatan = `<option value="">Pilih Jabatan -----</option>`;
for (let p in JabatanPilihan) {
  PilihJabatan += `<option value="${JabatanPilihan[p]}">${JabatanPilihan[p]}</option>`;

  frm.jabatan.innerHTML = PilihJabatan;
  function Gajian() {
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    let gapok;

    switch (jabatan) {
      case "Manager":
        gapok = 15000000;
        break;
      case "Asisten Manager":
        gapok = 10000000;
        break;
      case "Staff":
        gapok = 5000000;
        break;
      default:
        gapok = 0;
    }
    let Tunjab = 0.15 * gapok;
    // menghitung BPJS dari gaji pokok sebesar 10%
    let bpjs = 0.1 * gapok;
    // menghitung tunjangan Keluarga dari gaji pokok sebesar 20% jika statusnya sudah menikah
    let tunkel = status == "Menikah" ? 0.2 * gapok : 0;
    // menghitung Total Gaji
    let totalG = gapok + Tunjab + bpjs + tunkel;

    Swal.fire({
      title: "Detail Gaji",
      html:`
        <table border="1"  cellspacing="0" width="1000px">
          <thead>
            <tr>
              <th>Nama Pegawai</th>
              <th>Jabatan Pegawai</th>
              <th>Status</th>
              <th>gaji Pokok</th>
              <th>Tunjangan Jabatan</th>
              <th>BPJS</th>
              <th>Tunjangan Keluarga</th>
              <th>Total Gaji</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${nama}</td>
              <td>${jabatan}</td>
              <td>${status}</td>
              <td>${gapok.toLocaleString("id-ID")}</td>
              <td>${Tunjab.toLocaleString("id-ID")}</td>
              <td>${bpjs.toLocaleString("id-ID")}</td>
              <td>${tunkel.toLocaleString("id-ID")}</td>
              <td>${totalG.toLocaleString("id-ID")}</td>
            </tr>
          </tbody>
          <tfoot>
          <tr>
          <td colspan="7">Total Gaji</td>
          <td>${totalG.toLocaleString("id-ID")}</td>
          </tr>
          </tfoot>
        </table>
      `,
    });
    
  }
}
