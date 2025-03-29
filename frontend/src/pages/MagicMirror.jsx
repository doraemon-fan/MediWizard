import SkinUpload from "../components/SkinUpload";
import "../styles/magicMirror.css";

const MagicMirror = () => {
  return (
    <div className="magic-mirror-container">
      <h1 className="mirror-title">🪞 Magic Mirror: Skin Disease Detector</h1>
      <SkinUpload />
    </div>
  );
};

export default MagicMirror;
