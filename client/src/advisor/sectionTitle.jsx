import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./sectionTitle.css";

const SectionTitle = (props) => {
  return (
    <div className="p-title">
      <section className="py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1>{props.title}</h1>
          <Breadcrumb>
            {props.breadcrumbs.map((breadcrumb, i) => (
              <Breadcrumb.Item key={i} active={breadcrumb.active}>
                {breadcrumb.active ? (
                  breadcrumb.name
                ) : (
                  <NavLink to={breadcrumb.link}>{breadcrumb.name}</NavLink>
                )}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </section>
    </div>
  );
};

export default SectionTitle;
