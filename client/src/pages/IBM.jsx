import React, { useEffect } from "react";
import banner from "../assets/ibmbanner.jpg";
import banner2 from '../assets/ibmbanner2.jpg';
import IBMCourses from "../components/IBMCourses";
import html from "../assets/htmllogo.jpeg";
import c from "../assets/clogo.png";
import foundationc from "../assets/c++logo.png";
import rdbms from "../assets/rdbmslogo.jpeg";
import sql from "../assets/sqllogo.png";
import tensorlow from "../assets/tensorlogo.jpeg";
import datasci from "../assets/datascimethologo.png";
import pydatasci from "../assets/pylogo.jpeg";
import Api from "../assets/apilogo.png";
import scala101 from "../assets/ibmlogo.jpeg";
import aglie from "../assets/aglielogo.png";
import devops from "../assets/devopslogo.jpeg";
import pydataanalis from "../assets/DAwithpylogo.jpeg";
import cloudfunda from "../assets/cloudfundalogo.png";
import container from "../assets/containerlogo.jpeg";
import bigdata from "../assets/bigdatahandlogo.jpeg";
import nodejs from "../assets/nodelogo.png";
import mangodb from "../assets/mongodblogo.png";
import Machine from "../assets/machinelogo.png";
import js from "../assets/jslogo.png";

const IBM = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const ibmcourses = [
        {
            image: html,
            title: "CERTIFICATION COURSE",
            description: "IBM Web Development using HTML Certification Course",
            price: "₹3000",
            url: '/IBMcourses'
        },
        {
            image: c,
            title: "CERTIFICATION COURSE",
            description: "IBM Software Foundation Course C Certification Course",
            price: "₹3000",
            url: '/IBMcourses'
        },
        {
            image: foundationc,
            title: "CERTIFICATION COURSE",
            description: "IBM Software Foundation Course C++ Certification Course",
            price: "₹3000",
            url: '/IBMcourses'
        },
        {
            image: rdbms,
            title: "CERTIFICATION COURSE",
            description: "IBM RDBMS - Database Fundamentals Certification Course",
            price: "₹3000",
            url: '/IBMcourses'
        },
        {
            image: sql,
            title: "CERTIFICATION COURSE",
            description: "IBM SQL and Relational Database 101 Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: tensorlow,
            title: "CERTIFICATION COURSE",
            description: "IBM Deep Learning with TensorFlow Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: datasci,
            title: "CERTIFICATION COURSE",
            description: "IBM Data Science Methodology Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: pydatasci,
            title: "CERTIFICATION COURSE",
            description: "IBM Python for Data Science Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: Api,
            title: "CERTIFICATION COURSE",
            description: "IBM Rest API Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: scala101,
            title: "CERTIFICATION COURSE",
            description: "IBM Scala 101 Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: aglie,
            title: "CERTIFICATION COURSE",
            description: "IBM Agile Methodologies Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: devops,
            title: "CERTIFICATION COURSE",
            description: "IBM DevOps Fundamentals Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: pydataanalis,
            title: "CERTIFICATION COURSE",
            description: "IBM Data Analysis with Python Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: cloudfunda,
            title: "CERTIFICATION COURSE",
            description: "IBM Cloud Fundamental Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: container,
            title: "CERTIFICATION COURSE",
            description: "IBM Introduction to Containers, Kubernetes and OpenShift V2 Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: bigdata,
            title: "CERTIFICATION COURSE",
            description: "IBM Introduction to Big Data, Hadoop and the Ecosystems Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: nodejs,
            title: "CERTIFICATION COURSE",
            description: "IBM Node JS Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: mangodb,
            title: "CERTIFICATION COURSE",
            description: "IBM NoSQL – MongoDB Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: Machine,
            title: "CERTIFICATION COURSE",
            description: "IBM Machine Learning with Python Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        },
        {
            image: js,
            title: "CERTIFICATION COURSE",
            description: "IBM JavaScript Certification Course",
            price: "₹3000",
            url: "/IBMcourses"
        }
    ];
    return (
        <>
            <div className="bg-gray-100 w-auto relative contrast-75 h-[55vh] content-center text-justify"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex items-center justify-between p-5">
                    <div className="w-2/3">
                        <h1 className="text-6xl font-bold font-serif">IBM Certification Courses</h1>
                        <h5 className="text-xl mt-4">
                            IBM Certification Courses helps learners gain skills in the latest emerging technologies<br />
                            including AI/ML, Analytics, Blockchain, Cloud, Cybersecurity, Data Science and more.<br />
                            <br />
                            The IBM Certification Courses have created revolutionary transformation in higher education,<br />
                            rapidly building industry-ready software competencies that organizations need.<br />
                            <br />
                            This is a certification program offered by IBM along with e-courseware which includes videos,<br />
                            hands-on labs, and reading material for better preparation.<br />
                        </h5>
                    </div>
                    <div className="w-1/3 ">
                        <img className="w-full h-auto transition-transform duration-300 easy-in-out      hover:scale-110" src={banner2} alt="IBM Banner" />
                    </div>
                </div>
            </div>
            <div className="bg-teal-50 py-10 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto ">
                    {ibmcourses.map((course, index) => (
                        <IBMCourses
                            key={index}
                            title={course.title}
                            image={course.image}
                            price={course.price}
                            description={course.description}
                            url={course.url}
                        />
                    ))}
                </div>

            </div>
        </>
    );
};

export default IBM;