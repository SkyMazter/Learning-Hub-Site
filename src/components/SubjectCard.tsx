import { useNavigate } from "react-router-dom";

interface SubjectCardProps {
  icon: string; // Path to the icon image
  title: string;
  description: string;
  isComingSoon?: boolean;
}

const SubjectCard = ({
  icon,
  title,
  description,
  isComingSoon,
}: SubjectCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="subject-card">
      {/* <div className="tag-row">
        {isComingSoon ? <span className="tag">Coming Soon</span> : <div></div>}
      </div> */}
      <div className="subject-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {isComingSoon ? (
        <button className="btn deactivated-btn ">Coming Soon</button>
      ) : (
        <button
          onClick={() => navigate(`lesson/${title}`)}
          className="btn secondary-btn"
        >
          Start Learning
        </button>
      )}
    </div>
  );
};

export default SubjectCard;
