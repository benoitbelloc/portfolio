import { Button, FormControl, FormLabel, Input, Stack, Step, StepButton, StepIndicator, Stepper, Textarea, Typography } from "@mui/joy";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { Check, CheckCircleIcon, MailIcon } from "lucide-react";


export default function Contact() {
    const navigate = useNavigate();
    const form = useRef() as React.MutableRefObject<HTMLFormElement>;
    
    const serviceId = 'service_hlcmb1s';
    const templateId = 'template_y3qid8l';
    const key = 'ZRgw1KtcWPfeBAi9e';
    
    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, form.current, {
            publicKey: key,
        })
        .then((result) => {
            console.log(result.text);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            form.current.reset();
        });
    }

    return (
        <div>
            <Button onClick={() => navigate('/home')} variant="outlined">Retour</Button>
            <Stack alignItems={"center"} justifyContent="center" mt={3}>
                    <form ref={form} onSubmit={sendEmail}>
                        
                        <FormControl>
                        <FormLabel>Nom</FormLabel>
                        <Input type="text" name="user_lastName" />
                        </FormControl>
                        <FormControl>
                        <FormLabel>Prénom</FormLabel>
                        <Input type="text" name="user_firstName" />
                        </FormControl>
                        <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="user_email" startDecorator={<MailIcon />}/>
                        </FormControl>
                        <FormControl>
                        <FormLabel>Objet</FormLabel>
                        <Input type="text" name="user_object" />
                        </FormControl>
                        <FormControl>
                        <FormLabel sx={{ gridColumn: '1/-1' }}>Message</FormLabel>
                        <Textarea required name="user_message" sx={{ height: 100 }}/>
                        </FormControl>
                        <Button 
                        type="submit"
                        variant="solid"
                        size="sm"
                        color="primary"
                        sx={{ gridColumn: '1/-1', mt: 1}}
                        // onClick={}
                        >
                            Envoyer
                        </Button>                        
            </form>           
            </Stack>
        </div>
    )
}

{/* <Stepper sx={{ width: '100%' }}>
                            <Step
                            active
                            indicator={
                              <StepIndicator variant="outlined" color="primary">
                                <CheckCircleIcon />
                              </StepIndicator>
                            }><Typography level="title-lg">Identité</Typography></Step>
                        </Stepper> */}