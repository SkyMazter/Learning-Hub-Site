interface SubjectCardProps {
  icon: string; // Path to the icon image
  title: string;
  description: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="subject-card">
      <div className="subject-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn secondary-btn">Start Learning</button>
    </div>
  );
};

export default SubjectCard;
