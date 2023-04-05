import { useParams } from "react-router-dom";

export const DummyPage = () => {
  let params = useParams();

  return (
    <div className="users">
      <h2>{params.page}</h2>
    </div>
  );
};
