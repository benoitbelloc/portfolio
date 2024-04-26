import { Card, CardContent, Grid, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Hello</h1>
            <Grid container sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center"}} gap={4}>
            <Card sx={{ width: 250 }}>
                <Typography level="title-lg">Expériences</Typography>
                <CardContent>
                    <img onClick={() => navigate('/experiences')} src="public\experiences.png" alt="" />
                </CardContent>
            </Card>
            <Card sx={{ width: 250 }}>
                <Typography level="title-lg">Skills</Typography>
                <CardContent>
                    <img onClick={() => navigate('/skills')} src="public\skills.png" alt="" />
                </CardContent>
            </Card>
            <Card sx={{ width: 250 }}>
                <Typography level="title-lg">Certifications</Typography>
                <CardContent>
                    <img onClick={() => navigate('/certifications')} src="public\certifications.png" alt="" />
                </CardContent>  
            </Card>
            <Card sx={{ width: 250 }}>
                <Typography level="title-lg">Contact</Typography>
                <CardContent>
                    <img onClick={() => navigate('/contact')} src="public\contact.png" alt="" />
                </CardContent>
            </Card>
            </Grid>
        </div>
    )
}