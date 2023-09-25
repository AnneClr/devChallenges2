import { team } from "../utils.jsx";
import TeamMember from "./TeamMember.jsx";

export default function TeamMembersList() {

  return (
    <div className="teamPhotoContainer">
      {team.map((member) => (
        <TeamMember key={member.id} {...member} />
      ))}
    </div>
  );
}
