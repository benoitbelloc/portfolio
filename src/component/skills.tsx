import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function Skills() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Skills</h1>
            <p>This is the skills page.</p>
            <Button onClick={() => navigate('/')}>Retour</Button>
        </div>
    )
}