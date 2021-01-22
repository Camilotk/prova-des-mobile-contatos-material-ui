import React, { useContext, useState } from "react";
import _ from "lodash";
import { ProjectContext } from "../../contexts/ProjectContextProvider";
import { Input, FormControl, InputLabel, Typography, Divider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ButtonBP } from '../../components';

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
}); 

function ProjectForm() {
    const initialState = {
        name: '',
        coordinator: ''
    };

    const [state, dispatch] = useContext(ProjectContext);
    const [project, setProject] = useState(initialState);
    
    const onAddProject = () => {
        if (project.name && project.coordinator) {
            dispatch({
                type: "ADD_PROJECT",
                payload: {
                    id: _.uniqueId(10), 
                    name: project.name || "n/a",
                    coordinator: project.coordinator || "n/a"
                }
            });
            setProject(initialState);
        }
    };

    return (
        <div>

            <Typography variant="h6" className="el-margin">Adicionar Novo Projeto</Typography>
            
            <FormControl margin="normal" fullWidth className="el-margin">
                <InputLabel htmlFor="name">Nome</InputLabel>
                <Input id="name" type="text" value={project.name} onChange={(e) => setProject({ ...project, name: e.target.value })}/>
            </FormControl>

            <FormControl margin="normal" fullWidth className="el-margin">
                <InputLabel htmlFor="coordinator">Coordenador</InputLabel>
                <Input id="coordinator" type="text" value={project.coordinator} onChange={(e) => setProject({ ...project, coordinator: e.target.value })}/>
            </FormControl>
            
            <div className="btn-margin">
                <ButtonBP fn={onAddProject}>Novo Projeto</ButtonBP>
            </div>
            <Divider className="hr-margin"/>

            <style jsx>{`
                .MuiTableCell-head {
                    font-weight: 600;
                }
                .btn-margin {
                    margin-top: 15px;
                }
                .el-margin {
                    margin-top: 1px;
                }
                .hr-margin {
                    margin: 25px 0 0;
                }
            `}</style>
        </div>
    );
};

export default ProjectForm;