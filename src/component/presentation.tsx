import { Button, Card, Stack, Typography } from "@mui/joy";
import { CalendarIcon, CarIcon, CircleArrowRightIcon, FileIcon, LinkedinIcon, MailIcon, MapIcon, PhoneCallIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Presentation() {
    const navigate = useNavigate();
    const handleCV = () => {
        const pdfUrl = "cv-benoitbelloc.pdf";
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
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '0 16px', maxWidth: '100%', boxSizing: 'border-box' }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        mt={5}
        flexGrow={1}
      >
        <Card variant="outlined" sx={{ width: { xs: '100%', md: 500 }, maxWidth: '100%' }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            p={2}
          >
            <img width={150} src="avatar.png" alt="avatar" />
            <Stack justifyContent="center" alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography fontSize={40} component="div">Benoît Belloc</Typography>
              <Typography fontSize={20} component="div">Product Owner</Typography>
            </Stack>
          </Stack>
          <Typography mt={2}><b>Qui suis-je ?</b></Typography>
          <Typography>
            Je suis un Product Owner passionné par les nouvelles technologies et les méthodes agiles.
            Je suis également bientôt diplômé d'un mastère informatique en développement web effectué à Toulouse Ynov Campus.
            Maîtrisant la conception fonctionnelle et technique d'une solution informatique, je suis capable de travailler en équipe efficacement, tout en pilotant un produit de sa conception à sa mise en production.
            Je suis à la recherche d'opportunités professionnelles innovantes et enrichissantes.
          </Typography>
        </Card>
        <Stack direction="column" spacing={6} alignItems="center">
          <Card variant="outlined" sx={{ width: { xs: '100%', md: 500 }, maxWidth: '100%', height: 220 }}>
            <Typography><b>A propos de moi...</b></Typography>
            <Stack direction="row" spacing={1} alignItems="center" mt={1}>
              <MapIcon />
              <Typography>Toulouse</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneCallIcon />
              <Typography>06 20 30 84 07</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <MailIcon />
              <Typography>belloc.benoit@protonmail.com</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <CarIcon />
              <Typography>Véhiculé</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" mb={5}>
              <CalendarIcon />
              <Typography>Disponible à partir du 30 septembre 2024</Typography>
            </Stack>
          </Card>
          <Stack direction="row" spacing={1} justifyContent="center">
            <Button variant="outlined" onClick={handleLinkedin}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LinkedinIcon />
                <Typography>Ma page LinkedIn</Typography>
              </Stack>
            </Button>
            <Button variant="outlined" onClick={handleCV}>
              <Stack direction="row" spacing={1} alignItems="center">
                <FileIcon />
                <Typography>Mon CV</Typography>
              </Stack>
            </Button>            
          </Stack>
          <Button onClick={() => navigate('/home')}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography textColor="white">Pour plus de détails... C'est par ici !</Typography>
              <CircleArrowRightIcon />
            </Stack>
          </Button>
        </Stack>
      </Stack>
      <Stack
        sx={{
          marginTop: 'auto',
          alignItems: 'flex-end',
          direction: 'column',
          mt: 3
        }}
        alignItems="flex-end" direction="column" mt={3}
      >
        <Typography fontSize={12}>Mentions légales</Typography>
        <Typography fontSize={12}>© Benoît Belloc - 2024 - Tous droits réservés</Typography>
      </Stack>
    </div>
    )
}