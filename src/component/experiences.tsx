import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function Experiences() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Experiences</h1>
            <p>This is the experiences page.</p>
            <Button onClick={() => navigate('/')}>Retour</Button>
        </div>
    )
}