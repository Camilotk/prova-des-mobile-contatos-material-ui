import React, { useReducer, createContext } from "react";

export const ProjectContext = createContext();

const initialState = {
    Projects: [
        {
            id: 98,
            name: "Plantas Medicinais",
            coordinator: "Fulano de Tal"
        },
        {
            id: 99,
            name: "NAPNE",
            coordinator: "Ciclano de Tal"
        },
        {
            id: 100,
            name: "Fábrica de Software",
            coordinator: "Beltrano de Tal"
        }
    ]
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PROJECT":
            return {
                Projects: [...state.Projects, action.payload]
            };
        case "DEL_PROJECT":
            return {
                Projects: state.Projects.filter(
                    Project => Project.id !== action.payload
                )
            };
        default:
            throw new Error();
    }
}

export const ProjectContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ProjectContext.Provider value={[state, dispatch]}>
            {props.children}
        </ProjectContext.Provider>
    );
};