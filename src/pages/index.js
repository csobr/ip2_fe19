import React, { Component } from "react";
import projects from "../data/projects.json";
import "../styles/projects.scss";

export default class Projects extends Component {
  renderProjects() {
    return projects.map((project, index) => {
      const { name, backgroundImage, year, description, stack } = project;
      return (
        <div key={name}>
          <div className="item">
            <div className="item--image">
              <img
                loading="lazy"
                src={backgroundImage}
                alt="Project Image"
              ></img>
            </div>
            <div className="item--text">
              <p className="item--name">{name}</p>
              <p className="item--year">{year}</p>
              <p className="item--description">{description}</p>
              <p className="item--stack">{stack}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2 className="projects--header">Projects</h2>

        <div className="projects--wrapper">
          <div className="grid">{this.renderProjects()}</div>
        </div>
      </div>
    );
  }
}
