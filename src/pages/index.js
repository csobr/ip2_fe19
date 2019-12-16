import React, { Component } from "react";
import projects from '../data/projects.json';

export default class Projects extends Component {
  renderProjects() {
    return projects.map((project, index) => {
      const { name, backgroundImage, year, description, stack } = project;
      return (
        <div key={name}>
          <div className="item">
            {name}
            <div className="item--image">
              <img src={backgroundImage} alt="Project Image"></img>
            </div>
            <div className="item--text">
              <p className ="item--year">{year}</p>
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
      <div className="projects--wrapper">
        <div className="grid">{this.renderProjects()}</div>
      </div>
    );
  }
}
