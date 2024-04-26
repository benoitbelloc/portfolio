import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function Presentation() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Presentation</h1>
            <p>This is the presentation page.</p>
            <Button onClick={() => navigate('/home')}>Go</Button>
        </div>
    )
}