import { AiFillAppstore, AiOutlineAntDesign } from "react-icons/ai";
import { FaAws} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { IoIosSettings } from "react-icons/io";
import { FaNetworkWired } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";
import { FaMobile, FaGlobe, FaVideo } from "react-icons/fa";
import {
  SiProgress,
  SiAntdesign,
  SiUikit,
  SiFigma,
  SiBlockchaindotcom,
  SiFrontendmentor,
  SiFreedesktopdotorg,
  SiDatabricks,
} from "react-icons/si";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaAws/>,
    title: "AWS",
    des: "Proficient in AWS services (EC2, RDS, S3, Cloud Front,IAM). Automated processes using AWS Lambda and enforced security with IAM policies",
  },
  {
    id: 2,
    icon: <VscAzure />,
    title: "Azure",
    des: "Navigating the Azure portal to manage resources.Understanding cloud concepts and basic Azure services",
  },
  {
    id: 3,
    icon: <IoIosSettings />,
    title: "DevOps",
    des: "Utilized Git and GitHub for version control and team collaboration.Managed Docker images and containers, optimizing build efficiency.",
  },
  {
    id: 4,
    icon: <FaNetworkWired />, // You can change the icon to suit "Application Deployment"
    title: "CCNA",
    des: "Configured and deployed Cisco routers and switches to establish secure and efficient LAN/WAN connectivity for a multi-site simulated network.",
  },
  {
    id: 5,
    icon: <FaLinux />,
    title: "Linux Server",
    des: "proficiency in command-line tools, shell scripting (Bash, Python, Perl), system administration (installation, configuration, user management), and networking (DNS, DHCP). Also, add experience with virtualization, containerization, automation tools like Ansible, cloud platforms (AWS)",
  },

  {
    id: 6,
    icon: <FaUbuntu />,
    title: "Ubuntu Server",
    des: "Proficiency in Bash/Shell scripting for automation, navigation, file manipulation, and process management. Also, add experience with virtualization, containerization, automation tools like Ansible, cloud platforms (AWS)",
  },
];
