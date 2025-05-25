export default function Loading() {
  return (
    <div style={{ marginTop: "7vw", textAlign: "center", padding: "20px" }}>
      <div className="top-main" style={{ opacity: 0.7 }}>
        <section className="top-main-above" style={{ background: "#f0f0f0" }}>
          <div style={{ padding: "20px" }}>Loading story...</div>
        </section>

        <section className="top-main-below">
          <div
            className="profile-image adjustForImage profile-profile"
            style={{ background: "#f0f0f0" }}
          ></div>

          <div className="user-details">
            <h6 style={{ fontSize: "2vw" }}>Loading...</h6>
            <h6 style={{ fontSize: "1vw" }}>Loading friends...</h6>
          </div>

          <div className="user-details-edit">
            <button disabled>Loading...</button>
            <button className="edit" disabled>
              ▼
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
