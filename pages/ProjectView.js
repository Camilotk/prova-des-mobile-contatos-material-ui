import React from "react";
import ProjectForm from "./parts/ProjectForm";
import ProjectTable from "./parts/ProjectTable";
import { ProjectContextProvider } from "../contexts/ProjectContextProvider";
import { Typography } from "@material-ui/core";

function ProjectView() {
    return (
        <ProjectContextProvider>
            <div style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    margin: "5px 10px 0", 
                    backgroundColor: 'white', 
                    padding: "25px 25px 50px", 
                    borderRadius: "65px 65px 0 0"
                }
            }>
                <Typography variant="h5" align="center" style={{marginBottom: 10}}>Projetos</Typography>
                <ProjectForm />
                <ProjectTable />
            </div>
        </ProjectContextProvider>
    )
}

export default ProjectView;