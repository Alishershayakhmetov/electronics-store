export default function Error404() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", margin: "auto auto" }}
    >
      <h1 style={{ margin: "5px auto 20px auto" }}>Page not found</h1>
      <img
        src={"/src/assets/best-404-pages.png"}
        style={{ margin: "5px auto 20px auto", width: "50%", height: "auto" }}
      />
    </div>
  );
}
