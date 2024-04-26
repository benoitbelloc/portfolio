import { AspectRatio, Button, Card, CardContent, Grid, Tooltip, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { Undo2 } from "lucide-react";

export default function Home() {
    const navigate = useNavigate();
    const cardColor = "#EEEEEE";

    return (
        <div>
            <Tooltip title="Retour" variant="plain" placement="right">
                <Undo2 size={50} color={ cardColor } />
            </Tooltip>
            <Grid container sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center", margin: 3 }} gap={4}>
            <Card sx={{ width: 370, backgroundColor: cardColor, borderColor: "#ffff" }} onClick={() => navigate('/experiences')}>
                <Typography level="title-lg">Expériences</Typography>
                <CardContent>
                    <img src="public\experiences.png" alt="" />
                </CardContent>
            </Card>
            <Grid container xs={1} md={5} sx={{ flexGrow: 1 }} gap={4}>
                <Card onClick={() => navigate('/skills')} sx={{ width: 370, height: 150, backgroundColor: cardColor, borderColor: "#ffff" }} orientation="horizontal">
                    <Typography level="title-lg" fontWeight="md">Skills</Typography>
                    <CardContent sx={{ alignItems: "center" }}>
                    <AspectRatio ratio="1" variant="plain" sx={{ width: 150 }}>
                        <img src="public\skills.png" alt="" />
                    </AspectRatio>
                    </CardContent>
                </Card>
                <Grid container sx={{ flexGrow: 1 }} gap={4}>
                <Card sx={{ width: 150, backgroundColor: cardColor, borderColor: "#ffff" }} onClick={() => navigate('/certifications')}>
                    <Typography level="title-lg">Certifications</Typography>
                    <CardContent>
                        <img src="public\certifications.png" alt="" />
                    </CardContent>  
                </Card>
                <Card onClick={() => navigate('/contact')} sx={{ width: 150, textAlign: "center", backgroundColor: cardColor, borderColor: "#ffff" }}>
                    <Typography level="title-lg">Contact</Typography>
                    <CardContent>
                        <img src="public\contact.png" alt="" />
                    </CardContent>  
                </Card>
                </Grid>
            </Grid>
            </Grid>
        </div>
    )
}