import React, { useContext } from "react";
import { ProjectContext } from "../../contexts/ProjectContextProvider";
import { ButtonPP } from "../../components";
import { Button, Typography } from "@material-ui/core";
/* TABLE IMPORTS */
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
/* DIALOG IMPORTS */
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


function ProjectTable() {
    const [state, dispatch] = useContext(ProjectContext);
    const [open, setOpen] = React.useState(false);
    
    const delProject = id => {
        dispatch({
            type: "DEL_PROJECT",
            payload: id
        });
    };

    const onRemoveProject = () => {
        delProject(state.Projects[0].id);
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
      
    const handleClickOpen = () => {
        if (typeof state.Projects[0] !== 'undefined') {
            setOpen(true);
        } else {
            alert("Não existem mais projetos");
        }
    };

    const handleClickCancel = () => {
        setOpen(false);
    }
      
    const handleClose = () => {
        setOpen(false);
        onRemoveProject();
    };

    const rows = state.Projects.map(Project => (
        <TableRow key={Project.id}>
            <TableCell>{Project.id}</TableCell>
            <TableCell>{Project.name}</TableCell>
            <TableCell>{Project.coordinator}</TableCell>
        </TableRow>
    ));

    return (
        <div>
            <Typography variant="h6" className="title-margin">Listagem de Projetos</Typography>
            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>Coordenador</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{rows}</TableBody>
                <tfoot>
                    <TableRow>
                        <TableCell colSpan="4">
                            <div className="btn-container">
                            <ButtonPP fn={handleClickOpen}>Remover</ButtonPP>
                            </div>
                        </TableCell>
                    </TableRow>
                </tfoot>
            </Table>
            </TableContainer>

            <Dialog
                open={open}
                unmountOnExit
                closeAfterTransition
                onClose={handleClickCancel}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"

            >
            <DialogTitle id="alert-dialog-slide-title">Você tem certeza que deseja exlcuir {state?.Projects[0]?.name}?</DialogTitle>
            <DialogActions>
            <Button onClick={handleClickCancel} color="secondary">
                Cancelar
            </Button>
            <Button onClick={handleClose} color="primary">
                Excluir
            </Button>
            </DialogActions>
            </Dialog>

            <style jsx>{`
                .MuiTableCell-head {
                    font-weight: 600;
                }
                .btn-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .title-margin {
                    margin: 15px 0;
                }
            `}</style>
        </div>
    );
    
};

export default ProjectTable;