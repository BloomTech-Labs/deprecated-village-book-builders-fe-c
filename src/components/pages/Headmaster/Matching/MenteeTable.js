import React, { useState } from "react";
import ReactDataGrid from "react-data-grid";
import { Editors } from "react-data-grid-addons";

const { DropDownEditor } = Editors;

const MenteeTable = ({ mentors, mentees }) => {
  const [menteeFilter, setMenteeFilter] = useState(mentees);
  const [menteeId, setMenteeId] = useState(9);
  const initialRows = mentees.map((mentee, index) => {
    return {
      id: mentee.id,
      first_name: mentee.first_name,
      last_name: mentee.last_name,
      as_early_as: mentee.availability.as_early_as,
      as_late_as: mentee.availability.as_late_as,
      mentor: ""
    };
  });
  const [rows, setRows] = useState(initialRows);

  let potential_match = "";
  let list_of_matches = {};
  mentees.filter((mentee) => {
    mentors.filter((mentor) => {
      let student_start_hour = mentee.availability.as_early_as.split(":")[0];
      let student_end_hour = mentee.availability.as_late_as.split(":")[0];
      let mentor_start_hour = mentor.availability.as_early_as.split(":")[0];
      let mentor_end_hour = mentor.availability.as_late_as.split(":")[0];

      if (
        student_start_hour >= mentor_start_hour &&
        student_end_hour <= mentor_end_hour
      ) {
        potential_match = [mentor.id, mentor.first_name];

        if (list_of_matches[mentee.id]) {
          list_of_matches[mentee.id].push(potential_match);
        } else {
          list_of_matches[mentee.id] = [potential_match];
        }
      } else {
        console.log("no match");
      }
      return list_of_matches;
    });
  });

  const pairChoices = Object.keys(list_of_matches[menteeId]).map(
    (key, index) => {
      return { id: index, value: list_of_matches[menteeId][key] };
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
      key: "mentor",
      name: "Mentor",
      editor: PairChoicesEditor,
      events: {
        onDoubleClick: function (ev, args) {
          setMenteeId(args.rowId);
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
      <h5 style={{ textAlign: "center" }}>Mentees:</h5>
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

export default MenteeTable;
