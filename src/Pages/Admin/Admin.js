import Header from "../../component/Header";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import AdminExp from "./AdminExp";
import AdminProject from "./AdminProject";

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="m-2 p-4 text-3xl">
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: "Intro",
                key: "1",
                children: <AdminIntro />,
              },
              {
                label: "About",
                key: "2",
                children: <AdminAbout />,
              },
              {
                label: "Experiences",
                key: "3",
                children: <AdminExp />,
              },
              {
                label: "Projects",
                key: "4",
                children: <AdminProject />,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default Admin;
