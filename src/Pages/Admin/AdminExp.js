import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, ReloadData, showLoading } from "../../redux/rootSlice";
import axios from "axios";
import { Modal, Form, Input, message } from "antd";

const AdminExp = () => {
 const [form] = Form.useForm();
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;
  const [showAddEditModel, setshowAddEditModel] = useState(false);
  const [selectedIteForEdit, setselectedIteForEdit] = useState(false);
  const [type, settype] = useState("Add");

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      let response;
      if (selectedIteForEdit) {
        response = await axios.post("api/portfolio/update-experience", {
          ...values,
          _id: selectedIteForEdit._id,
        });
      } else {
        response = await axios.post("api/portfolio/add-experience", values);
      }

      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setshowAddEditModel(false);
        setselectedIteForEdit(null);
        form.resetFields();
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
      const response = await axios.post("api/portfolio/delete-experience", {
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
      <div className="flex justify-end sm:justify-center sm:m-8">
        <button
          className="bg-blue-600 py-2 px-6 rounded-lg text-white"
          onClick={() => {
            setselectedIteForEdit(null);
            setshowAddEditModel(true);
          }}>
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-3 gap-10 sm:grid sm:grid-cols-1">
        {experience.map((experience) => (
          <div className="shadow border p-2" key={experience._id}>
            <h1 className="text-blue-600 font-bold text-3xl">
              {experience.period}
            </h1>
            <hr />
            <h1 className="text-xl">{experience.title}</h1>
            <h1 className="py-2 text-xl text-green-600 font font-bold">
              {experience.company}
            </h1>
            <h1>{experience.description}</h1>
            <hr />
            <div className="flex space-x-5 my-4 justify-end ">
              <button
                className="bg-blue-600 text-white px-8 py-1 rounded-lg"
                onClick={() => {
                  setselectedIteForEdit(experience);
                  setshowAddEditModel(true);
                  settype("Edit");
                }}>
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-5 py-2 rounded-lg"
                onClick={() => {
                  onDelete(experience);
                }}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {(type === "Add" || selectedIteForEdit) && (
        <Modal
          title={selectedIteForEdit ? "Edit Experience" : "Add Experience"}
          open={showAddEditModel}
          onCancel={() => {
            setshowAddEditModel(false);
          }}
          footer={null}>
          <Form
            form={form}
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={selectedIteForEdit}>
            <Form.Item
              label="Period "
              name="period"
              rules={[
                { required: true, message: "Please input your Period!" },
              ]}>
              <Input placeholder="write period here" />
            </Form.Item>
            <Form.Item
              label="title "
              name="title"
              rules={[{ required: true, message: "Please input your title!" }]}>
              <Input placeholder="write title here" />
            </Form.Item>
            <Form.Item
              label="Comapny "
              name="company"
              rules={[
                { required: true, message: "Please input your comapny!" },
              ]}>
              <Input placeholder="write comapny here" />
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
                  setselectedIteForEdit(null);
                  form.resetFields();
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

export default AdminExp;
