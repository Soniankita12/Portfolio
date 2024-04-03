import { Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const AdminAbout = () => {
  const dispatch = useDispatch();
  const { TextArea } = Input;
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const tempskills = values.skills.split(",");
      values.skills = tempskills;
      dispatch(showLoading());
      const response = await axios.post("api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
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
        initialValues={{
          ...portfolioData?.about,
          skills: portfolioData.about.skills.join(","),
        }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}>
        <Form.Item
          label="Description 1"
          name="description1"
          rules={[
            { required: true, message: "Please input your welcomeText!" },
          ]}>
          <TextArea rows={6} placeholder="write description1 here" />
        </Form.Item>
        <Form.Item
          label=" Description 2 "
          name="description2"
          rules={[
            { required: true, message: "Please input your description2!" },
          ]}>
          <TextArea rows={6} placeholder="write description2 here" />
        </Form.Item>
        <Form.Item
          label="Lottie Image Url "
          name="lottieImgUrl"
          rules={[
            { required: true, message: "Please input your lottieImgUrl!" },
          ]}>
          <TextArea rows={3} placeholder="write lottieImgUrl here" />
        </Form.Item>
        <Form.Item
          label="Skills "
          name="skills"
          rules={[{ required: true, message: "Please input your skills!" }]}>
          <TextArea rows={3} placeholder="write skills here" />
        </Form.Item>
        <div className="flex justify-end">
          <button type="submit" className="px-10 py-2 bg-blue-600 text-white rounded-lg">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminAbout;
