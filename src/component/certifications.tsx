import { Button, Card, CardContent, Divider, Stack, Typography } from "@mui/joy";
import { CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Certifications() {
    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate('/home')} variant="outlined">Retour</Button>
            <Stack ml={7} mr={7}>
            <h1>Certifications</h1>
            <Divider inset="none" />
            <Stack direction="row" spacing={3} justifyContent="center" mt={3}>
            <Card sx={{ width: 300 }} variant="outlined">A venir...</Card>
                <Card sx={{ width: 300 }} variant="outlined">
                <img src="public\bachelor.png" alt="" />
                <Typography level="title-lg">Bachelor à Toulouse Ynov Campus</Typography>
                <CardContent>
                    <Typography>Technicien informatique spécialité développement Web et Mobile.</Typography>
                </CardContent>
                <Stack direction="row" spacing={1} justifyContent="auto">
                <CalendarIcon /> <Typography>2021-2022</Typography>
                </Stack>
                </Card>
                <Card sx={{ width: 300 }} variant="outlined">
                <img src="public\deug.png" alt="" />
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