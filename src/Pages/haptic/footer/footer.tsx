import "./footer.css";

function FooterPage() {
  return (
    <div className="flex flex-row flex-wrap p-4">
      <div className="flex div11">
        <img
          className="haptic-img"
          src="/src/assets/haptic/last_div/haptic_logo.jpg"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="flex div22 mt-3">
        <ul>
          <li className="li-div" style={{ fontWeight: "bold" }}>
            Learn More
          </li>
          <li className="li-div ">Home</li>

          <li className="li-div ">Work</li>
          <li className="li-div ">Pricing</li>
          <li className="li-div ">Careers</li>
          <li></li>
          <li></li>
          <li></li>
          <li className="li-div">Haptic © 2025</li>
        </ul>
      </div>
      <div className="flex gold div33">3</div>
    </div>
  );
}

export default FooterPage;
