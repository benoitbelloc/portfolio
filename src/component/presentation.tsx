import { Button, Card, Stack, Typography } from "@mui/joy";
import { CalendarIcon, CarIcon, FileIcon, LinkedinIcon, MailIcon, MapIcon, PhoneCallIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Presentation() {
    const navigate = useNavigate();
    const handleCV = () => {
        const pdfUrl = "../../public/cv-benoitbelloc.pdf";
        const anchorElement = document.createElement('a');
        anchorElement.href = pdfUrl;
        anchorElement.download = 'cv-benoitbelloc.pdf';
        document.body.appendChild(anchorElement);
        anchorElement.click();
        document.body.removeChild(anchorElement);
      };
    const handleLinkedin = () => {
        window.open("https://www.linkedin.com/in/benoit-belloc-profile/");
    }

    return (
        <div>
            <Stack direction="row" spacing={3} justifyContent="center" mt={7}>
                <Card variant="outlined" sx={{ width: 500 }}>
                    <Stack direction="row" spacing={3} justifyContent="center">
                    <img width={150} src="public\avatar.png" alt="avatar" />
                    <Stack justifyContent="center">
                    <Typography fontSize={40} level="title-lg">Benoît Belloc</Typography>
                    <Typography fontSize={20} level="title-lg">Product Owner</Typography>
                    </Stack>
                    </Stack>
                    <Typography level="title-md">Qui suis-je ?</Typography>
                    <p>
                        Je suis un Product Owner passionné par les nouvelles technologies et les méthodes agiles. 
                        Je suis également bientôt diplômé d'un mastère informatique en développement web effectué à Toulouse Ynov Campus.
                        Maîtrisant la conception fonctionnelle et technique d'une solution informatique, je suis capable de travailler en équipe efficacement, tout en pilotant un produit de sa conception à sa mise en production.
                        Je suis à la recherche d'opportunités professionnelles innovantes et enrichissantes.
                    </p>
                </Card>
                <Stack direction="column" spacing={6}>
                <Card variant="outlined" sx={{ width: 500, height: 220 }}>
                <Typography level="title-lg">A propos de moi...</Typography>
                    <Stack direction="row" spacing={1} justifyContent="auto" mt={1}>
                    <MapIcon />
                    <h4>Toulouse</h4>
                    </Stack>
                    <Stack direction="row" spacing={1} justifyContent="auto">
                    <PhoneCallIcon />
                    <h4>06 20 30 84 07</h4>
                    </Stack>
                    <Stack direction="row" spacing={1} justifyContent="auto">
                    <MailIcon />
                    <h4>belloc.benoit@protonmail.com</h4>
                    </Stack>
                    <Stack direction="row" spacing={1} justifyContent="auto">
                    <CarIcon />
                    <h4>Véhiculé</h4>
                    </Stack>
                    <Stack direction="row" spacing={1} justifyContent="auto" mb={5}>
                    <CalendarIcon />
                    <h4>Disponile à partir du 30 septembre 2024</h4>
                    </Stack>
                </Card>
                <Stack direction="row" spacing={1} justifyContent="center">
                        <Button variant="outlined" onClick={handleLinkedin}>
                            <Stack direction="row" spacing={1}>
                            <LinkedinIcon />
                            <h3>Ma page LinkedIn</h3>
                            </Stack>
                        </Button>
                        <Button variant="outlined" onClick={handleCV}>
                            <Stack direction="row" spacing={1}>
                            <FileIcon />
                            <h3>Mon CV</h3>
                            </Stack>
                        </Button>
                    </Stack>
                <Button onClick={() => navigate('/home')}>Pour plus de détails... C'est par ici !</Button>
                    </Stack>
            </Stack>
        </div>
    )
}