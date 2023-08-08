import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const partners = useSelector((state) => state.partners);
  const programs = useSelector((state) => state.programs);

  // get a list of all the partners and their programs
  const partnersList = partners.map((partner) => (
    <li key={partner.id}>
      <Link to={`/dashboard/${partner.id}`}>{partner.name}</Link>
      {partner.programs.length > 0 ? (
        <ul>
          {partner.programs.map((program) => (
            <li key={program.id}>
              <Link to={`/dashboard/${program.id}`}>{program.name}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  ));
  // get a list of all the programs without partners
  const programsWithoutPartners = programs.map((program) => {
    if (program.partner === null) {
      return (
        <li key={program.id}>
          <Link to={`/dashboard/${program.id}`}>{program.name}</Link>
        </li>
      );
    }
    return null;
  });
  return (
    <div className="sidebar">
      <ul>{partnersList}</ul>
      No Partner
      <ul>{programsWithoutPartners}</ul>
    </div>
  );
};

export default Sidebar;
