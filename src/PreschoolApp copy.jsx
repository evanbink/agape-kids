import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Preschool App — Single-file React component
// Brand: PAUD TERPADU - AGAPE KIDS
// Put images in public/images/ and public/images/teachers/

const WHATSAPP_NUMBER = "6281371321350"; // +62 813-7132-1350

export default function PreschoolApp() {
  const [lang, setLang] = useState("id");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSplash, setShowSplash] = useState(true);
  const scrollRef = useRef(null);

  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    parentName: "",
    address: "",
    phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});

  const programs = [
    {
      title: { id: "TPA", en: "Daycare" },
      desc: {
        id: "Perawatan penuh hari dengan pengasuhan hangat dan stimulasi perkembangan.",
        en: "Full-day care with warm supervision and developmental stimulation.",
      },
    },
    {
      title: { id: "Play Group", en: "Play Group" },
      desc: {
        id: "Kelompok bermain yang mendorong kemandirian, kreativitas, dan sosialisasi.",
        en: "Playgroups encouraging independence, creativity and social skills.",
      },
    },
    {
      title: { id: "TK Plus & Nasional", en: "Kindergarten Plus & National" },
      desc: {
        id: "Kurikulum terpadu: akademik, karakter, dan persiapan nasional.",
        en: "Integrated curriculum: academics, character and national preparation.",
      },
    },
    {
      title: { id: "Anak Berkebutuhan Khusus", en: "Children with Special Needs" },
      desc: {
        id: "Program inklusif dengan pendampingan individual sesuai kebutuhan anak.",
        en: "Inclusive program with individual support tailored to each child's needs.",
      },
    },
  ];

  const about = {
    profile: {
      id: "PAUD Terpadu - Agape Kids adalah lembaga pendidikan anak usia dini yang berkomitmen pada perkembangan holistik: kasih, pembelajaran melalui bermain, dan pembentukan karakter.",
      en: "PAUD Terpadu - Agape Kids is an early childhood center committed to holistic development: love, learning through play, and character building.",
    },
    history: {
      id: "Berdiri sejak 2015, Agape Kids tumbuh dari sebuah kelas kecil menjadi lingkungan belajar yang hangat, inklusif, dan dipercaya oleh keluarga-keluarga di sekitar.",
      en: "Established in 2015, Agape Kids has grown from a small class into a warm, inclusive learning environment trusted by local families.",
    },
    visionMission: {
      id: {
        visi: "Menjadi lembaga pendidikan anak usia dini yang unggul dalam kasih dan karakter.",
        misi: [
          "Menciptakan lingkungan belajar yang aman dan penuh kasih.",
          "Mengembangkan potensi anak sesuai minat dan bakat.",
          "Membentuk karakter positif berlandaskan nilai moral dan spiritual.",
          "Memberikan layanan inklusif bagi semua anak.",
        ],
      },
      en: {
        visi: "To be an early childhood institution that excels in love and character.",
        misi: [
          "Create a safe and loving learning environment.",
          "Develop children's potential according to their interests and talents.",
          "Build positive character based on moral and spiritual values.",
          "Provide inclusive services for every child.",
        ],
      },
    },
  };

 const teachers = [
  {
    name: "Miss Ledy",
    role: { id: "Kepala Sekolah", en: "Principal" },
    bio: {
      id: "Kepala sekolah yang memimpin dengan hati dan pengalaman dalam PAUD.",
      en: "School leader with heart and experience in early childhood education.",
    },
    photo: "/images/teachers/Miss-Ledy.png",
  },
  {
    name: "Mis Ria",
    role: { id: "Guru - Play Group", en: "Teacher - Play Group" },
    bio: {
      id: "Pengajar penyabar, fokus pada sosialisasi dan kemandirian anak.",
      en: "A patient teacher focused on social development and independence.",
    },
    photo: "/images/teachers/Miss-Ria.jpg",
  },
  {
    name: "Mis Herma",
    role: { id: "Guru - TK & Berkebutuhan Khusus", en: "Teacher - Kindergarten & Special Needs" },
    bio: {
      id: "Spesialis inklusif yang memberikan pendekatan personal untuk tiap anak.",
      en: "Inclusive specialist providing personal approaches for each child.",
    },
    photo: "/images/teachers/Miss-Herma.jpg",
  },
  {
    name: "Mis Octa",
    role: { id: "Guru - TK", en: "Teacher - Kindergarten" },
    bio: {
      id: "Guru kreatif yang merancang aktivitas belajar yang menyenangkan.",
      en: "Creative teacher designing fun kindergarten activities.",
    },
    photo: "/images/teachers/default.png",
  },
  {
    name: "Mis Eva",
    role: { id: "Guru - TK", en: "Teacher - Kindergarten" },
    bio: {
      id: "Menciptakan suasana belajar hangat untuk perkembangan anak.",
      en: "Creates a warm learning atmosphere supporting children's growth.",
    },
    photo: "/images/teachers/Miss-Eva.jpg",
  },
  {
    name: "Mis Tasya",
    role: { id: "TPA", en: "Daycare" },
    bio: {
      id: "Pendamping TPA yang teliti dan penuh perhatian.",
      en: "Attentive daycare caregiver ensuring children's safety and comfort.",
    },
    photo: "/images/teachers/Mis-Tasya.jpg",
  },
];


  const activities = [
    {
      title: { id: "Seni & Kerajinan", en: "Art & Crafts" },
      desc: {
        id: "Eksplorasi kreatif melalui lukisan dan kerajinan tangan.",
        en: "Creative exploration through painting and crafts.",
      },
    },
    {
      title: { id: "Circle Time", en: "Circle Time" },
      desc: {
        id: "Rutinitas bersama: lagu, cerita, dan diskusi kelompok kecil.",
        en: "Group routines: songs, stories and small-group discussions.",
      },
    },
    {
      title: { id: "Bermain di Luar", en: "Outdoor Play" },
      desc: {
        id: "Aktivitas motorik besar dan penjelajahan alam.",
        en: "Gross-motor activities and nature exploration.",
      },
    },
    {
      title: { id: "Musik & Gerakan", en: "Music & Movement" },
      desc: {
        id: "Menari, ritme, dan pengenalan alat musik sederhana.",
        en: "Dance, rhythm and simple instrument introduction.",
      },
    },
    {
      title: { id: "Bercerita", en: "Storytelling" },
      desc: {
        id: "Cerita interaktif yang menstimulasi imajinasi dan bahasa.",
        en: "Interactive stories stimulating imagination and language.",
      },
    },
  ];

  const gallery = [
    "/images/teachers/Miss-Ledy.png",
    "/images/teachers/Miss-Ria.jpg",
    "/images/teachers/Miss-Herma.jpg",
    "/images/teachers/default.png",
    "/images/teachers/Miss-Eva.jpg",
    "/images/teachers/Mis-Tasya.jpg",
  ];

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setSelectedTeacher(null);
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const tr = (obj) => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] ?? obj.id ?? obj.en ?? "";
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.childName || !formData.childName.trim())
      errs.childName = lang === "id" ? "Nama anak wajib diisi." : "Child's name is required.";
    if (!formData.age || Number(formData.age) <= 0)
      errs.age = lang === "id" ? "Masukkan usia yang valid." : "Please enter a valid age.";
    if (!formData.parentName || !formData.parentName.trim())
      errs.parentName = lang === "id" ? "Nama orang tua wajib diisi." : "Parent's name is required.";
    if (!formData.phone || !formData.phone.trim())
      errs.phone = lang === "id" ? "Nomor telepon wajib diisi." : "Phone number is required.";
    if (!formData.address || !formData.address.trim())
      errs.address = lang === "id" ? "Alamat wajib diisi." : "Address is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const rawMessage =
      (lang === "id" ? "Formulir Pendaftaran:\n" : "Enrollment Request:\n") +
      `${lang === "id" ? "Anak" : "Child"}: ${formData.childName}\n` +
      `${lang === "id" ? "Usia" : "Age"}: ${formData.age}\n` +
      `${lang === "id" ? "Orang Tua" : "Parent"}: ${formData.parentName}\n` +
      `${lang === "id" ? "Alamat" : "Address"}: ${formData.address}\n` +
      `${lang === "id" ? "Telepon" : "Phone"}: ${formData.phone}\n` +
      `${lang === "id" ? "Catatan" : "Notes"}: ${formData.notes}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(rawMessage)}`;
    window.open(url, "_blank");
  };

  const Hamburger = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (showSplash) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 via-yellow-50 to-sky-50 z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <img
            src="/images/logo.png"
            alt="PAUD TERPADU - AGAPE KIDS"
            className="w-28 h-28 rounded-full shadow-md object-cover"
          />
          <h1 className="mt-4 text-3xl font-bold text-[#2E7D32]">
            PAUD TERPADU - AGAPE KIDS
          </h1>
          <p className="mt-1 text-gray-600">Preschool</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans bg-gradient-to-br from-green-50 via-yellow-50 to-sky-50">
      {/* LEFT (70%) */}
      <aside className="w-full md:w-2/3 bg-gradient-to-br from-green-100 via-white to-green-50 shadow-lg flex flex-col items-center justify-center p-8 relative md:sticky md:top-0 md:h-screen border-r border-green-200">
        <div className="absolute top-4 left-4 z-50 flex items-center gap-2">
          <button
            onClick={() => setMenuOpen((s) => !s)}
            aria-label={lang === "id" ? "Buka menu" : "Open menu"}
            className="p-2 bg-[#2E7D32] text-white rounded-lg shadow-md hover:bg-[#256628] transition"
          >
            <Hamburger />
          </button>

          <button
            onClick={() => setLang((l) => (l === "id" ? "en" : "id"))}
            aria-label="Toggle language"
            className="px-3 py-1 rounded-md bg-white border shadow text-sm hover:bg-gray-50 transition"
          >
            {lang === "id" ? "ID" : "EN"}
          </button>

          {menuOpen && (
            <div className="mt-10 absolute left-0 top-10 bg-white shadow-lg rounded-xl overflow-hidden border border-green-100">
              <button
                onClick={() => scrollToSection("programs")}
                className="block w-full text-left px-5 py-2 hover:bg-green-50 transition"
              >
                {lang === "id" ? "Program" : "Programs"}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-5 py-2 hover:bg-green-50 transition"
              >
                {lang === "id" ? "Tentang Kami" : "About"}
              </button>
              <button
                onClick={() => scrollToSection("activities")}
                className="block w-full text-left px-5 py-2 hover:bg-green-50 transition"
              >
                {lang === "id" ? "Kegiatan" : "Activities"}
              </button>
              <button
                onClick={() => scrollToSection("teachers")}
                className="block w-full text-left px-5 py-2 hover:bg-green-50 transition"
              >
                {lang === "id" ? "Guru" : "Teachers"}
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left px-5 py-2 hover:bg-green-50 transition"
              >
                {lang === "id" ? "Galeri" : "Gallery"}
              </button>
              <button
                onClick={() => scrollToSection("enroll")}
                className="block w-full text-left px-5 py-2 hover:bg-green-50 transition"
              >
                {lang === "id" ? "Daftar" : "Enroll"}
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center text-center max-w-lg mt-20">
          <img
            src="/images/logo.png"
            alt="PAUD TERPADU - AGAPE KIDS"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain mb-4 drop-shadow-md"
          />
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2E7D32] tracking-tight">
            PAUD TERPADU - AGAPE KIDS
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 italic max-w-md leading-relaxed">
            {lang === "id"
              ? "Belajar melalui kasih, bermain, dan kreativitas"
              : "Learning through love, play, and creativity"}
          </p>

          <div className="mt-6 text-sm sm:text-base text-gray-800 font-semibold flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-green-100 rounded-full shadow-sm">
              TPA
            </span>
            <span className="px-3 py-1 bg-green-100 rounded-full shadow-sm">
              Play Group
            </span>
            <span className="px-3 py-1 bg-green-100 rounded-full shadow-sm">
              TK Plus & Nasional
            </span>
            <span className="px-3 py-1 bg-green-100 rounded-full shadow-sm">
              Anak Berkebutuhan Khusus
            </span>
          </div>
        </div>
      </aside>

      {/* RIGHT (30%) */}
      <main
        ref={scrollRef}
        className="flex-1 md:w-1/3 overflow-y-auto bg-transparent p-4"
      >
        <section
          id="programs"
          className="py-6 px-4 bg-white/70 rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-2xl font-semibold text-center text-[#2E7D32] mb-3">
            📚 {lang === "id" ? "Program" : "Programs"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {programs.map((p, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-3">
                <h3 className="font-bold text-[#2E7D32]">{tr(p.title)}</h3>
                <p className="text-gray-700 text-sm mt-1">{tr(p.desc)}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="py-6 px-4 bg-white/70 rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-2xl font-semibold text-center text-[#2E7D32] mb-3">
            ℹ️ {lang === "id" ? "Tentang Kami" : "About Us"}
          </h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold">{lang === "id" ? "Profil" : "Profile"}</h3>
              <p>{tr(about.profile)}</p>
            </div>
            <div>
              <h3 className="font-bold">{lang === "id" ? "Sejarah" : "History"}</h3>
              <p>{tr(about.history)}</p>
            </div>
            <div>
              <h3 className="font-bold">{lang === "id" ? "Visi & Misi" : "Vision & Mission"}</h3>
              <p>
                <strong>{lang === "id" ? "Visi" : "Vision"}:</strong>{" "}
                {about.visionMission[lang].visi}
              </p>
              <ul className="list-disc list-inside">
                {about.visionMission[lang].misi.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="activities"
          className="py-6 px-4 bg-white/70 rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-2xl font-semibold text-center text-[#2E7D32] mb-3">
            🎨 {lang === "id" ? "Kegiatan" : "Activities"}
          </h2>
          <div className="space-y-3">
            {activities.map((a, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-3">
                <h3 className="font-bold text-[#2E7D32]">{tr(a.title)}</h3>
                <p className="text-gray-700 text-sm mt-1">{tr(a.desc)}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="teachers"
          className="py-6 px-4 bg-white/70 rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-2xl font-semibold text-center text-[#2E7D32] mb-3">
            👩‍🏫 {lang === "id" ? "Team Kami" : "Our Team"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {teachers.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow p-3 cursor-pointer"
                onClick={() => setSelectedTeacher(t)}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto"
                />
                <h3 className="mt-2 font-bold text-center">{t.name}</h3>
                <p className="text-gray-600 text-sm text-center">
                  {tr(t.role)}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="gallery"
          className="py-6 px-4 bg-white/70 rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-2xl font-semibold text-center text-[#2E7D32] mb-3">
            🖼️ {lang === "id" ? "Galeri" : "Gallery"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {gallery.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Gallery ${i}`}
                whileHover={{ scale: 1.05 }}
                className="w-full h-28 object-cover rounded-lg shadow cursor-pointer"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </section>

        <section
          id="enroll"
          className="py-6 px-4 bg-white/70 rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-2xl font-semibold text-center text-[#2E7D32] mb-3">
            📝 {lang === "id" ? "Daftar" : "Enroll"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="childName"
              placeholder={lang === "id" ? "Nama Anak" : "Child's Name"}
              value={formData.childName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            {errors.childName && <p className="text-red-500 text-sm">{errors.childName}</p>}

            <input
              type="number"
              name="age"
              placeholder={lang === "id" ? "Usia" : "Age"}
              value={formData.age}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}

            <input
              type="text"
              name="parentName"
              placeholder={lang === "id" ? "Nama Orang Tua" : "Parent's Name"}
              value={formData.parentName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            {errors.parentName && <p className="text-red-500 text-sm">{errors.parentName}</p>}

            <input
              type="text"
              name="address"
              placeholder={lang === "id" ? "Alamat" : "Address"}
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

            <input
              type="text"
              name="phone"
              placeholder={lang === "id" ? "Nomor Telepon" : "Phone"}
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <textarea
              name="notes"
              placeholder={lang === "id" ? "Catatan" : "Notes"}
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />

            <button
              type="submit"
              className="w-full py-2 bg-[#2E7D32] text-white rounded-lg shadow hover:bg-[#256628] transition"
            >
              {lang === "id" ? "Kirim via WhatsApp" : "Send via WhatsApp"}
            </button>
          </form>
        </section>
        {/* Footer Section */}
        <section
          id="footer"
          className="py-6 px-4 bg-white/70 rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-3">
            📍 {lang === "id" ? "Kontak" : "Contact"}
          </h2>
          <div className="space-y-4 text-gray-700 text-center">
            <p>
              <strong>{lang === "id" ? "Alamat" : "Address"}:</strong><br />
              Jl. Contoh No. 123, Kota Bandung, Indonesia
            </p>
            <p>
              <strong>Email:</strong><br />
              agapekids@example.com
            </p>
            <div>
              <strong>{lang === "id" ? "Media Sosial" : "Social Media"}:</strong>
              <div className="flex justify-center gap-4 mt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:underline"
                >
                  Instagram
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Teacher Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
            <button
              onClick={() => setSelectedTeacher(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <img
              src={selectedTeacher.photo}
              alt={selectedTeacher.name}
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h3 className="mt-2 text-xl font-bold text-center">{selectedTeacher.name}</h3>
            <p className="text-gray-600 text-sm text-center">{tr(selectedTeacher.role)}</p>
            <p className="mt-2 text-gray-700">{tr(selectedTeacher.bio)}</p>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-2 max-w-2xl w-full relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Gallery item"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
