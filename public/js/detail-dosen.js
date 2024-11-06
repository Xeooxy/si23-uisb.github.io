// Mengambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const dosenId = urlParams.get("id"); // Mengambil id parameter

// Data biodata dosen
const dosenData = {
  ilham: {
    image: "img/dosen/dosen_ilham.png",
    name: "Ilham Eka Putra, S.Kom., M.Kom., M.Hum",
    bidang: "Pengembangan Perangkat Lunak dan AI",
    research: [
      "Keamanan Sistem Informasi",
      "Perencanaan Sumber Daya Perusahaan",
      "Artificial Intelligence",
      "Sistem Informasi Geografi",
    ],
    pendidikan: [
      "S1 – Sistem Informasi – Universitas Amikom Yogyakarta",
      "S2 – Sistem Informasi – Universitas Putra Indonesia YPTK Padang",
      "S2 – Ilmu Hukum – Universitas Merdeka Malang",
    ],
  },
  azira: {
    image: "img/dosen/dosen_azira.png",
    name: "Azira Pertiwi, S.Kom., M.Kom",
    bidang: "Sistem Basis Data",
    research: [
      "Analis Data Bisnis",
      "Sistem Informasi Bisnis",
      "Manajemen Teknologi Informasi",
    ],
    pendidikan: [
      "S1 – Sistem Informasi – Universitas Putra Indonesia YPTK Padang",
      "S2 – Sistem Informasi – Universitas Putra Indonesia YPTK Padang",
    ],
  },
  rifaldo: {
    image: "img/dosen/dosen_rifaldo.png",
    name: "Rifaldo Pratama, S.Kom., M.Kom",
    bidang: "Jaringan Komputer.",
    research: ["Php", "Database", "Java"],
    pendidikan: [
      "S1 – Sistem Informasi – Universitas Putra Indonesia YPTK Padang",
      "S2 – Sistem Informasi – Universitas Putra Indonesia YPTK Padang",
    ],
  },
  febby: {
    image: "img/dosen/dosen_febby.png",
    name: "Febby Kesumaningtyas, S.Kom., M.Kom",
    bidang: "Sistem Informasi Manajemen.",
    research: [
      "Analis Data Bisnis",
      "Sistem Informasi Bisnis",
      "Manajemen Teknologi Informasi",
    ],
    pendidikan: [
      "S1 – Sistem Informasi – Universitas Putra Indonesia YPTK Padang",
      "S2 – Sistem Informasi – Universitas Putra Indonesia YPTK Padang",
    ],
  },
};

// Fungsi untuk menampilkan detail dosen
const showDosenDetail = () => {
  const dosen = dosenData[dosenId];

  // Jika data dosen ditemukan
  if (dosen) {
    // Menampilkan gambar dan nama
    const imageElement = document.getElementById("dosen-image");
    imageElement.src = dosen.image || "path/to/default-image.png"; // Gambar default jika gambar dosen tidak ditemukan
    imageElement.onerror = () => {
      imageElement.src = "path/to/default-image.png"; // Fallback gambar default jika terjadi error saat loading gambar
    };

    document.getElementById("dosen-name").textContent =
      dosen.name || "Nama Tidak Tersedia";

    // Menampilkan Dosen Bidang
    const bidangContainer = document.getElementById("dosen-bidang");
    bidangContainer.textContent = `Dosen Bidang: ${
      dosen.bidang || "Bidang Tidak Tersedia"
    }`;

    // Menampilkan pendidikan (About)
    const pendidikanContainer = document.getElementById("dosen-pendidikan");
    pendidikanContainer.innerHTML = ""; // Kosongkan isi sebelumnya (jika ada)

    if (dosen.pendidikan && dosen.pendidikan.length > 0) {
      dosen.pendidikan.forEach((pendidikan) => {
        const pendidikanElement = document.createElement("p");
        pendidikanElement.textContent = pendidikan;
        pendidikanContainer.appendChild(pendidikanElement);
      });
    } else {
      const noPendidikanElement = document.createElement("p");
      noPendidikanElement.textContent = "Tidak ada data pendidikan.";
      pendidikanContainer.appendChild(noPendidikanElement);
    }

    // Menampilkan research (penelitian)
    const researchContainer = document.getElementById("dosen-research");
    researchContainer.innerHTML = ""; // Kosongkan isi sebelumnya (jika ada)

    if (dosen.research && dosen.research.length > 0) {
      dosen.research.forEach((research, index) => {
        const researchElement = document.createElement("p");
        researchElement.textContent = `${index + 1}. ${research}`;
        researchContainer.appendChild(researchElement);
      });
    } else {
      const noResearchElement = document.createElement("p");
      noResearchElement.textContent = "Tidak ada data penelitian.";
      researchContainer.appendChild(noResearchElement);
    }
  } else {
    // Jika dosen tidak ditemukan
    document.getElementById("dosen-name").textContent = "Dosen Tidak Ditemukan";
  }
};

// Validasi parameter id dan panggil fungsi untuk memuat detail dosen
if (!dosenId || !dosenData[dosenId]) {
  document.getElementById("dosen-name").textContent = "Dosen Tidak Ditemukan";
} else {
  showDosenDetail();
}
