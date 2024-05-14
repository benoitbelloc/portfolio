import { Button, Card, CardContent, Divider, Stack, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const cardColor = "#white";

    return (
        <div style={{ padding: '0 16px', maxWidth: '100%', boxSizing: 'border-box' }}>
      <Button onClick={() => navigate('/')} variant="outlined" sx={{ mt: 2 }}>Retour</Button>
      <Stack spacing={3} mx={{ xs: 2, md: 7 }} my={4}>
        <h1>Dashboard</h1>
        <Divider />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" mt={1}>
          <Card variant="outlined" sx={{ width: 250, backgroundColor: cardColor, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' } }}>
            <Typography><b>Expériences</b></Typography>
            <CardContent>
              <img src="public/experiences.png" alt="" style={{ width: '100%', height: 'auto' }} />
              <Button
                color="primary"
                sx={{ mt: 2, fontWeight: 600 }}
                onClick={() => navigate('/experiences')}
              >
                Détails
              </Button>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ width: 250, backgroundColor: cardColor, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' } }}>
            <Typography fontStyle={"h3"} component="div"><b>Compétences</b></Typography>
            <CardContent>
              <img src="public/skills.png" alt="" style={{ width: '100%', height: 'auto' }} />
              <Button
                color="primary"
                sx={{ mt: 2, fontWeight: 600 }}
                onClick={() => navigate('/skills')}
              >
                Hard & Soft
              </Button>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ width: 250, backgroundColor: cardColor, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' } }}>
            <Typography fontStyle={"h3"} component="div"><b>Certifications</b></Typography>
            <CardContent>
              <img src="public/certifications.png" alt="" style={{ width: '100%', height: 'auto' }} />
              <Button
                color="primary"
                sx={{ mt: 2, fontWeight: 600 }}
                onClick={() => navigate('/certifications')}
              >
                Obtenues et en cours
              </Button>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ width: 250, backgroundColor: cardColor, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' } }}>
            <Typography fontStyle={"h3"} component="div"><b>Contact</b></Typography>
            <CardContent>
              <img src="public/contact.png" alt="" style={{ width: '100%', height: 'auto' }} />
              <Button
                color="primary"
                sx={{ mt: 2, fontWeight: 600 }}
                onClick={() => navigate('/contact')}
              >
                Formulaire
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </div>
    )
}