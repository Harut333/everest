import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input, Text,
    Textarea
} from "@chakra-ui/react";

import {useState} from "react";
import {sendContactForm} from "../lib/api";
import Header from "../src/Header";

const initValues = {name: "", email: "", subject: "", message: "",}

const initState = {values: initValues}

export default function ContactF() {
    const [state, setState] = useState(initState)
    const {values, isLoading, error} = state

    const handleChange = ({target}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        },
    }))
    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true
        }))
        try {
            await sendContactForm(values)

        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }))
        }
    }
    return (
        <>
            <Header/>
            <Container style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "600px"
            }}>
                {error && (
                    <Text color="red.300" my={4} fontSize="xl">
                        {error}
                    </Text>
                )}
                <FormControl isRequired isInvalid={!values.name}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type={"text"}
                        name={"name"}
                        errorBorderColor="red.300"
                        value={values.name}
                        onChange={handleChange}
                    />
                    {/*<FormErrorMessage>Required</FormErrorMessage>*/}
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type={"email"}
                        name={"email"}
                        value={values.email}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Subject</FormLabel>
                    <Input
                        type={"text"}
                        name={"subject"}
                        value={values.subject}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        type={"text"}
                        name={"message"}
                        value={values.message}
                        onChange={handleChange}
                    />
                </FormControl>
                <Button
                    variant={"outline"}
                    // isLoading={isLoading}
                    disabled={
                        !values.name || values.email || values.subject || values.message
                    }
                    onClick={onSubmit}
                >Submit</Button>
            </Container>
        </>
    )
}