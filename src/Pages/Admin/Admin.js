import Header from "../../component/Header";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import AdminExp from "./AdminExp";
import AdminProject from "./AdminProject";
import AdminContact from "./AdminContact";
import { useEffect } from "react";

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="flex justify-between m-4">
        <h1 className="text-2xl text-blue-800 font-bold text-center m-2">
          Admin Dashboard
        </h1>
        <h1 className="cursor-pointer flex border-2 items-center  px-5 rounded-lg  border-red-500 text-red-500 font-bold"onClick={()=>{
          localStorage.removeItem('token');
          window.location.href ="/admin-login"
        }}>
          Logout
        </h1>
      </div>

      <hr />
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
