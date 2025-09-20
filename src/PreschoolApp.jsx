import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaBook,
  FaPaintBrush,
  FaTree,
  FaHeart, } from "react-icons/fa";

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

  // --- data (programs, about, teachers, activities, gallery) ---
  const programs = [
    { title: { id: "TPA", en: "Daycare" }, desc: { id: "Perawatan penuh hari dengan pengasuhan hangat dan stimulasi perkembangan.", en: "Full-day care with warm supervision and developmental stimulation." } },
    { title: { id: "Play Group", en: "Play Group" }, desc: { id: "Kelompok bermain yang mendorong kemandirian, kreativitas, dan sosialisasi.", en: "Playgroups encouraging independence, creativity and social skills." } },
    { title: { id: "TK Plus & Nasional", en: "Kindergarten Plus & National" }, desc: { id: "Kurikulum terpadu: akademik, karakter, dan persiapan nasional.", en: "Integrated curriculum: academics, character and national preparation." } },
    { title: { id: "Anak Berkebutuhan Khusus", en: "Children with Special Needs" }, desc: { id: "Program inklusif dengan pendampingan individual sesuai kebutuhan anak.", en: "Inclusive program with individual support tailored to each child's needs." } },
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
      id: { visi: "Menjadi lembaga pendidikan anak usia dini yang unggul dalam kasih dan karakter.", misi: [ "Menciptakan lingkungan belajar yang aman dan penuh kasih.", "Mengembangkan potensi anak sesuai minat dan bakat.", "Membentuk karakter positif berlandaskan nilai moral dan spiritual.", "Memberikan layanan inklusif bagi semua anak.", ] },
      en: { visi: "To be an early childhood institution that excels in love and character.", misi: [ "Create a safe and loving learning environment.", "Develop children's potential according to their interests and talents.", "Build positive character based on moral and spiritual values.", "Provide inclusive services for every child.", ] },
    },
  };

  const teachers = [
    { name: "Miss Ledy", role: { id: "Kepala Sekolah", en: "Principal" }, bio: { id: "Kepala sekolah yang memimpin dengan hati dan pengalaman dalam PAUD.", en: "School leader with heart and experience in early childhood education." }, photo: "/images/teachers/Miss-Ledy.png" },
    { name: "Mis Ria", role: { id: "Guru - Play Group", en: "Teacher - Play Group" }, bio: { id: "Pengajar penyabar, fokus pada sosialisasi dan kemandirian anak.", en: "A patient teacher focused on social development and independence." }, photo: "/images/teachers/Miss-Ria.jpg" },
    { name: "Mis Herma", role: { id: "Guru - TK & Berkebutuhan Khusus", en: "Teacher - Kindergarten & Special Needs" }, bio: { id: "Spesialis inklusif yang memberikan pendekatan personal untuk tiap anak.", en: "Inclusive specialist providing personal approaches for each child." }, photo: "/images/teachers/Miss-Herma.jpg" },
    { name: "Mis Octa", role: { id: "Guru - TK", en: "Teacher - Kindergarten" }, bio: { id: "Guru kreatif yang merancang aktivitas belajar yang menyenangkan.", en: "Creative teacher designing fun kindergarten activities." }, photo: "/images/teachers/default.png" },
    { name: "Mis Eva", role: { id: "Guru - TK", en: "Teacher - Kindergarten" }, bio: { id: "Menciptakan suasana belajar hangat untuk perkembangan anak.", en: "Creates a warm learning atmosphere supporting children's growth." }, photo: "/images/teachers/Miss-Eva.jpg" },
    { name: "Mis Tasya", role: { id: "TPA", en: "Daycare" }, bio: { id: "Pendamping TPA yang teliti dan penuh perhatian.", en: "Attentive daycare caregiver ensuring children's safety and comfort." }, photo: "/images/teachers/Mis-Tasya.jpg" },
  ];

  const activities = [
    { title: { id: "Seni & Kerajinan", en: "Art & Crafts" }, desc: { id: "Eksplorasi kreatif melalui lukisan dan kerajinan tangan.", en: "Creative exploration through painting and crafts." } },
    { title: { id: "Circle Time", en: "Circle Time" }, desc: { id: "Rutinitas bersama: lagu, cerita, dan diskusi kelompok kecil.", en: "Group routines: songs, stories and small-group discussions." } },
    { title: { id: "Bermain di Luar", en: "Outdoor Play" }, desc: { id: "Aktivitas motorik besar, penjelajahan alam,tamasya dan Camping.", en: "Gross-motor activities, nature exploration, picnic and camping ground." } },
    { title: { id: "Musik & Gerakan", en: "Music & Movement" }, desc: { id: "Menari, ritme, dan pengenalan alat musik sederhana.", en: "Dance, rhythm and simple instrument introduction." } },
    { title: { id: "Bercerita", en: "Storytelling" }, desc: { id: "Cerita interaktif yang menstimulasi imajinasi dan bahasa.", en: "Interactive stories stimulating imagination and language." } },
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
    if (!formData.childName || !formData.childName.trim()) errs.childName = lang === "id" ? "Nama anak wajib diisi." : "Child's name is required.";
    if (!formData.age || Number(formData.age) <= 0) errs.age = lang === "id" ? "Masukkan usia yang valid." : "Please enter a valid age.";
    if (!formData.parentName || !formData.parentName.trim()) errs.parentName = lang === "id" ? "Nama orang tua wajib diisi." : "Parent's name is required.";
    if (!formData.phone || !formData.phone.trim()) errs.phone = lang === "id" ? "Nomor telepon wajib diisi." : "Phone number is required.";
    if (!formData.address || !formData.address.trim()) errs.address = lang === "id" ? "Alamat wajib diisi." : "Address is required.";
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  if (showSplash) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 via-yellow-50 to-sky-50 z-50">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
          <img src="/images/logo.png" alt="PAUD TERPADU - AGAPE KIDS" className="w-28 h-28 rounded-full shadow-md object-cover" />
          <h1 className="mt-4 text-3xl font-bold text-[#2E7D32]">PAUD TERPADU - AGAPE KIDS</h1>
          <p className="mt-1 text-gray-600">Preschool</p>
        </motion.div>
      </div>
    );
  }
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };


  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans bg-gradient-to-br from-green-50 via-yellow-50 to-sky-50">
      {/* LEFT (70%) */}
      <aside className="w-full md:w-2/3 bg-gradient-to-br from-green-100 via-white to-green-50 shadow-lg flex flex-col items-center justify-center p-8 relative md:sticky md:top-0 md:h-screen border-r border-green-200">
        <div className="absolute top-4 left-4 z-50 flex items-center gap-2">
          <button onClick={() => setMenuOpen((s) => !s)} aria-label={lang === "id" ? "Buka menu" : "Open menu"} className="p-2 bg-[#2E7D32] text-white rounded-lg shadow-md hover:bg-[#256628] transition">
            <Hamburger />
          </button>

          <button onClick={() => setLang((l) => (l === "id" ? "en" : "id"))} aria-label="Toggle language" className="px-3 py-1 rounded-md bg-white border shadow text-sm hover:bg-gray-50 transition">
            {lang === "id" ? "ID" : "EN"}
          </button>

          {menuOpen && (
            <div className="mt-10 absolute left-0 top-10 bg-white shadow-lg rounded-xl overflow-hidden border border-green-100">
              <button onClick={() => scrollToSection("programs")} className="block w-full text-left px-5 py-2 hover:bg-green-50 transition">{lang === "id" ? "Program" : "Programs"}</button>
              <button onClick={() => scrollToSection("about")} className="block w-full text-left px-5 py-2 hover:bg-green-50 transition">{lang === "id" ? "Tentang Kami" : "About"}</button>
              <button onClick={() => scrollToSection("activities")} className="block w-full text-left px-5 py-2 hover:bg-green-50 transition">{lang === "id" ? "Kegiatan" : "Activities"}</button>
              <button onClick={() => scrollToSection("teachers")} className="block w-full text-left px-5 py-2 hover:bg-green-50 transition">{lang === "id" ? "Guru" : "Teachers"}</button>
              <button onClick={() => scrollToSection("gallery")} className="block w-full text-left px-5 py-2 hover:bg-green-50 transition">{lang === "id" ? "Galeri" : "Gallery"}</button>
              <button onClick={() => scrollToSection("enroll")} className="block w-full text-left px-5 py-2 hover:bg-green-50 transition">{lang === "id" ? "Daftar" : "Enroll"}</button>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center text-center max-w-lg mt-20">
          <img src="/images/logo.png" alt="PAUD TERPADU - AGAPE KIDS" className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain mb-4 drop-shadow-md" />
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2E7D32] tracking-tight">PAUD TERPADU - AGAPE KIDS</h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 italic max-w-md leading-relaxed">{lang === "id" ? "Belajar melalui kasih, bermain, dan kreativitas" : "Learning through love, play, and creativity"}</p>

          <div className="mt-6 text-sm sm:text-base text-gray-800 font-semibold flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-green-100 rounded-full shadow-sm">TPA</span>
            <span className="px-3 py-1 bg-green-100 rounded-full shadow-sm">Play Group</span>
            <span className="px-3 py-1 bg-green-100 rounded-full shadow-sm">TK Plus & Nasional</span>
            <span className="px-3 py-1 bg-green-100 rounded-full shadow-sm">Anak Berkebutuhan Khusus</span>
          </div>
        </div>
      </aside>

      {/* RIGHT (30%) */}
      <main ref={scrollRef} className="flex-1 md:w-1/3 overflow-y-auto bg-transparent p-4">
        {/* Programs */}
        <section id="programs" className="py-6 px-4 bg-white/70 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-semibold text-center text-[#2E7D32] mb-3">📚 {lang === "id" ? "Program" : "Programs"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {programs.map((p, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-3">
                <h3 className="font-bold text-[#2E7D32]">{tr(p.title)}</h3>
                <p className="text-gray-700 text-sm mt-1">{tr(p.desc)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Us Section */}
<section id="about" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-6">
      {lang === "id" ? "Tentang Kami" : "About Us"}
    </h2>
    <p className="text-gray-700 leading-relaxed mb-8">
      {lang === "id"
        ? "PAUD Terpadu Agape Kids adalah sekolah yang berfokus pada pendidikan anak usia dini dengan pendekatan holistik. Kami percaya bahwa setiap anak unik, istimewa, dan perlu didampingi untuk berkembang secara optimal baik dalam aspek kognitif, sosial, emosional, maupun spiritual."
        : "PAUD Terpadu Agape Kids is a preschool dedicated to early childhood education with a holistic approach. We believe every child is unique and special, and deserves guidance to grow optimally in cognitive, social, emotional, and spiritual aspects."}
    </p>
    <ul className="space-y-4 text-left max-w-2xl mx-auto">
      <li className="flex items-start">
        <span className="text-green-600 text-xl mr-3">✔️</span>
        <span className="text-gray-700">
          {lang === "id"
            ? "Kurikulum terpadu berbasis nilai Kristiani"
            : "Integrated curriculum based on Christian values"}
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-green-600 text-xl mr-3">✔️</span>
        <span className="text-gray-700">
          {lang === "id"
            ? "Lingkungan belajar yang aman, menyenangkan, dan kreatif"
            : "A safe, fun, and creative learning environment"}
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-green-600 text-xl mr-3">✔️</span>
        <span className="text-gray-700">
          {lang === "id"
            ? "Guru berpengalaman dan penuh kasih"
            : "Experienced and caring teachers"}
        </span>
      </li>
    </ul>
  </div>
</section>



 {/* Activities Section */}
      {/* Activities Section */}
<section id="activities" className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-brand-green mb-12">
      Kegiatan Kami
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          title: "Belajar Bersama",
          desc: "Anak-anak belajar dengan metode yang menyenangkan, interaktif, dan penuh kreativitas.",
          icon: <FaBook className="text-5xl text-brand-green mb-4 mx-auto" />,
        },
        {
          title: "Kegiatan Seni",
          desc: "Anak-anak mengekspresikan kreativitas mereka melalui menggambar, melukis, dan kerajinan tangan.",
          icon: <FaPaintBrush className="text-5xl text-brand-green mb-4 mx-auto" />,
        },
        {
          title: "Bermain di Luar",
          desc: "Anak-anak bermain di ruang terbuka untuk melatih motorik kasar, bersosialisasi, dan mengenal alam.",
          icon: <FaTree className="text-5xl text-brand-green mb-4 mx-auto" />,
        },
        {
          title: "Belajar Nilai",
          desc: "Menanamkan nilai-nilai karakter, kebaikan, dan cinta kasih sejak dini.",
          icon: <FaHeart className="text-5xl text-brand-green mb-4 mx-auto" />,
        },
      ].map((activity, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-xl shadow-md p-8 text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
        >
          {activity.icon}
          <h3 className="text-xl font-semibold text-brand-green mb-2">
            {activity.title}
          </h3>
          <p className="text-gray-600">{activity.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* Team */}
        <section id="teachers" className="py-6 px-4 bg-white/70 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-semibold text-center text-[#2E7D32] mb-3">👩‍🏫 {lang === "id" ? "Team Kami" : "Our Team"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {teachers.map((t, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-white rounded-lg shadow p-3 cursor-pointer" onClick={() => setSelectedTeacher(t)}>
                <img src={t.photo} alt={t.name} className="w-24 h-24 object-cover rounded-full mx-auto" />
                <h3 className="mt-2 font-bold text-center">{t.name}</h3>
                <p className="text-gray-600 text-sm text-center">{tr(t.role)}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-6 px-4 bg-white/70 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-semibold text-center text-[#2E7D32] mb-3">🖼️ {lang === "id" ? "Galeri" : "Gallery"}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {gallery.map((img, i) => (
              <motion.img key={i} src={img} alt={`Gallery ${i}`} whileHover={{ scale: 1.05 }} className="w-full h-28 object-cover rounded-lg shadow cursor-pointer" onClick={() => setSelectedImage(img)} />
            ))}
          </div>
        </section>

       {/* Enroll Section */}
<section id="enroll" className="py-16 bg-gray-50">
  <div className="max-w-3xl mx-auto px-6 bg-white rounded-2xl shadow-lg p-10">
    <h2 className="text-3xl font-bold text-center text-[#2E7D32] mb-6">
      📝 {lang === "id" ? "Formulir Pendaftaran" : "Enrollment Form"}
    </h2>
    <p className="text-center text-gray-600 mb-8">
      {lang === "id"
        ? "Isi data berikut untuk mendaftarkan anak Anda ke PAUD Terpadu - Agape Kids."
        : "Fill in the form below to enroll your child at PAUD Terpadu - Agape Kids."}
    </p>

    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Child Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {lang === "id" ? "Nama Anak" : "Child’s Name"}
        </label>
        <input
          type="text"
          name="childName"
          value={formData.childName}
          onChange={handleInputChange}
          placeholder={lang === "id" ? "Masukkan nama anak" : "Enter child’s name"}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
        {errors.childName && (
          <p className="text-red-500 text-sm mt-1">{errors.childName}</p>
        )}
      </div>

      {/* Age */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {lang === "id" ? "Usia" : "Age"}
        </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder={lang === "id" ? "Masukkan usia anak" : "Enter age"}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
        {errors.age && (
          <p className="text-red-500 text-sm mt-1">{errors.age}</p>
        )}
      </div>

      {/* Parent Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {lang === "id" ? "Nama Orang Tua" : "Parent’s Name"}
        </label>
        <input
          type="text"
          name="parentName"
          value={formData.parentName}
          onChange={handleInputChange}
          placeholder={lang === "id" ? "Masukkan nama orang tua" : "Enter parent’s name"}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
        {errors.parentName && (
          <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {lang === "id" ? "Alamat" : "Address"}
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder={lang === "id" ? "Masukkan alamat" : "Enter address"}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {lang === "id" ? "Nomor Telepon" : "Phone Number"}
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder={lang === "id" ? "Masukkan nomor telepon" : "Enter phone number"}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {lang === "id" ? "Catatan" : "Notes"}
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          placeholder={lang === "id" ? "Tambahkan catatan (opsional)" : "Additional notes (optional)"}
          rows="3"
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-[#2E7D32] text-white rounded-lg font-semibold shadow-md hover:bg-[#256628] transition"
      >
        {lang === "id" ? "Kirim via WhatsApp" : "Send via WhatsApp"}
      </button>
    </form>
  </div>
</section>


        {/* Contact / Footer section (after Enroll) */}
        <section id="footer" className="py-6 px-4 bg-white/70 rounded-lg shadow-sm mb-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-center text-[#2E7D32] mb-4">{lang === "id" ? "Kontak" : "Contact"}</h2>

            {/* Responsive 3-column layout: stacked center on mobile; 3-cols on md */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-center md:text-left">
              {/* Left - Copyright */}
              <div className="flex flex-col justify-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} PAUD TERPADU - AGAPE KIDS</p>
                <p className="text-xs text-gray-600 mt-1">{lang === "id" ? "Semua hak cipta dilindungi." : "All rights reserved."}</p>
              </div>

              {/* Center - Social (centered on mobile, center on md) */}
                <div className="flex flex-col items-center">
                  <h3 className="font-semibold mb-2">{lang === "id" ? "Ikuti Kami" : "Follow Us"}</h3>
                  <div className="flex space-x-6 text-2xl">
                    <a
                      aria-label="Facebook"
                      href="https://www.facebook.com/share/1Eu12nSKP6/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-500 transition"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      aria-label="Instagram"
                      href="https://www.instagram.com/sekolahagapekids?igsh=dXZqMHQxMW5ndTB5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-500 transition"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      aria-label="WhatsApp"
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600 transition"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>


              {/* Right - Contact details (address/email/phone) */}
              <div className="md:text-right">
                <h3 className="font-semibold mb-2">{lang === "id" ? "Alamat & Kontak" : "Address & Contact"}</h3>
               <p className="text-sm flex items-start justify-center md:justify-end gap-2">
                  <FaMapMarkerAlt className="mt-1" /> <span>Jl. Sitanggang Bau, Desa Parsaoran1, Kec. Pangururan, Kabupaten Samosir 22392, Indonesia</span>
                </p>
                <p className="text-sm flex items-center justify-center md:justify-end gap-2 mt-2">
                  <FaEnvelope /> <a className="underline hover:text-green-600" href="mailto:agapekids@example.com">agapekids@gmail.com</a>
                </p>
                <p className="text-sm flex items-center justify-center md:justify-end gap-2 mt-2">
                  <FaPhone /> <a className="underline hover:text-green-600" href={`tel:+62${WHATSAPP_NUMBER}`}>+62 {WHATSAPP_NUMBER}</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Selected teacher modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
            <button onClick={() => setSelectedTeacher(null)} className="absolute top-2 right-2 text-gray-600 hover:text-black">✕</button>
            <img src={selectedTeacher.photo} alt={selectedTeacher.name} className="w-32 h-32 object-cover rounded-full mx-auto" />
            <h3 className="mt-2 text-xl font-bold text-center">{selectedTeacher.name}</h3>
            <p className="text-gray-600 text-sm text-center">{tr(selectedTeacher.role)}</p>
            <p className="mt-2 text-gray-700">{tr(selectedTeacher.bio)}</p>
          </div>
        </div>
      )}

      {/* Image modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-2 max-w-2xl w-full relative">
            <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 text-gray-600 hover:text-black">✕</button>
            <img src={selectedImage} alt="Gallery item" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
