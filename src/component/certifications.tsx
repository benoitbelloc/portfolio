import { Button, Card, CardContent, Divider, Stack, Typography } from "@mui/joy";
import { CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Certifications() {
    const navigate = useNavigate();
    const handleRNCP = () => {
        window.open("https://www.francecompetences.fr/recherche/rncp/35078/");
    }

    return (
        <div style={{ padding: '3px 3px', maxWidth: '100%', boxSizing: 'border-box' }}>
      <Button onClick={() => navigate('/home')} variant="outlined" sx={{ mt: 2 }}>Retour</Button>
      <Stack spacing={3} mx={{ xs: 1, md: 7 }} my={4}>
        <h1>Certifications en cours</h1>
        <Divider />
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center" mt={3}>
          <Card sx={{ width: 300 }} variant="outlined">
            <Typography><b>Mastère à Toulouse Ynov Campus</b></Typography>
            <CardContent>
              <Typography>Expert en développement Web et Web Mobile</Typography>
            </CardContent>
            <Stack direction="row" spacing={1} justifyContent="flex-start" alignItems="center">
              <CalendarIcon /> <Typography>2022-2024</Typography>
            </Stack>
          </Card>
          <Card sx={{ width: 300 }} variant="outlined">
            <Typography><b>Titre RNCP niveau 7 : 
              <Typography component="span" sx={{ color: "blue", cursor: "pointer" }} onClick={handleRNCP}> RNCP35078</Typography>
              </b>
            </Typography>
            <CardContent>
              <Typography>Expert informatique et systèmes d'information</Typography>
            </CardContent>
            <Stack direction="row" spacing={1} justifyContent="flex-start" alignItems="center">
              <CalendarIcon /> <Typography>2023-2024</Typography>
            </Stack>
          </Card>
        </Stack>
      </Stack>

      <Stack spacing={3} mx={{ xs: 1, md: 8 }} my={4}>
        <h1>Certifications obtenues</h1>
        <Divider />
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center" mt={1}>
          <Card sx={{ width: 300 }} variant="outlined">
            <Typography><b>Bachelor à Toulouse Ynov Campus</b></Typography>
            <CardContent>
              <Typography>Technicien informatique spécialité développement Web et Mobile</Typography>
            </CardContent>
            <Stack direction="row" spacing={1} justifyContent="flex-start" alignItems="center">
              <CalendarIcon /> <Typography>2021-2022</Typography>
            </Stack>
          </Card>
          <Card sx={{ width: 300 }} variant="outlined">
            <Stack ml={1}>
            </Stack>
            <Typography><b>DEUG MIASH à l'université Toulouse Jean-Jaurès</b></Typography>
            <CardContent>
              <Typography>Diplôme d'étude universitaire général en Mathématique et informatique appliqué aux sciences humaines et sociales</Typography>
            </CardContent>
            <Stack direction="row" spacing={1} justifyContent="flex-start" alignItems="center">
              <CalendarIcon /> <Typography>2019-2021</Typography>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </div>
    )
}