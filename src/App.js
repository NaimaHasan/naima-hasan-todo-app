import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { Note } from "./Note/Note";
import { SideBar } from "./SideBar/SideBar";
import "./App.css";
import { TopBar } from "./TopBar/TopBar";
import { FilterBar } from "./FilterBar/FilterBar";

const mockNotes = [];

export const App = () => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : mockNotes;
  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [filter, setFilter] = useState("Default");
  const [sorting, setSorting] = useState("Creation Date");
  const [sortOrder, setSortOrder] = useState("Descending");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const updateNote = (updatedNote) => {
    const newNotes = notes.map((x) => {
      if (x.id === updatedNote.id) {
        x = updatedNote;
      }
      return x;
    });

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    setNotes(
      notes.filter((note) => {
        return note.id !== id;
      })
    );
  };

  const filteredNotes = notes
    .filter((note) => {
      if (filter === "High Priority") {
        return note.priority === "High";
      } else if (filter === "Medium Priority") {
        return note.priority === "Medium";
      } else if (filter === "Low Priority") {
        return note.priority === "Low";
      } else if (filter === "Pending") {
        return note.status === "Pending";
      } else if (filter === "In Progress") {
        return note.status === "In Progress";
      } else if (filter === "Completed") {
        return note.status === "Completed";
      } else {
        return true;
      }
    })
    .sort((a, b) => {
      if (sorting === "Priority") {
        const priorityOrder = { High: 3, Medium: 2, Low: 1 };
        return sortOrder === "Ascending"
          ? priorityOrder[a.priority] - priorityOrder[b.priority]
          : priorityOrder[b.priority] - priorityOrder[a.priority];
      } else if (sorting === "Creation Date") {
        return sortOrder === "Ascending"
          ? a.createdAt.localeCompare(b.createdAt)
          : b.createdAt.localeCompare(a.createdAt);
      } else if (sorting === "Update Date") {
        return sortOrder === "Ascending"
          ? a.updatedAt.localeCompare(b.updatedAt)
          : b.updatedAt.localeCompare(a.updatedAt);
      } else if (sorting === "Name") {
        return sortOrder === "Ascending"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else {
        return sortOrder === "Ascending"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
    });

  return (
    <div className="container-fluid">
      {screenWidth > 900 ? (
        <SideBar
          sorting={sorting}
          setSorting={setSorting}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      ) : (
        <div />
      )}

      <TopBar
        sorting={sorting}
        setSorting={setSorting}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        addNote={addNote}
      />
      <div className="main-content" style={{paddingLeft: screenWidth > 900 ? "300px" : "0px"}}>
        <FilterBar filter={filter} setFilter={setFilter} />
        <Note
          notes={filteredNotes}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
