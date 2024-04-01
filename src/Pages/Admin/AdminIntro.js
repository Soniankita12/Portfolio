import { Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const AdminIntro = () => {
  const dispatch = useDispatch();
  const { TextArea } = Input;
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro._id,
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
    <div>
      <Form
        onFinish={onFinish}
        initialValues={portfolioData?.intro}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}>
        <Form.Item
          label="Welcome Text"
          name="welcomeText"
          rules={[
            { required: true, message: "Please input your welcomeText!" },
          ]}>
          <Input placeholder="write welcomeText here" />
        </Form.Item>
        <Form.Item
          label="First Name "
          name="firstName"
          rules={[{ required: true, message: "Please input your firstName!" }]}>
          <Input placeholder="write firstName here" />
        </Form.Item>
        <Form.Item
          label="Last Name "
          name="lastName"
          rules={[{ required: true, message: "Please input your lastName!" }]}>
          <Input placeholder="write lastName here" />
        </Form.Item>
        <Form.Item
          label="Caption "
          name="caption"
          rules={[{ required: true, message: "Please input your caption!" }]}>
          <Input placeholder="write caption here" />
        </Form.Item>
        <Form.Item
          label="Description "
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}>
          <TextArea rows={10} placeholder="write description here" />
        </Form.Item>
        <div className="flex justify-end">
          <button type="submit" className="px-10 py-2 bg-blue-600 rounded-lg">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminIntro;
