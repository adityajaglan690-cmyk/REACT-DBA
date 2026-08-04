function Body() {
  return (
    <section
      style={{
        height: "80vh",
        background:
          "linear-gradient(to right, #0f172a, #1e3a8a, #2563eb)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "50px", marginBottom: "15px" }}>
          Welcome to My Website
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            margin: "0 auto 30px",
          }}
        >
          We build modern, responsive, and high-quality websites using
          React.js, HTML, CSS, and JavaScript.
        </p>

        <button
          style={{
            padding: "12px 30px",
            fontSize: "18px",
            background: "#facc15",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Body;