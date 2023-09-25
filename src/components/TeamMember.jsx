export default function TeamMember({ src, name, role }) {
  return (
    <>
      <div className="memberContainer">
        <div className="memberPhotoAndName">
          <img src={src} alt="team member photo" />
          <h3>{name}</h3>
        </div>

        <div className="memberRole">
          <h4>{role}</h4>
        </div>
      </div>
    </>
  );
}
