import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function Certifications() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Certifications</h1>
            <p>This is the certifications page.</p>
            <Button onClick={() => navigate('/')}>Retour</Button>
        </div>
    )
}