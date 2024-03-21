import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import AddIcon from "@mui/icons-material/Add";
export default function Board() {
    const [completed, setCompleted] = useState([
        { title: "Project A", like: "", id: "1" },
        { title: "Project B", like: "2", id: "2" },
        { title: "Project C", like: "1", id: "3" },
        { title: "Project D", like: "", id: "4" },
    ]);
    const [incomplete, setIncomplete] = useState([
        { title: "Project E", like: "9", id: "5" },
        { title: "Project F", like: "", id: "6" },
        { title: "Project G", like: "", id: "7" },
    ]);
    const [backlog, setBacklog] = useState([
        { title: "Project W", like: "14", id: "8" },
        { title: "Project T", like: "10", id: "9" },
        { title: "Project U", like: "6", id: "10" },
        { title: "Project Q", like: "", id: "11" },
    ]);
    const [inReview, setInReview] = useState([
        { title: "Project L", like: "9", id: "12" },
        { title: "Project N", like: "4", id: "13" },
        { title: "Project X", like: "24", id: "14" },
    ]);

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination || source.droppableId === destination.droppableId) return;

        deletePreviousState(source.droppableId, draggableId);

        const task = findItemById(draggableId, [...incomplete, ...completed, ...inReview, ...backlog]);

        setNewState(destination.droppableId, task);

    };

    function deletePreviousState(sourceDroppableId, taskId) {
        switch (sourceDroppableId) {
            case "1":
                setIncomplete(removeItemById(taskId, incomplete));
                break;
            case "2":
                setCompleted(removeItemById(taskId, completed));
                break;
            case "3":
                setInReview(removeItemById(taskId, inReview));
                break;
            case "4":
                setBacklog(removeItemById(taskId, backlog));
                break;
        }

    }
    function setNewState(destinationDroppableId, task) {
        let updatedTask;
        switch (destinationDroppableId) {
            case "1":   // TO DO
                updatedTask = { ...task, completed: false };
                setIncomplete([updatedTask, ...incomplete]);
                break;
            case "2":  // DONE
                updatedTask = { ...task, completed: true };
                setCompleted([updatedTask, ...completed]);
                break;
            case "3":  // IN REVIEW
                updatedTask = { ...task, completed: false };
                setInReview([updatedTask, ...inReview]);
                break;
            case "4":  // BACKLOG
                updatedTask = { ...task, completed: false };
                setBacklog([updatedTask, ...backlog]);
                break;
        }
    }
    function findItemById(id, array) {
        return array.find((item) => item.id == id);
    }

    function removeItemById(id, array) {
        return array.filter((item) => item.id != id);
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
           
            <div
                style={{
                    // border:"1px solid",
                    display: "flex",
                    justifyContent: "space-between",
                    // alignItems: "center",
                    flexDirection: "row",
                    width: "1300px",
                    margin: "0 auto",
                    gap:"10px",
                }}
            >
                <Column title={"TO DO"} tasks={incomplete} id={"1"} />
                <Column title={"In Progress"} tasks={completed} id={"2"} />
                <Column title={"REVIEW"} tasks={inReview} id={"3"} />
                <Column title={"Done"} tasks={backlog} id={"4"} />
               
            </div>
        </DragDropContext>
    );
}