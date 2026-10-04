export default function Home() {
  return (
    <main style={{
      minHeight: "100vh", display: "grid", placeItems: "center",
      fontFamily: "Arial, sans-serif", padding: 32, textAlign: "center",
      color: "#3e342a"
    }}>
      <div>
        <h1>حديث يومي من الأربعين النووية</h1>
        <p>واجهة توليد صور الأحاديث للنشر الآلي.</p>
        <p>استخدم المسار: <code>/api/hadith-image?number=1</code></p>
      </div>
    </main>
  );
}
