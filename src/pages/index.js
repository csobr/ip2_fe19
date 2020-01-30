import React, { useState, useEffect } from "react";
import Head from "next/head";
import "../styles/main.scss";
import Projects from "../components/project";
import Pagination from "../components/pagination";
import axios from "axios";
import Navbar from "../components/navBar";

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(1);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      const res = await axios.get("projects.json");
      setProjects(res.data);
      setLoading(false);
    };
    fetchProject();
  }, []);

  //Get current project
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
      <Head>
        <title>Siham Hadi</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A software developer and designer based in Stockholm."
        />
      </Head>
      <Navbar />
      <div className="projects--wrapper">
        <div className="slider">
          <h2 className="projects--header">Projects</h2>
          <Projects projects={currentProjects} loading={loading} />
          <Pagination
            projectsPerPage={projectsPerPage}
            totalProjects={projects.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}
export default Project;
