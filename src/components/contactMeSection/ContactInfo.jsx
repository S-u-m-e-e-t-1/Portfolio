import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="sumeetpanigrahy494@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7894473241" Image={FiPhone} />
      <SingleInfo text="Berhmapur,Ganjam,Odisha" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
