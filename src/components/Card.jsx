import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Avatar } from "antd";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import SubjectIcon from "@mui/icons-material/Subject";
import { Modal, Button, Typography, Box, TextField } from "@mui/material";


const Container = styled.div`

    border-radius: 10px;
    box-shadow: 5px 5px 5px 2px grey;
    padding: 8px;
    color: #000;
    margin-bottom: 8px;
    
    min-height: 50px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

`;

const TextContent = styled.div``;

const Icons = styled.div`
// border:1px solid;
width: max-content;
display: flex;
flex-direction: row;
align-items: center;
gap: 15px;
padding: 2px 5px;
`;
function bgcolorChange(props) {
    return props.isDragging
        ? "lightgreen"
        : props.isDraggable
            ? props.isBacklog
                ? "#F2D7D5"
                : "#DCDCDC"
            : props.isBacklog
                ? "#F2D7D5"
                : "#EAF4FC";
}

export default function Card({ task, index }) {
    const generateRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
    
    return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
    
                    </div>
                    <div
                        style={{ display: "flex",
                         flexDirection: "column",
                        
                         textAlign:"left",
                          padding: "2px 8px" }}
                    >
                          <hr
        
                 style={{ backgroundColor: generateRandomColor(),
                     height: "1.2vh",
                    width:"2.8rem",
                    borderRadius: "5px",
                     margin:"0 1px"

                    }}
            />
                        <TextContent>{task.title}</TextContent>
                        
                    </div>
                    <Icons>
                    <SubjectIcon />
                    {task.like.length === 0 ? (
                ""
              ) : (
                <div style={{ display: "flex",
                alignItems: "center",
                gap:"5px"
             }}>
                  <ChatBubbleOutlineIcon />
                  <p>{task.like}</p>
                </div>
              )}
                    </Icons>
                    {provided.placeholder}

                 
                 </Container>
            )}
        </Draggable>
    );
}