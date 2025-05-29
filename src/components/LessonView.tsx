import { useParams } from "react-router-dom";
import Docker from "../pages/Docker";

const LessonView = () => {
  const { lessonID } = useParams();
  console.log(lessonID);
  switch (lessonID) {
    case "Docker":
      return <Docker />;
    // case "1":
    //   return <LessonOne />;
    default:
      return <div>404</div>;
  }
};

export default LessonView;
