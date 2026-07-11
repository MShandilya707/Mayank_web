import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectModal } from './ProjectModal';

const projects = [
  {
    title: "Autonomous Aerial-Bipedal Robotic System",
    year: "2025",
    desc: "Engineered a 2.8kg bipedal humanoid integrated with a custom hexacopter. Achieved 58% liftoff thrust efficiency with full payload and simulated 16-DOF locomotion via NVIDIA Isaac Gym.",
    longDesc: "Developed a fully functional flying humanoid robot for public safety. Engineered a custom hexacopter flight platform utilizing 6x KV1000 BLDC motors and a Matek F405 controller, successfully lifting a 2.8kg payload at 58% maximum thrust. Designed and 3D-printed a 16-DOF bipedal structure powered by 30KG servos. Integrated OpenAI's Whisper and GPT-4o on a Milk-V Duo microcomputer for local speech recognition and natural language processing. Bipedal locomotion and dynamic Zero Moment Point (ZMP) stability were trained from scratch using Deep Reinforcement Learning (RL) policies within NVIDIA Isaac Gym.",
    images: [
      "/projects/flying-humanoid.png"
    ],
    tags: ["Robotics", "NVIDIA Isaac Gym", "LLMs", "Hardware Integration"],
    span: "col-span-2"
  },
  {
    title: "6-DOF Kinesthetic Telepresence System",
    year: "2025",
    desc: "Engineered a high-performance C++ telepresence engine utilizing a 6-DOF Extended Kalman Filter to translate ESP32 smart-glove data into absolute 3D coordinates at 100Hz.",
    longDesc: "A real-time robotic telepresence system designed to capture high-fidelity human kinesthetic data. The hardware edge-node features an ESP32-WROOM interfacing with an MPU9250 IMU, running Mahony sensor fusion, and broadcasting raw UDP telemetry at 100Hz. A native C++ Linux daemon repacks this stream into Protobuf messages over gRPC to a Bazel-managed Central Engine. The core engine utilizes the Eigen library to process kinematics through a custom 6-DOF Extended Kalman Filter (EKF), stripping gravity to calculate highly stable absolute 3D coordinates and velocities for robotic control or visualizers.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
    ],
    tags: ["C++", "Kalman Filter", "gRPC / Protobuf", "ESP32"],
    span: "col-span-1"
  },
  {
    title: "Workwave: IoT Spatial Tracking & Safety System",
    year: "2024",
    desc: "Engineered an ESP32-S3 occupational safety system utilizing UWB trilateration, MPU6500 IMU sensor fusion, and MQTT telemetry to achieve sub-meter positional accuracy.",
    longDesc: "Developed an advanced IoT occupational safety system engineered for high-noise industrial environments. The hardware architecture is built around an ESP32-S3 microcontroller integrating an MPU6500 6-DOF IMU and UWB anchors. By combining UWB time-of-flight (ToF) positional data with IMU orientation data, the embedded system achieves highly accurate sub-meter spatial tracking. Real-time telemetry and hazard triggers are orchestrated via an MQTT broker, allowing the system to instantly activate localized buzzer and speaker actuators when workers breach geofenced danger zones. The portable system is powered by an integrated 18650 Battery with a custom BMS.",
    images: [
      "/projects/workwave.png"
    ],
    tags: ["ESP32-S3", "MQTT", "UWB", "Sensor Fusion"],
    span: "col-span-1"
  },
  {
    title: "ML-Based Exoplanet Classification Pipeline",
    year: "2024",
    desc: "Developed an end-to-end machine learning pipeline processing 1,000+ astronomical datasets, leveraging PCA and Decision Trees to predict habitability with 0.8 explained variance.",
    longDesc: "Engineered a robust Machine Learning pipeline in Python to classify the habitability of exoplanets based on NASA/astronomical datasets. The project involved extensive data wrangling and preprocessing over 1,000 distinct planetary records. Applied Principal Component Analysis (PCA) for high-dimensional feature reduction, followed by K-Means clustering for exploratory data analysis. The final classification model utilized optimized Decision Trees, achieving a strong 0.8 explained variance score. This project demonstrates proficiency in predictive modeling, statistical analysis, and end-to-end Python data science workflows.",
    images: [
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200&auto=format&fit=crop"
    ],
    tags: ["Machine Learning", "Python", "PCA", "Scikit-Learn"],
    span: "col-span-1"
  },
  {
    title: "Automated Mechatronic Dispensary System",
    year: "2024",
    desc: "Engineered a secure, C++ programmed mechatronic medication delivery system utilizing stepper motors, RTC scheduling, and active monitoring for healthcare applications.",
    longDesc: "Designed and developed a complete mechatronics solution for automated healthcare applications. The system utilizes an Arduino-compatible microcontroller programmed in embedded C++ to manage real-time clock (RTC) scheduling and dispense medications with precise dosage monitoring. Actuation is handled via precisely calibrated stepper motors, while onboard sensors monitor delivery success and container states. The system was specifically designed to minimize human error in care facilities, providing a secure, autonomous fail-safe mechanism for patients requiring strict medication adherence.",
    images: [
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1200&auto=format&fit=crop"
    ],
    tags: ["Embedded C++", "Mechatronics", "Arduino", "Actuation"],
    span: "col-span-1"
  },
  {
    title: "SkillSwap: Full-Stack Educational Barter Platform",
    year: "2024",
    desc: "Developed a scalable React and Vite application utilizing Supabase (PostgreSQL) for real-time chat, JWT authentication, and secure peer-to-peer educational exchanges.",
    longDesc: "Architected and deployed SkillSwap, a highly scalable full-stack web application that introduces a peer-to-peer barter system for the education industry. The frontend is built using React and Vite, optimized for performance and responsive design. The backend leverages Supabase (PostgreSQL) to handle secure user authentication (JWT), robust relational data modeling for courses, and WebSockets for real-time messaging between users. The platform enables users to seamlessly trade skills and courses through a resilient, secure, and modern architecture.",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
    ],
    tags: ["React / Vite", "Supabase", "PostgreSQL", "WebSockets"],
    span: "col-span-2"
  },
  {
    title: "ROS 2 AI Monocular 3D Perception",
    year: "2025",
    desc: "Engineered a hybrid Python/C++ ROS 2 pipeline leveraging PyTorch (MiDaS) and YOLOv8 to generate semantically segmented 3D point clouds from a single 2D camera.",
    longDesc: "Developed an advanced ROS 2 perception system transforming monocular 2D images into rich 3D environments. A PyTorch-based AI node runs MiDaS depth estimation and YOLOv8 nano semantic segmentation in real-time. A high-performance C++ Lifecycle node then synchronizes this telemetry, projecting 2D pixels into 3D spatial coordinates using camera intrinsics. The architecture utilizes Point Cloud Library (PCL) algorithms like VoxelGrid downsampling and StatisticalOutlierRemoval to ensure clean, lightweight point clouds. The seamless mapping of 2D bounding boxes to 3D surfaces provides zero-cost 3D semantic segmentation, optimized to run entirely on a CPU.",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
    ],
    tags: ["ROS 2", "PyTorch", "C++ / PCL", "YOLOv8"],
    span: "col-span-1"
  },
  {
    title: "RobotX Fleet OCS Dashboard",
    year: "2025",
    desc: "Engineered a C++ ROS 2 Operator Control Station (OCS) using Dear ImGui to bridge multi-vehicle fleet telemetry to a strict TCP Protobuf server over lossy 2.4GHz RF links.",
    longDesc: "Developed the central 'RoboCommand' Operator Control Station (OCS) for the Archimedes Autonomous Vehicles (AAV) fleet. Engineered as a highly optimized C++ ROS 2 node, the dashboard provides a hardware-accelerated Dear ImGui interface (OpenGL3) to monitor real-time telemetry from USV, UUV, and UAV platforms. The system bridges high-frequency intra-fleet data into strictly formatted TCP Protobuf egress streams required by the RoboNation scoring server. Implemented specialized SensorDataQoS profiles to maintain resilience over lossy 2.4GHz RF links, and dynamic incident response features that automatically translate operator inputs into Nav2 keep-out zones.",
    images: [
      "/projects/aav-gui.png"
    ],
    tags: ["ROS 2", "C++ / ImGui", "Protobuf / TCP", "Fleet Network"],
    span: "col-span-1"
  },
  {
    title: "Autonomous UUV (NYCU Collaboration)",
    year: "2026",
    desc: "Leading an international robotics collaboration with NYCU to engineer a next-generation Unmanned Underwater Vehicle (UUV) for complex multi-domain operations.",
    longDesc: "Spearheading a joint robotics initiative with National Yang Ming Chiao Tung University (NYCU) to engineer a next-generation Unmanned Underwater Vehicle (UUV). The project encompasses full-stack marine robotics development, including advanced hydrodynamics, underwater perception pipelines, and complex inter-vehicle acoustic communication systems. Designed to operate seamlessly alongside autonomous surface vessels, the UUV acts as a critical sub-surface node in a multi-domain autonomous fleet architecture.",
    images: [
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1200&auto=format&fit=crop"
    ],
    tags: ["Marine Robotics", "UUV", "System Architecture", "Perception"],
    span: "col-span-2"
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="section">
      <style>
        {`
          .bento-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          @media (min-width: 768px) {
            .bento-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .col-span-2 {
              grid-column: span 2;
            }
          }
        `}
      </style>
      <motion.h2 
        className="title-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '4rem' }}
      >
        Projects.
      </motion.h2>

      <div className="bento-grid">
        {projects.map((project, index) => (
          <motion.div
            layoutId={`project-${project.title}`}
            key={index}
            className={project.span}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01, backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedProject(project)}
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              padding: '2.5rem',
              backgroundColor: 'var(--color-bg)',
              borderBottom: '2px solid var(--color-border)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-text)' }}>{project.title}</h3>
              <span style={{ color: 'var(--color-text)', opacity: 0.8, fontSize: '0.9rem', fontWeight: 500 }}>{project.year}</span>
            </div>
            
            <p className="text-muted" style={{ lineHeight: 1.6, flexGrow: 1, marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: project.span === 'col-span-2' ? '80%' : '100%', color: 'var(--color-muted)' }}>{project.desc}</p>
            
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ 
                  fontSize: '0.75rem', 
                  padding: '0.4rem 1rem', 
                  border: '1px solid var(--color-text)',
                  borderRadius: '0',
                  color: 'var(--color-text)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};
