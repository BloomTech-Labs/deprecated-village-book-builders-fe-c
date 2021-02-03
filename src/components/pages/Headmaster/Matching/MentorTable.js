import React, { useState } from "react";
import ReactDataGrid from "react-data-grid";
// import { Editors } from "react-data-grid-addons";

const { DropDownEditor } = Editors;

const MentorTable = ({ mentors, mentees }) => {
  const [menteeFilter, setMenteeFilter] = useState(mentors);
  const [mentorId, setMentorId] = useState(9);
  const initialRows = mentors.map((mentor, index) => {
    return {
      id: mentor.id,
      first_name: mentor.first_name,
      last_name: mentor.last_name,
      as_early_as: mentor.availability.as_early_as,
      as_late_as: mentor.availability.as_late_as,
      mentee: ""
    };
  });
  const [rows, setRows] = useState(initialRows);

  let potential_match = "";
  let list_of_matches = {};
  mentors.filter((mentor) => {
    mentees.filter((mentee) => {
      let student_start_hour = mentee.availability.as_early_as.split(":")[0];
      let student_end_hour = mentee.availability.as_late_as.split(":")[0];
      let mentor_start_hour = mentor.availability.as_early_as.split(":")[0];
      let mentor_end_hour = mentor.availability.as_late_as.split(":")[0];

      if (
        student_start_hour >= mentor_start_hour &&
        student_end_hour <= mentor_end_hour
      ) {
        potential_match = [mentee.id, mentee.first_name];

        if (list_of_matches[mentor.id]) {
          list_of_matches[mentor.id].push(potential_match);
        } else {
          list_of_matches[mentor.id] = [potential_match];
        }
      } else {
        console.log("no match");
      }
      return list_of_matches;
    });
  });

  const pairChoices = Object.keys(list_of_matches[mentorId]).map(
    (key, index) => {
      return { id: index, value: list_of_matches[mentorId][key] };
    }
  );

  const PairChoicesEditor = <DropDownEditor options={pairChoices} />;

  const columns = [
    {
      key: "id",
      name: "ID"
    },
    { key: "first_name", name: "First Name" },
    { key: "last_name", name: "Last Name" },
    { key: "as_early_as", name: "From" },
    { key: "as_late_as", name: "To" },
    {
      key: "mentee",
      name: "Mentee",
      editor: PairChoicesEditor,
      events: {
        onDoubleClick: function (ev, args) {
          setMentorId(args.rowId);
        }
      }
    }
  ];
  console.log(rows);

  const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    const newrows = rows.slice();
    for (let i = fromRow; i <= toRow; i++) {
      newrows[i] = { ...newrows[i], ...updated };
    }
    setRows(newrows);
  };

  return (
    <>
      <h5 style={{ textAlign: "center" }}>Mentors:</h5>
      <ReactDataGrid
        columns={columns}
        toolbar="true"
        rowGetter={(i) => rows[i]}
        rowsCount={rows.length}
        onGridRowsUpdated={onGridRowsUpdated}
        enableCellSelect={true}
        minHeight={350}
      />
    </>
  );
};

export default MentorTable;
