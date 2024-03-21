import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import "./scroll.css";
import { Droppable } from "react-beautiful-dnd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import { Modal, Button, Typography, Box, TextField } from "@mui/material";
const Container = styled.div`
    background-color: #f4f5f7;
    border-radius: 10px;
    width: 400px;
    height: max-content;
     
`;

const Title = styled.h3`
    padding: 8px;
   
    text-align: center;
`;

const TaskList = styled.div`
    padding: 3px;
    transistion: background-color 0.2s ease;
    background-color: #f4f5f7;
    flex-grow: 1;
    min-height: 100px;
`;

export default function Column({ title, tasks, id }) {
    const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [inputValue, setInputValue] = useState({
    inputValue1: "",
    inputValue2: "",
  });
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen1 = () => {
        setOpen1(true);
      };
    
      const handleClose1 = () => {
        setOpen1(false);
      };
      const handleOpen2 = () => {
        setOpen2(true);
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };
      const handleOpen3 = () => {
        setOpen3(true);
      };
    
      const handleClose3 = () => {
        setOpen3(false);
      };
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setInputValue((prevVal) => ({
          ...prevVal,
          [name]: value,
        }));
      };
    
      const handleAddButtonClick = (columnId) => {
        const newItem = {
          projectName: inputValue.inputValue1,
          like: inputValue.inputValue2,
          id: `${columnId}-${Math.random().toString(36).substr(2, 9)}`, // Generate a unique ID
        };
        // setColumns((prevColumns) => ({
        //   ...prevColumns,
        //   [columnId]: [...prevColumns[columnId], newItem],
        // }));
        handleClose();
        handleClose1();
        handleClose2();
        handleClose3();
      };
    
    return (
        <Container className="column">
            <div style={{
                display:"flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0px 10px",
                marginTop: "5px",
            }}>
            <Title>
                {title}
            </Title>
            <MoreHorizIcon />
            </div>
           
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {tasks.map((task, index) => (
                            <Card key={index} index={index} task={task} />
                        ))}
                        {provided.placeholder}
                    </TaskList>
                )}
                  
            </Droppable>
            <div style={{
                        // border:"1px solid",
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        gap:"5px",
                        width:"max-content",
                        margin:"2px 10px",
                         onclick: { handleOpen }
                       
                    }}>
                 <AddIcon />
                <p>Add a card</p>
               </div>
               <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            borderRadius: "10px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: "90%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <TextField
            label="Project Name"
            name="inputValue1"
            value={inputValue.inputValue1}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Likes"
            name="inputValue2"
            value={inputValue.inputValue2}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "white",
              backgroundColor: "green",
              margin: "auto 160px",
            }}
            onClick={() => handleAddButtonClick("todo")}
          >
            Add
          </Button>
        </Box>
              </Modal>
              <Modal open={open1} onClose={handleClose1}>
        <Box
          sx={{
            position: "absolute",
            borderRadius: "10px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: "90%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <TextField
            label="Project Name"
            name="inputValue1"
            value={inputValue.inputValue1}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Likes"
            name="inputValue2"
            value={inputValue.inputValue2}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "white",
              backgroundColor: "green",
              margin: "auto 160px",
            }}
            onClick={() => handleAddButtonClick("inProgress")} // Fixed function name
          >
            Add
          </Button>
        </Box>
      </Modal>
              <Modal open={open2} onClose={handleClose2}>
        <Box
          sx={{
            position: "absolute",
            borderRadius: "10px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: "90%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <TextField
            label="Project Name"
            name="inputValue1"
            value={inputValue.inputValue1}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Likes"
            name="inputValue2"
            value={inputValue.inputValue2}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "white",
              backgroundColor: "green",
              margin: "auto 160px",
            }}
            onClick={() => handleAddButtonClick("review")}
          >
            Add
          </Button>
        </Box>
      </Modal>
         <Modal open={open3} onClose={handleClose3}>
        <Box
          sx={{
            position: "absolute",
            borderRadius: "10px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: "90%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <TextField
            label="Project Name"
            name="inputValue1"
            value={inputValue.inputValue1}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Likes"
            name="inputValue2"
            value={inputValue.inputValue2}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "white",
              backgroundColor: "green",
              margin: "auto 160px",
            }}
            onClick={() => handleAddButtonClick("done")}
          >
            Add
          </Button>
        </Box>
         </Modal>
        </Container>
    );
}