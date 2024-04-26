import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Contact</h1>
            <p>This is the contact page.</p>
            <Button onClick={() => navigate('/')}>Retour</Button>
        </div>
    )
}