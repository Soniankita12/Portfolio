import Header from "../../component/Header";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import AdminExp from "./AdminExp";
import AdminProject from "./AdminProject";
import AdminContact from "./AdminContact";

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      <h1 className="text-2xl text-blue-800 font-bold text-center m-2">
        Admin Dashboard
      </h1>
      <hr/>
      {portfolioData && (
        <div className="mx-2 p-2 text-3xl ">
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
              {
                label: "Contact",
                key: "5",
                children: <AdminContact />,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default Admin;
