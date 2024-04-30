import { Button, Card, CardContent, Divider, Stack, Typography } from "@mui/joy";
import { CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Certifications() {
    const navigate = useNavigate();
    const handleRNCP = () => {
        window.open("https://www.francecompetences.fr/recherche/rncp/35078/");
    }

    return (
        <div>
            <Button onClick={() => navigate('/home')} variant="outlined">Retour</Button>
            <Stack ml={7} mr={7}>
            <h1>Certifications en cours</h1>
            <Divider inset="none" />
            <Stack direction="row" spacing={3} justifyContent="center" mt={3}>
                <Card sx={{ width: 300 }} variant="outlined">
                <Typography level="title-lg">Mastère à Toulouse Ynov Campus</Typography>
                <CardContent>
                    <Typography>Expert en développement Web et Web Mobile</Typography>
                </CardContent>
                <Stack direction="row" spacing={1} justifyContent="auto">
                <CalendarIcon /> <Typography>2022-2024</Typography>
                </Stack>
                </Card>
                <Card sx={{ width: 300 }} variant="outlined">
                <Typography level="title-lg">Titre RNCP niveau 7 : 
                <Typography sx={{ color: "blue" }} onClick={handleRNCP}> RNCP35078</Typography>
                </Typography>
                <CardContent>
                    <Typography>Expert informatique et systèmes d'information</Typography>
                </CardContent>
                <Stack direction="row" spacing={1} justifyContent="auto">
                <CalendarIcon /> <Typography>2023-2024</Typography>
                </Stack>
                </Card>
            </Stack>
            </Stack>

            <Stack ml={7} mr={7}>
            <h1>Certifications obtenues</h1>
            <Divider inset="none" />
            <Stack direction="row" spacing={3} justifyContent="center" mt={3}>
            {/* <Card sx={{ width: 300 }} variant="outlined">A venir...</Card> */}
                <Card sx={{ width: 300 }} variant="outlined">
                <img src="public\bachelor.png" alt="" width={300} />
                <Typography level="title-lg">Bachelor à Toulouse Ynov Campus</Typography>
                <CardContent>
                    <Typography>Technicien informatique spécialité développement Web et Mobile</Typography>
                </CardContent>
                <Stack direction="row" spacing={1} justifyContent="auto">
                <CalendarIcon /> <Typography>2021-2022</Typography>
                </Stack>
                </Card>
                <Card sx={{ width: 300 }} variant="outlined">
                    <Stack ml={2}>
                    <img src="public\deug.png" alt="" width={265} />
                    </Stack>
                <Typography level="title-lg">DEUG MIASH à l'université Toulouse Jean-Jaurès</Typography>
                <CardContent>
                    <Typography>Diplôme d'étude universitaire général en Mathématique et informatique appliqué aux sciences humaines et sociales</Typography>
                </CardContent>
                <Stack direction="row" spacing={1} justifyContent="auto">
                <CalendarIcon /> <Typography>2019-2021</Typography>
                </Stack>
                </Card>
            </Stack>
            </Stack>
        </div>
    )
}