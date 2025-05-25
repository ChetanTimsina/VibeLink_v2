import toast from "react-hot-toast";
import "./local.css";

export function deleteusertoast(callback) {
  let inputValue = "";

  toast.custom(
    (t) => (
      <div className={`toast-container ${t.visible ? "fadeIn" : ""}`}>
        <div className="toast-title">Confirm Deletion</div>
        <div className="toast-text">
          Type <code>DELETE</code> to confirm
        </div>
        <input
          className="toast-input"
          placeholder="Type DELETE"
          onChange={(e) => (inputValue = e.target.value)}
        />
        <div className="toast-actions">
          <button
            className="toast-btn cancel"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
          <button
            className="toast-btn delete"
            onClick={() => {
              if (inputValue === "DELETE") {
                toast.dismiss(t.id);
                callback(); // 🧨 boom
              } else {
                toast.error("Type DELETE exactly, bruh 💀", {
                  position: "top-right",
                });
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ),
    { position: "top-right" }
  );
}
