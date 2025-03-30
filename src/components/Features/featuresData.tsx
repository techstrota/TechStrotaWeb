import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <div style={{ backgroundColor: "white", width: "40px", height: "45px" }}>
        <Image
          src="/images/Languages/laravel.svg"
          alt="Laravel Icon"
          width={40}
          height={45}
        />
      </div>
    ),
    title: "Laravel",
  },
  {
    id: 2,
    icon: (
      <div style={{ backgroundColor: "white", width: "40px", height: "45px" }}>
        <Image
          src="/images/Languages/php.svg"
          alt="PHP Icon"
          width={40}
          height={45}
        />
      </div>
    ),
    title: "PHP",
  },
  {
    id: 3,
    icon: (
      <div style={{ backgroundColor: "white", width: "40px", height: "45px" }}>
        <Image
          src="/images/Languages/react.svg"
          alt="React Icon"
          width={40}
          height={45}
        />
      </div>
    ),
    title: "React.js",
  },
  {
    id: 4,
    icon: (
      <div style={{ backgroundColor: "white", width: "40px", height: "45px" }}>
        <Image
          src="/images/Languages/js.svg"
          alt="JavaScript Icon"
          width={40}
          height={45}
        />
      </div>
    ),
    title: "JavaScript",
  },
  {
    id: 5,
    icon: (
      <div style={{ backgroundColor: "white", width: "40px", height: "45px" }}>
        <Image
          src="/images/Languages/python.svg"
          alt="Python Icon"
          width={40}
          height={45}
        />
      </div>
    ),
    title: "Python",
  },
  {
    id: 6,
    icon: (
      <div style={{ backgroundColor: "white", width: "40px", height: "45px" }}>
        <Image
          src="/images/Languages/mongo.svg"
          alt="MongoDB Icon"
          width={40}
          height={45}
        />
      </div>
    ),
    title: "MongoDB",
  },
  {
    id: 7,
    icon: (
      <div style={{ backgroundColor: "white", width: "40px", height: "45px" }}>
        <Image
          src="/images/Languages/dotnet.svg"
          alt=".NET Icon"
          width={40}
          height={45}
        />
      </div>
    ),
    title: ".NET",
  },
  {
    id: 8,
    icon: (
      <div style={{ backgroundColor: "white", width: "40px", height: "45px" }}>
        <Image
          src="/images/Languages/html5.svg"
          alt="HTML5 Icon"
          width={40}
          height={45}
        />
      </div>
    ),
    title: "HTML5",
  },
  {
    id: 9,
    icon: (
      <div style={{ backgroundColor: "white", width: "40px", height: "45px" }}>
        <Image
          src="/images/Languages/sql.svg"
          alt="SQL Icon"
          width={40}
          height={45}
        />
      </div>
    ),
    title: "SQL",
  },
  {
    id: 10,
    icon: (
      <div style={{ backgroundColor: "white", width: "40px", height: "45px" }}>
        <Image
          src="/images/Languages/java.svg"
          alt="Java Icon"
          width={40}
          height={45}
        />
      </div>
    ),
    title: "Java",
  },
  {
    id: 11,
    icon: (
      <div style={{ backgroundColor: "white", width: "40px", height: "45px" }}>
        <Image
          src="/images/Languages/node-js.svg"
          alt="Node.js Icon"
          width={40}
          height={45}
        />
      </div>
    ),
    title: "Node.js",
  },
  {
    id: 12,
    icon: (
      <div style={{ backgroundColor: "white", width: "40px", height: "45px" }}>
        <Image
          src="/images/Languages/ai.svg"
          alt="AI Icon"
          width={40}
          height={45}
        />
      </div>
    ),
    title: "Artificial Intelligence",
  },
];

export default featuresData;
