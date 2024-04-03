import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, ReloadData, showLoading } from "../../redux/rootSlice";
import axios from "axios";
import { Modal, Form, Input, message } from "antd";

const AdminProject = () => {
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;
  const [showAddEditModel, setshowAddEditModel] = useState(false);
  const [selectedIteForEdit, setselectedIteForEdit] = useState(false);
  const [type, settype] = useState("Add");

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      let response;
      if (selectedIteForEdit) {
        response = await axios.post("api/portfolio/update-project", {
          ...values,
          _id: selectedIteForEdit._id,
        });
      } else {
        response = await axios.post("api/portfolio/add-project", values);
      }

      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setshowAddEditModel(false);
        setselectedIteForEdit(null);
        dispatch(hideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("api/portfolio/delete-project", {
        _id: values._id,
      });
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.success);
        dispatch(hideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end sm:justify-center m-4 sm:m-8">
        <button
          className="bg-blue-600 py-2 px-6 rounded-lg text-white"
          onClick={() => {
            setselectedIteForEdit(null);
            setshowAddEditModel(true);
          }}>
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-3 gap-10 sm:grid sm:grid-cols-1">
        {project.map((project) => (
          <div className="shadow border p-2" key={project._id}>
            <h1 className="text-blue-600 font-bold text-3xl">
              {project.title}
            </h1>
            <hr />
            <img
              className="h-62 w-80"
              alt={project.title + "pic"}
              src={project.imgUrl}
            />
            <h1>{project.description}</h1>
            <hr />
            <h1 className="font-bold text-sm">
              {project.techStack.join(", ")}
            </h1>
            <hr />
            <div className="flex space-x-5 my-4 justify-end ">
              <button
                className="bg-blue-600 text-white px-8 py-1 rounded-lg"
                onClick={() => {
                  setselectedIteForEdit(project);
                  setshowAddEditModel(true);
                  settype("Edit");
                }}>
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-5 py-2 rounded-lg"
                onClick={() => {
                  onDelete(project);
                }}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {(type === "Add" || selectedIteForEdit) && (
        <Modal
          title={selectedIteForEdit ? "Edit Project" : "Add Project"}
          open={showAddEditModel}
          onCancel={() => {
            setshowAddEditModel(false);
          }}
          footer={null}>
          <Form
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={
              {
                ...selectedIteForEdit,
                techStack: selectedIteForEdit?.techStack?.join(", ") || "",
              } || {}
            }>
            <Form.Item
              label="Title "
              name="title"
              rules={[
                { required: true, message: "Please input your Period!" },
              ]}>
              <Input placeholder="write period here" />
            </Form.Item>
            <Form.Item
              label="Link"
              name="link"
              rules={[{ required: true, message: "Please input your title!" }]}>
              <Input placeholder="write title here" />
            </Form.Item>
            <Form.Item
              label="Image Url "
              name="imgUrl"
              rules={[
                { required: true, message: "Please input your comapny!" },
              ]}>
              <Input placeholder="write comapny here" />
            </Form.Item>
            <Form.Item
              label="Tech Stack"
              name="techStack"
              rules={[
                { required: true, message: "Please input your comapny!" },
              ]}>
              <TextArea placeholder="write comapny here" />
            </Form.Item>
            <Form.Item
              label="Description "
              name="description"
              rules={[
                { required: true, message: "Please input your description!" },
              ]}>
              <TextArea rows={6} placeholder="write description here" />
            </Form.Item>
            <div className="flex gap-5 justify-end">
              <button
                className="px-10 py-2 bg-red-600 rounded-lg text-white"
                onClick={() => {
                  setshowAddEditModel(false);
                }}>
                cancel
              </button>
              <button
                type="submit"
                className="px-10 py-2 bg-blue-600  text-white rounded-lg">
                {selectedIteForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default AdminProject;
