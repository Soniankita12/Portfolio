import { Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const AdminContact = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact._id,
      });
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };
  return (
    <div className="mx-10">
      <Form
        onFinish={onFinish}
        initialValues={portfolioData?.contact}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please input your welcomeText!" },
          ]}>
          <Input placeholder="write name here" />
        </Form.Item>
        <Form.Item
          label="Email "
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}>
          <Input placeholder="write email here" />
        </Form.Item>
        <Form.Item
          label="Location "
          name="location"
          rules={[{ required: true, message: "Please input your location!" }]}>
          <Input rows={10} placeholder="write location here" />
        </Form.Item>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-10 py-2 bg-blue-600 rounded-lg text-white">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminContact;
