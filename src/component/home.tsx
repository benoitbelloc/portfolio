import { Button, Card, CardContent, Stack, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const cardColor = "#white";

    return (
        <div>
            <Button onClick={() => navigate('/')} variant="outlined">Retour</Button>
            <Stack direction="row" spacing={3} justifyContent="center" mt={10}>
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
                    Explore
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
                    Explore
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
                    Explore
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
                    Explore
                    </Button>
                </CardContent>
            </Card>
            </Stack>
        </div>
    )
}