import { Button, Card, CardContent, Divider, Stack, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const cardColor = "#white";

    return (
        <div>
            <Button onClick={() => navigate('/')} variant="outlined">Retour</Button>
            <Stack ml={7} mr={7}>
            <h1>Dasboard</h1>
            <Divider inset="none" />
            <Stack direction="row" spacing={3} justifyContent="center" mt={3}>
            <Card variant="outlined" sx={{ width: 250, backgroundColor: cardColor, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' } }}>
                <Typography level="title-lg">Expériences</Typography>
                <CardContent>
                    <img src="public\experiences.png" alt="" />
                    <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                    onClick={() => navigate('/experiences')}
                    >
                    Détails
                    </Button>
                </CardContent>
            </Card>
            <Card sx={{ width: 250, backgroundColor: cardColor, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' } }}>
                <Typography level="title-lg">Compétences</Typography>
                <CardContent>
                    <img src="public\skills.png" alt="" />
                    <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    onClick={() => navigate('/skills')}
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                    >
                    Hard & Soft
                    </Button>
                </CardContent>
            </Card>
            <Card sx={{ width: 250, backgroundColor: cardColor, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' } }}>
                <Typography level="title-lg">Certifications</Typography>
                <CardContent>
                    <img src="public\certifications.png" alt="" />
                    <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    onClick={() => navigate('/certifications')}
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                    >
                    Obtenues et en cours
                    </Button>
                </CardContent>
            </Card>
            <Card sx={{ width: 250, backgroundColor: cardColor, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' } }}>
                <Typography level="title-lg">Contact</Typography>
                <CardContent>
                    <img src="public\contact.png" alt="" />
                    <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    onClick={() => navigate('/contact')}
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
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