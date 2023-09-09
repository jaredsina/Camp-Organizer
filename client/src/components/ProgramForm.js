import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProgram } from "../reducers/programsReducer";

const ProgramForm = () => {
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partners);

  // when the user clicks submmit lets create a new program object and dispatch it to the backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const students = document.getElementById("students").value;
    const weeks = document.getElementById("weeks").value;
    const description = document.getElementById("description").value;
    const classes = document.getElementById("classes").value;
    const pricing = document.getElementById("pricing").value;
    const invoice = document.getElementById("invoice").value;
    const staff = document.getElementById("staff").value;
    const status = document.getElementById("status").checked;
    const invoicePaid = document.getElementById("invoicePaid").checked;

    // we are getting the partner id from the datalist using the data-key attribute
    const partner = document.getElementById("partner").value;
    const partnerId = document
      .querySelector(`option[value="${partner}"]`)
      .getAttribute("data-key");

    const newProgram = {
      name,
      partner: partnerId,
      students,
      weeks,
      description,
      classes,
      status,
      pricing,
      invoice,
      staff,
      invoicePaid,
    };
    dispatch(addProgram(newProgram));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="partner" className="flex flex-col gap-2">
          Partner
          <select
            id="partner"
            name="partner"
            className="bg-gray-50 rounded-lg p-2 border border-gray-300"
          >
            <option value="" data-key={null}>
              None
            </option>
            {partners.map((partner) => (
              <option
                key={partner.id}
                value={partner.name}
                data-key={partner.id}
              >
                {partner.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="name" className="flex flex-col gap-2">
          Name*:{" "}
          <input
            type="text"
            placeholder="Name of program"
            id="name"
            name="name"
            className="rounded-lg p-2 border bg-gray-50 border-gray-300"
            required
          />
        </label>
        <label htmlFor="status" className="flex gap-2">
          Active:
          <input
            type="checkbox"
            id="status"
            name="status"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md border focus:ring-blue-500"
            defaultChecked
          />
        </label>
        <label htmlFor="pricing" className="flex flex-col gap-2">
          Pricing per student*:
          <input
            type="number"
            placeholder="25"
            id="pricing"
            name="pricing"
            className="rounded-lg p-2 border bg-gray-50 border-gray-300"
            required
          />
        </label>
        <label htmlFor="students" className="flex flex-col gap-2">
          Students*:{" "}
          <input
            type="number"
            placeholder="300"
            id="students"
            name="students"
            className="rounded-lg p-2 border bg-gray-50 border-gray-300"
            required
          />
        </label>
        <label htmlFor="weeks" className="flex flex-col gap-2">
          Weeks
          <input
            type="number"
            placeholder="4"
            id="weeks"
            name="weeks"
            className="rounded-lg p-2 border bg-gray-50 border-gray-300"
          />
        </label>
        <label htmlFor="description" className="flex flex-col gap-2">
          Description
          <input
            type="text"
            placeholder="description"
            id="description"
            name="description"
            className="rounded-lg p-2 border bg-gray-50 border-gray-300"
          />
        </label>
        <label htmlFor="classes" className="flex flex-col gap-2">
          Classes
          <input
            type="number"
            placeholder="classes"
            id="classes"
            name="classes"
            className="rounded-lg p-2 border bg-gray-50 border-gray-300"
          />
        </label>
        {/* invoice is a calender due date */}
        <label htmlFor="invoice" className="flex flex-col gap-2">
          Invoice due date:
          <input
            type="date"
            id="invoice"
            name="invoice"
            className="bg-gray-50 rounded-lg p-2 border border-gray-300 text-black"
          />
        </label>
        <label htmlFor="invoicePaid" className="flex gap-2">
          Invoice paid:
          <input
            type="checkbox"
            id="invoicePaid"
            name="invoicePaid"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md border focus:ring-blue-500"
            defaultChecked
          />
        </label>
        <label htmlFor="staff" className="flex flex-col gap-2">
          Staff
          <input
            type="text"
            placeholder="staff"
            id="staff"
            name="staff"
            className="rounded-lg p-2 border bg-gray-50 border-gray-300"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProgramForm;
