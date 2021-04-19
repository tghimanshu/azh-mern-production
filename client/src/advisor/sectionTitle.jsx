import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sectionTitle.css";

const SectionTitle = (props) => {
  return (
    <div className="p-title">
      <section className="py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h1>{props.title}</h1>
          <Breadcrumb>
            {props.breadcrumbs.map((breadcrumb, i) => (
              <Breadcrumb.Item
                key={i}
                linkProps={{ to: breadcrumb.link }}
                linkAs={Link}
                active={breadcrumb.active}
              >
                {breadcrumb.name}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </section>
    </div>
  );
};

export default SectionTitle;
